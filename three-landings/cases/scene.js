import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/RoomEnvironment.js';
import {RoundedBoxGeometry} from 'three/addons/RoundedBoxGeometry.js';

import {makeMetalFlower,makeMetalMaterial} from './metal-flower.ts';

export const hasWebGL=()=>{try{const c=document.createElement('canvas');return !!(c.getContext('webgl2')||c.getContext('webgl'))}catch{return false}};
const sm=(a,b,x)=>{x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)};
const lerp=(a,b,t)=>a+(b-a)*t;

function makeRenderer(canvas){
  const r=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});
  r.setPixelRatio(Math.min(devicePixelRatio,2));
  r.toneMapping=THREE.ACESFilmicToneMapping;
  r.toneMappingExposure=1.05;
  return r;
}
function makeEnv(r){
  const pm=new THREE.PMREMGenerator(r);
  const t=pm.fromScene(new RoomEnvironment(),0.04).texture;
  pm.dispose();
  return t;
}
function fit(renderer,camera,canvas){
  const w=canvas.clientWidth||innerWidth,h=canvas.clientHeight||innerHeight;
  renderer.setSize(w,h,false);
  camera.aspect=w/h;camera.updateProjectionMatrix();
  return w/h;
}

function makeFlowerHalo(canvas,flower,camera){
  const halo=document.createElement('div');
  const radius=90;
  halo.className='flower-halo';
  halo.hidden=true;
  halo.setAttribute('aria-hidden','true');
  canvas.before(halo);

  const ray=new THREE.Raycaster();
  const pointer=new THREE.Vector2();
  const hero=document.querySelector('.hero');
  const card=hero.querySelector('.card');
  const ellipse=card.querySelector('.ellipse');
  let mouse=null;
  addEventListener('pointermove',event=>{
    mouse=event.pointerType==='mouse'?{x:event.clientX,y:event.clientY}:null;
  },{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>{mouse=null});
  addEventListener('blur',()=>{mouse=null});

  function visibleAt(x,y){
    const bounds=card.getBoundingClientRect();
    if(x<bounds.left||x>bounds.right||y<bounds.top||y>bounds.bottom)return true;
    const rect=ellipse.getBoundingClientRect();
    const matrix=new DOMMatrixReadOnly(getComputedStyle(ellipse).transform).inverse();
    const point=matrix.transformPoint(new DOMPoint(x-rect.left-rect.width/2,y-rect.top-rect.height/2));
    return (2*point.x/ellipse.offsetWidth)**2+(2*point.y/ellipse.offsetHeight)**2<=1;
  }

  function clear(){
    if(halo.hidden)return;
    halo.hidden=true;
  }

  return opacity=>{
    if(!mouse||opacity===0)return clear();
    const {x,y}=mouse;
    const rect=canvas.getBoundingClientRect();
    pointer.set((x-rect.left)/rect.width*2-1,1-(y-rect.top)/rect.height*2);
    ray.setFromCamera(pointer,camera);
    if(!ray.intersectObject(flower,true).length||!visibleAt(x,y))return clear();

    const left=Math.round(x-radius),top=Math.round(y-radius);
    halo.style.transform=`translate(${left}px,${top}px)`;
    halo.style.opacity=opacity;
    halo.hidden=false;
  };
}

/* ───────────── metal flowers ───────────── */
export function initFlowers(canvas,frontCanvas){
  if(!hasWebGL())return null;
  const renderer=makeRenderer(canvas);
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(32,1,.1,60);
  camera.position.z=9;
  const rig=new THREE.Group();
  const flower=new THREE.Group();
  scene.add(rig);
  rig.add(flower);
  const {head,petals,stem,leaves}=makeMetalFlower();
  const front=frontCanvas.getContext('2d');
  head.traverse(part=>part.layers.set(1));
  flower.add(head,stem,...leaves);
  const updateHalo=makeFlowerHalo(canvas,flower,camera);

  const manifest=document.querySelector('.manifest');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const compact=matchMedia('(max-width:800px), (max-aspect-ratio: 1/1)');
  const labels=[...document.querySelectorAll('.flower-nav a')];
  const targets=[[.49,.38],[.43,.43],[.435,.763],[.51,.38],[.57,.42],[.496,.85]];
  const cardElement=document.querySelector('.hero .card');
  const ellipse=cardElement.querySelector('.ellipse');
  const updateLeaders=()=>{
    const rect=document.querySelector('.hero .card').getBoundingClientRect();
    const positions=labels.map(label=>label.getBoundingClientRect());
    labels.forEach((label,i)=>{
      const [x,y]=targets[i];
      const anchor=positions[i];
      const dx=rect.left+x*rect.width-(i<3?anchor.right:anchor.left);
      const dy=rect.top+y*rect.height-(anchor.top+anchor.height/2);
      label.style.setProperty('--leader',`${Math.hypot(dx,dy)}px`);
      label.style.setProperty('--angle',`${Math.atan2(dy,dx)}rad`);
    });
  };
  const resize=()=>{
    const aspect=fit(renderer,camera,canvas);
    rig.scale.setScalar(Math.min(1,aspect*1.46));
    head.scale.setScalar(compact.matches?1.64:2.31);
    frontCanvas.width=canvas.width;
    frontCanvas.height=canvas.height;
    updateLeaders();
  };
  resize();
  addEventListener('resize',resize);
  let mx=0,my=0,smx=0,smy=0;
  addEventListener('pointermove',e=>{mx=e.clientX/innerWidth*2-1;my=e.clientY/innerHeight*2-1},{passive:true});
  const entrance={y:-3.4,rotation:-.85};
  let introduced=false;
  const intro=()=>{
    if(introduced)return;
    introduced=true;
    if(window.gsap&&!reduce.matches){
      gsap.to(entrance,{y:0,rotation:0,duration:2.6,ease:'power3.out'});
    }else{
      entrance.y=0;
      entrance.rotation=0;
    }
  };
  setTimeout(intro,8000);

  canvas.addEventListener('webglcontextlost',e=>e.preventDefault());
  const loop=now=>{
    requestAnimationFrame(loop);
    if(document.hidden)return;
    const overlap=1-manifest.getBoundingClientRect().top/innerHeight;
    const opacity=1-sm(.34,1,overlap);
    canvas.style.opacity=opacity;
    const showFront=!!front&&!compact.matches&&overlap<.4;
    frontCanvas.hidden=!showFront;
    frontCanvas.style.opacity=opacity;
    if(opacity===0){updateHalo(0);return;}

    const motion=reduce.matches?0:1;
    const time=now/1000;
    smx+=(mx-smx)*.05;
    smy+=(my-smy)*.05;
    flower.position.y=entrance.y+(compact.matches?.32:.61)+motion*sm(0,.88,overlap)*1.9;
    flower.rotation.y=entrance.rotation+motion*Math.PI*sm(0,.8,overlap);
    petals.forEach((petal,i)=>{
      petal.rotation.x=.18+motion*.1225*Math.sin(time*1.7+i*Math.PI/4);
    });
    head.rotation.set(-.42+motion*(Math.sin(time*.6)*.07+smy*.08),-.08+motion*smx*.22,-.05);
    // Only the bloom crosses the paper; the stem is still masked by the card.
    if(showFront){
      camera.layers.set(1);
      renderer.render(scene,camera);
      front.clearRect(0,0,frontCanvas.width,frontCanvas.height);
      // Keep the stem above the leaders inside the ellipse and behind the paper.
      camera.layers.set(0);
      renderer.render(scene,camera);
      const bounds=canvas.getBoundingClientRect();
      const oval=ellipse.getBoundingClientRect();
      const sx=frontCanvas.width/bounds.width,sy=frontCanvas.height/bounds.height;
      front.save();
      front.beginPath();
      front.ellipse((oval.left+oval.width/2-bounds.left)*sx,(oval.top+oval.height/2-bounds.top)*sy,ellipse.offsetWidth*sx/2,ellipse.offsetHeight*sy/2,-12*Math.PI/180,0,Math.PI*2);
      front.clip();
      front.globalCompositeOperation='source-over';
      front.drawImage(canvas,0,0);
      front.restore();
      camera.layers.set(1);
      renderer.render(scene,camera);
      front.drawImage(canvas,0,0);
    }
    camera.layers.set(0);
    if(!showFront)camera.layers.enable(1);
    renderer.render(scene,camera);
    updateHalo(opacity);
  };
  requestAnimationFrame(loop);
  return {intro};
}

/* ───────────── retro computer + snake ───────────── */
export function initPC(canvas,{onPlay}={}){
  if(!hasWebGL())return null;
  const renderer=makeRenderer(canvas);
  const scene=new THREE.Scene();scene.environment=makeEnv(renderer);
  const camera=new THREE.PerspectiveCamera(30,1,0.1,50);
  const sun=new THREE.DirectionalLight(0xffffff,1.3);sun.position.set(3,4,5);scene.add(sun,new THREE.AmbientLight(0xffffff,0.35));

  const cream=new THREE.MeshStandardMaterial({color:'#f1d39b',roughness:0.55,envMapIntensity:0.7});
  const blue=new THREE.MeshStandardMaterial({color:'#D6E3EF',roughness:0.6,envMapIntensity:0.7});
  const dark=new THREE.MeshStandardMaterial({color:'#141414',roughness:0.5});
  const pc=new THREE.Group();scene.add(pc);
  const mesh=(g,m,x,y,z)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);pc.add(o);return o};
  mesh(new RoundedBoxGeometry(1.7,1.9,0.8,5,0.1),cream,0,0,0.45);
  mesh(new RoundedBoxGeometry(1.6,1.82,1.0,5,0.1),blue,0,0.01,-0.35);
  mesh(new RoundedBoxGeometry(1.3,1.05,0.12,3,0.05),makeMetalMaterial(),0,0.32,0.87);
  mesh(new THREE.BoxGeometry(0.62,0.05,0.03),dark,0,-0.5,0.86);
  mesh(new THREE.BoxGeometry(0.14,0.05,0.03),dark,0.55,-0.5,0.86);
  for(let i=0;i<5;i++)mesh(new THREE.BoxGeometry(0.014,0.03,0.52),dark,0.81,-0.3-i*0.085,-0.35);

  // snake game drawn on a canvas texture
  const W=320,H=240,cols=16,rows=12,cell=20;
  const gc=document.createElement('canvas');gc.width=W;gc.height=H;const g=gc.getContext('2d');
  const tex=new THREE.CanvasTexture(gc);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;
  const screen=mesh(new THREE.PlaneGeometry(1.14,0.855),new THREE.MeshBasicMaterial({map:tex,toneMapped:false}),0,0.32,0.935);

  let state='idle',snake,dir,nextDir,food,score=0,best=0,acc=0,active=false;
  const reset=()=>{snake=[{x:5,y:6},{x:4,y:6},{x:3,y:6}];dir=nextDir={x:1,y:0};score=0;spawn()};
  const spawn=()=>{do{food={x:Math.floor(Math.random()*cols),y:Math.floor(Math.random()*rows)}}while(snake.some(s=>s.x===food.x&&s.y===food.y))};
  const step=()=>{
    dir=nextDir;const h={x:snake[0].x+dir.x,y:snake[0].y+dir.y};
    if(h.x<0||h.y<0||h.x>=cols||h.y>=rows||snake.some(s=>s.x===h.x&&s.y===h.y)){state='over';best=Math.max(best,score);canvas.style.touchAction='pan-y';return}
    snake.unshift(h);
    if(h.x===food.x&&h.y===food.y){score++;spawn()}else snake.pop();
  };
  const text=(s,x,y,size,color,font='"Courier New",monospace')=>{g.fillStyle=color;g.font=`bold ${size}px ${font}`;g.textAlign='center';g.fillText(s,x,y)};
  const draw=()=>{
    g.fillStyle='#D6E3EF';g.fillRect(0,0,W,H);
    g.fillStyle='rgba(43,15,36,.07)';for(let x=0;x<cols;x++)for(let y=0;y<rows;y++)if((x+y)%2)g.fillRect(x*cell,y*cell,cell,cell);
    if(state==='idle'){
      text('ЗМЕЙКА',W/2,82,40,'#2b0f24');text('Сыграем?',W/2,120,16,'#2b0f24');
      g.fillStyle='#D6AFB2';g.fillRect(W/2-46,142,92,30);text('СТАРТ',W/2,163,16,'#2b0f24');
      text('стрелки / WASD',W/2,206,11,'#604452');
    }else{
      snake.forEach((s,i)=>{g.fillStyle=i?'#a64e72':'#2b0f24';g.fillRect(s.x*cell+1,s.y*cell+1,cell-2,cell-2)});
      g.fillStyle='#f0a23a';g.beginPath();g.arc(food.x*cell+cell/2,food.y*cell+cell/2,7,0,7);g.fill();
      g.textAlign='left';g.fillStyle='#2b0f24';g.font='bold 12px "Courier New",monospace';g.fillText('СЧЁТ '+score,6,14);
      if(state==='over'){g.fillStyle='rgba(214,227,239,.94)';g.fillRect(0,0,W,H);text('ИГРА ОКОНЧЕНА',W/2,92,30,'#2b0f24');text('счёт '+score+'  ·  рекорд '+best,W/2,124,14,'#2b0f24');
        g.fillStyle='#D6AFB2';g.fillRect(W/2-56,142,112,30);text('ЕЩЁ РАЗ',W/2,163,16,'#2b0f24')}
    }
    tex.needsUpdate=true;
  };
  reset();draw();
  const start=()=>{reset();state='play';acc=0;canvas.style.touchAction='none';onPlay&&onPlay()};

  const turn=(x,y)=>{if(state!=='play')return;if(x===-dir.x&&y===-dir.y)return;nextDir={x,y}};
  addEventListener('keydown',e=>{
    if(state!=='play')return;
    const k=e.key.toLowerCase(),m={arrowup:[0,-1],w:[0,-1],arrowdown:[0,1],s:[0,1],arrowleft:[-1,0],a:[-1,0],arrowright:[1,0],d:[1,0]}[k];
    if(m){e.preventDefault();turn(...m)}else if(k==='escape'){state='idle';canvas.style.touchAction='pan-y'}
  });

  // pointer: hit-test the screen
  const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();
  const hit=e=>{const r=canvas.getBoundingClientRect();ndc.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1);ray.setFromCamera(ndc,camera);return ray.intersectObject(screen)[0]};
  let down=null,over=false;
  canvas.addEventListener('pointermove',e=>{over=!!hit(e);canvas.style.cursor=over?'pointer':''});
  canvas.addEventListener('pointerleave',()=>{over=false});
  canvas.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY}});
  canvas.addEventListener('pointerup',e=>{
    if(!down)return;const dx=e.clientX-down.x,dy=e.clientY-down.y;down=null;
    if(state==='play'&&Math.hypot(dx,dy)>24){Math.abs(dx)>Math.abs(dy)?turn(Math.sign(dx),0):turn(0,Math.sign(dy));return}
    if(Math.hypot(dx,dy)<12&&state!=='play'&&hit(e))start();
  });

  let aspect=1,progress=0,focus=0,mx=0,my=0,last=performance.now();
  const resize=()=>{aspect=fit(renderer,camera,canvas);camera.position.set(0,0.1,aspect<1?8.5/Math.max(0.6,aspect*1.15):8.5)};
  resize();addEventListener('resize',resize);
  addEventListener('pointermove',e=>{mx=e.clientX/innerWidth*2-1;my=e.clientY/innerHeight*2-1},{passive:true});

  const loop=now=>{
    requestAnimationFrame(loop);
    const dt=now-last;last=now;
    if(!active||document.hidden)return;
    if(state==='play'){acc+=dt;while(acc>230){acc-=230;step()}draw()}
    const want=(state==='play'||over)?1:0;focus+=(want-focus)*0.06;
    const t=now/1000,e=progress*progress*(3-2*progress);
    pc.rotation.y=lerp(lerp(-1.05,0.5,e)+mx*0.12,0,focus);
    pc.rotation.x=lerp(Math.sin(progress*Math.PI)*0.18-0.08+my*0.06,0,focus);
    pc.rotation.z=lerp(Math.sin(progress*Math.PI*2)*0.05,0,focus);
    pc.position.y=lerp(0.35,-0.25,e)+Math.sin(t*0.9)*0.04;
    renderer.render(scene,camera);
  };
  requestAnimationFrame(loop);
  return {setProgress:p=>{progress=p},setActive:v=>{active=v;if(!v&&state==='play'){state='idle';draw()}}};
}
