import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/RoomEnvironment.js';
import {RoundedBoxGeometry} from 'three/addons/RoundedBoxGeometry.js';

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

/* ───────────── calla lilies (procedural) ───────────── */
function spatheGeometry(){
  const U=64,V=52,H=1.9;
  const pos=[],col=[],idx=[];
  const c0=new THREE.Color('#3a0919'),c1=new THREE.Color('#a3234f'),c2=new THREE.Color('#f27fab'),c=new THREE.Color();
  for(let j=0;j<=V;j++){
    const v=j/V;
    const R=0.06+0.52*Math.pow(v,1.5);
    const half=Math.PI*(1-0.42*sm(0.3,1,v));
    for(let i=0;i<=U;i++){
      const t=i/U*2-1,e=Math.abs(t),th=t*half;
      let y=H*v-0.3*H*sm(0.45,1,v)*Math.pow(e,1.6)+0.1*H*sm(0.72,1,v)*Math.pow(1-e,5);
      const curl=0.5*Math.pow(v,3)*Math.pow(1-e,1.2);
      pos.push(R*Math.sin(th),y,-R*Math.cos(th)-curl);
      if(v<0.6)c.copy(c0).lerp(c1,v/0.6);else c.copy(c1).lerp(c2,(v-0.6)/0.4);
      col.push(c.r,c.g,c.b);
    }
  }
  for(let j=0;j<V;j++)for(let i=0;i<U;i++){
    const a=j*(U+1)+i,b=a+1,d=a+U+1,e=d+1;
    idx.push(a,d,b,b,d,e);
  }
  const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
  g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));
  g.setIndex(idx);g.computeVertexNormals();
  return g;
}

export function initFlowers(canvas){
  if(!hasWebGL())return null;
  const renderer=makeRenderer(canvas);
  const scene=new THREE.Scene();
  scene.environment=makeEnv(renderer);
  const camera=new THREE.PerspectiveCamera(32,1,0.1,60);
  camera.position.set(0,0,9);
  const sun=new THREE.DirectionalLight(0xfff1f4,1.5);sun.position.set(3,4,5);scene.add(sun,new THREE.AmbientLight(0xffffff,0.25));

  const petal=new THREE.MeshPhysicalMaterial({vertexColors:true,side:THREE.DoubleSide,metalness:0.4,roughness:0.26,clearcoat:1,clearcoatRoughness:0.12,envMapIntensity:1.5});
  const stemM=new THREE.MeshStandardMaterial({color:'#6a1430',metalness:0.3,roughness:0.4,envMapIntensity:1});
  const spadM=new THREE.MeshStandardMaterial({color:'#efd98a',roughness:0.5});
  const spatheG=spatheGeometry();
  const stemCurve=new THREE.CatmullRomCurve3([[0,0.02,0],[0.04,-1.6,0.05],[-0.09,-4,-0.02],[0.02,-9,0],[0.03,-18,0]].map(p=>new THREE.Vector3(...p)));
  const stemG=new THREE.TubeGeometry(stemCurve,140,0.036,8,false);

  const rig=new THREE.Group();scene.add(rig);
  /* a bouquet: every stem points at the same bundle point B below the frame */
  const B=[0,-8];
  const defs=[
    {s:1.45,p:[0.05,-0.6,0],ry:0.25,ph:0},
    {s:1.15,p:[0.95,-1.45,0.3],ry:-0.5,ph:1.7},
    {s:1.0,p:[-0.9,-1.8,0.2],ry:0.7,ph:3.1},
    {s:0.72,p:[0.3,-2.6,0.35],ry:1.5,ph:4.6}
  ];
  const flowers=defs.map(d=>{
    const g=new THREE.Group(),h=new THREE.Group();
    h.add(new THREE.Mesh(spatheG,petal),new THREE.Mesh(stemG,stemM));
    const sp=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.045,0.8,12),spadM);sp.position.set(0,0.95,-0.04);sp.rotation.x=-0.12;h.add(sp);
    g.add(h);
    g.scale.setScalar(d.s);g.position.set(...d.p);
    g.rotation.z=Math.atan2(B[0]-d.p[0],d.p[1]-B[1]);
    g.userData={...d,h};
    rig.add(g);return g;
  });

  canvas.addEventListener('webglcontextlost',e=>e.preventDefault());
  let aspect=fit(renderer,camera,canvas),mx=0,my=0,smx=0,smy=0,paused=false,t0=performance.now();
  const resize=()=>{aspect=fit(renderer,camera,canvas);rig.scale.setScalar(Math.min(0.92,Math.max(0.5,aspect/1.55)))};
  resize();addEventListener('resize',resize);
  addEventListener('pointermove',e=>{mx=e.clientX/innerWidth*2-1;my=e.clientY/innerHeight*2-1},{passive:true});
  rig.position.y=-3.4;rig.rotation.y=-1.8;
  let introduced=false;
  const intro=()=>{
    if(introduced)return;introduced=true;
    if(window.gsap){gsap.to(rig.position,{y:0,duration:2.6,ease:'power3.out'});gsap.to(rig.rotation,{y:0,duration:3.2,ease:'power3.out'})}
    else{rig.position.y=0;rig.rotation.y=0}
  };
  setTimeout(intro,8000);

  const loop=()=>{
    requestAnimationFrame(loop);
    if(paused||document.hidden)return;
    const t=(performance.now()-t0)/1000;
    smx+=(mx-smx)*0.05;smy+=(my-smy)*0.05;
    const sc=window.scrollY/innerHeight;
    rig.userData.scroll=sc;
    rig.children.forEach(f=>{
      const d=f.userData;
      d.h.rotation.y=d.ry+Math.sin(t*0.35+d.ph)*0.22+smx*0.3;
      d.h.rotation.x=Math.sin(t*0.6+d.ph)*0.03+smy*0.08;
      f.position.y=d.p[1]+Math.min(sc,2.4)*(0.45+d.s*0.3)+Math.sin(t*0.5+d.ph)*0.04;
    });
    renderer.render(scene,camera);
  };
  loop();
  return {pause:v=>{paused=v},intro};
}

/* ───────────── retro computer + snake ───────────── */
export function initPC(canvas,{onPlay}={}){
  if(!hasWebGL())return null;
  const renderer=makeRenderer(canvas);
  const scene=new THREE.Scene();scene.environment=makeEnv(renderer);
  const camera=new THREE.PerspectiveCamera(30,1,0.1,50);
  const sun=new THREE.DirectionalLight(0xffffff,1.3);sun.position.set(3,4,5);scene.add(sun,new THREE.AmbientLight(0xffffff,0.35));

  const cream=new THREE.MeshStandardMaterial({color:'#f1d39b',roughness:0.55,envMapIntensity:0.7});
  const olive=new THREE.MeshStandardMaterial({color:'#8f9760',roughness:0.6,envMapIntensity:0.7});
  const dark=new THREE.MeshStandardMaterial({color:'#141414',roughness:0.5});
  const pc=new THREE.Group();scene.add(pc);
  const mesh=(g,m,x,y,z)=>{const o=new THREE.Mesh(g,m);o.position.set(x,y,z);pc.add(o);return o};
  mesh(new RoundedBoxGeometry(1.7,1.9,0.8,5,0.1),cream,0,0,0.45);
  mesh(new RoundedBoxGeometry(1.6,1.82,1.0,5,0.1),olive,0,0.01,-0.35);
  mesh(new RoundedBoxGeometry(1.3,1.05,0.12,3,0.05),dark,0,0.32,0.87);
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
    g.fillStyle='#0c3a1d';g.fillRect(0,0,W,H);
    g.fillStyle='rgba(255,255,255,.04)';for(let x=0;x<cols;x++)for(let y=0;y<rows;y++)if((x+y)%2)g.fillRect(x*cell,y*cell,cell,cell);
    if(state==='idle'){
      text('SNAKE',W/2,82,40,'#f5a3c0');text('Wanna play a game?',W/2,120,16,'#f1d39b');
      g.fillStyle='#f5a3c0';g.fillRect(W/2-46,142,92,30);text('START',W/2,163,16,'#0c3a1d');
      text('arrows / WASD',W/2,206,11,'rgba(241,211,155,.6)');
    }else{
      snake.forEach((s,i)=>{g.fillStyle=i?'#f07aa6':'#ffd0e0';g.fillRect(s.x*cell+1,s.y*cell+1,cell-2,cell-2)});
      g.fillStyle='#f0a23a';g.beginPath();g.arc(food.x*cell+cell/2,food.y*cell+cell/2,7,0,7);g.fill();
      g.textAlign='left';g.fillStyle='rgba(241,211,155,.8)';g.font='bold 12px "Courier New",monospace';g.fillText('SCORE '+score,6,14);
      if(state==='over'){g.fillStyle='rgba(12,58,29,.82)';g.fillRect(0,0,W,H);text('GAME OVER',W/2,92,30,'#f5a3c0');text('score '+score+'  ·  best '+best,W/2,124,14,'#f1d39b');
        g.fillStyle='#f5a3c0';g.fillRect(W/2-56,142,112,30);text('AGAIN',W/2,163,16,'#0c3a1d')}
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
