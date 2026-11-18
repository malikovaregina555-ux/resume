import {initFlowers,initPC} from './scene.js';
import {initCloudSky} from './cloud-sky.ts';
import {initLavaLamp} from './lava-lamp.ts';
import {initBackgroundMusic} from './background-music.js';


const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
initBackgroundMusic($$('.sound-toggle'));
let barcodeAudio;
$('.hero-barcode').addEventListener('click',async()=>{
  const AudioContext=window.AudioContext||window.webkitAudioContext;
  if(!AudioContext)return;
  try{
    barcodeAudio??=new AudioContext();
    if(barcodeAudio.state==='suspended')await barcodeAudio.resume();
    const time=barcodeAudio.currentTime;
    const tone=barcodeAudio.createOscillator();
    const gain=barcodeAudio.createGain();
    tone.frequency.value=2300;
    gain.gain.setValueAtTime(0,time);
    gain.gain.linearRampToValueAtTime(.1,time+.008);
    gain.gain.exponentialRampToValueAtTime(.001,time+.115);
    tone.connect(gain).connect(barcodeAudio.destination);
    tone.start(time);
    tone.stop(time+.12);
  }catch(error){console.debug('Barcode sound unavailable',error)}
});
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover:hover)').matches;
let photoLayer=0;
$$('.lead-wrap :is(.pol,.lead-img)').forEach(photo=>{
  const image=$('img',photo);
  photo.classList.add('is-draggable');
  let x=0,y=0,drag=null;
  photo.addEventListener('pointerdown',event=>{
    if(!event.isPrimary||event.button!==0)return;
    if(event.pointerType==='touch'&&photo.matches('.pol')){
      photo.focus({preventScroll:true});
      return;
    }
    event.preventDefault();
    const {clientX,clientY,pointerId,timeStamp}=event;
    const rect=photo.getBoundingClientRect();
    image.style.transformOrigin=`${clientX-rect.left}px ${clientY-rect.top}px`;
    drag={pointerId,startX:clientX-x,startY:clientY-y,lastX:clientX,lastY:clientY,timeStamp};
    photo.setPointerCapture(pointerId);
    photo.style.zIndex=++photoLayer;
    photo.classList.add('is-dragging');
    if(!reduce)image.style.transform='scale(1.06)';
  });
  photo.addEventListener('pointermove',event=>{
    if(drag?.pointerId!==event.pointerId)return;
    const {clientX,clientY,timeStamp}=event;
    x=clientX-drag.startX;
    y=clientY-drag.startY;
    photo.style.translate=`${x}px ${y}px`;
    const elapsed=Math.max(8,timeStamp-drag.timeStamp);
    const tilt=delta=>Math.max(-22,Math.min(22,delta*16/elapsed));
    if(!reduce)image.style.transform=`rotateX(${-tilt(clientY-drag.lastY)}deg) rotateY(${tilt(clientX-drag.lastX)}deg) scale(1.06)`;
    Object.assign(drag,{lastX:clientX,lastY:clientY,timeStamp});
  });
  const settle=event=>{
    if(drag?.pointerId!==event.pointerId)return;
    drag=null;
    photo.classList.remove('is-dragging');
    image.style.transform='';
  };
  ['pointerup','pointercancel','lostpointercapture'].forEach(type=>photo.addEventListener(type,settle));
});
gsap.registerPlugin(ScrollTrigger);
document.documentElement.classList.add('js');

/* ───────── smooth scroll ───────── */
let lenis=null;
if(!reduce){
  lenis=new Lenis({lerp:0.1});
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(t=>lenis.raf(t*1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}
const goTo=sel=>lenis?lenis.scrollTo(sel,{duration:1.5}):$(sel)?.scrollIntoView({behavior:'instant'});

/* ───────── helpers ───────── */
function splitChars(el){
  const t=el.textContent;el.setAttribute('aria-label',t);el.textContent='';
  return [...t].map(ch=>{const s=document.createElement('span');s.className='ch';s.setAttribute('aria-hidden','true');s.textContent=ch===' '?' ':ch;el.append(s);return s});
}
function splitWords(el){
  const frag=document.createDocumentFragment();
  const walk=(node,cls)=>{
    if(node.nodeType===3){node.textContent.split(/\s+/).filter(Boolean).forEach(w=>{const s=document.createElement('span');s.className='w'+(cls?' '+cls:'');s.textContent=w;frag.append(s,' ')})}
    else node.childNodes.forEach(n=>walk(n,node.tagName==='B'?'hl':cls));
  };
  el.childNodes.forEach(n=>walk(n,''));
  el.replaceChildren(frag);
  return $$('.w',el);
}

/* ───────── anchors ───────── */
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();goTo(a.getAttribute('href'))}));

/* The hero navigation gives way to a compact menu after the first screen. */
const hero=$('.hero'),flowerNav=$('.flower-nav'),siteMenu=$('#siteMenu');
const menuToggle=$('.site-menu__toggle'),menuPanel=$('#siteMenuPanel');
let previousScroll=window.scrollY;
function closeMenu(){
  menuPanel.hidden=true;
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.setAttribute('aria-label','Открыть меню');
}
function syncNavigation(){
  const rect=hero.getBoundingClientRect();
  const scrollingUp=window.scrollY < previousScroll;
  if(rect.top >= -20 || (scrollingUp && rect.bottom > 0))flowerNav.classList.remove('is-scrolled');
  else if(rect.top < -20)flowerNav.classList.add('is-scrolled');
  previousScroll=window.scrollY;
  const showMenu=rect.bottom <= 0;
  if(!showMenu&&!siteMenu.hidden)closeMenu();
  siteMenu.hidden=!showMenu;
}
menuToggle.addEventListener('click',()=>{
  const opening=menuPanel.hidden;
  menuPanel.hidden=!opening;
  menuToggle.setAttribute('aria-expanded',String(opening));
  menuToggle.setAttribute('aria-label',opening?'Закрыть меню':'Открыть меню');
});
menuPanel.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('click',e=>{if(!siteMenu.contains(e.target))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menuPanel.hidden){closeMenu();menuToggle.focus()}});
addEventListener('scroll',syncNavigation,{passive:true});
addEventListener('resize',syncNavigation);
syncNavigation();

/* ───────── cursor crosshair + guide lines + magnetic buttons ───────── */
if(fine){
  const cross=$('#cross'),gx=$('.gx'),gy=$('.gy');
  let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
  addEventListener('pointermove',e=>{
    mx=e.clientX;my=e.clientY;
    cross.classList.toggle('hot',!!e.target.closest?.('a,button,.proj,#pc'));
  },{passive:true});
  gsap.ticker.add(()=>{
    cx+=(mx-cx)*0.16;cy+=(my-cy)*0.16;
    cross.style.transform=`translate(${cx}px,${cy}px)`;
    gx.style.transform=`translateY(${cy}px)`;gy.style.transform=`translateX(${cx}px)`;
  });
}

/* ───────── scroll progress bar ───────── */
const bar=$('#pbar');
ScrollTrigger.create({start:0,end:'max',onUpdate:s=>{bar.style.transform=`scaleX(${s.progress})`}});

/* ───────── 3D scenes ───────── */
const flowers=initFlowers($('#flowers'),$('#flowerFront'));
const ticker=$('.mini-marq');
const tickerTrack=$('.mini-marq-track');
const tickerItem=tickerTrack.firstElementChild;
function fillTicker(){
  const count=Math.ceil(ticker.clientWidth/tickerItem.getBoundingClientRect().width)+1;
  if(!Number.isFinite(count)||tickerTrack.children.length===count*2)return;
  const items=Array.from({length:count*2-1},()=>tickerItem.cloneNode(true));
  tickerTrack.replaceChildren(tickerItem,...items);
}
fillTicker();
new ResizeObserver(fillTicker).observe(tickerItem);
new ResizeObserver(fillTicker).observe(ticker);
initCloudSky($('#cloudSky'));

const warp=$('#warpG');
for(let r=0;r<9;r++){let d='';for(let x=0;x<=600;x+=20)d+=(x?'L':'M')+x+' '+(30+r*42+Math.sin(x/85+r*0.55)*20);warp.insertAdjacentHTML('beforeend',`<path d="${d}"/>`)}
for(let c=0;c<15;c++){let d='';for(let y=0;y<=400;y+=20)d+=(y?'L':'M')+(c*43+Math.sin(y/70+c*0.7)*16)+' '+y;warp.insertAdjacentHTML('beforeend',`<path d="${d}"/>`)}
const hint=$('#pcHint');
const pc=initPC($('#pc'),{onPlay:()=>{hint.style.opacity=0}});
if(!pc)hint.textContent='Этот браузер не поддерживает WebGL';

/* ───────── scroll-driven animation ───────── */
function setupScroll(){
  if(reduce){
    $$('.lead').forEach(splitWords);
    ScrollTrigger.create({trigger:'#retro',start:'top bottom',end:'bottom top',onToggle:s=>pc?.setActive(s.isActive)});
    return;
  }

  /* giant headlines: letter-by-letter rise + handwriting wipe */
  $$('.mani .mt').forEach(mt=>{
    const chs=splitChars(mt);
    gsap.from(chs,{yPercent:120,rotate:7,opacity:0,duration:1.15,ease:'power4.out',stagger:{each:0.04,from:'start'},scrollTrigger:{trigger:mt,start:'top 92%',toggleActions:'play none none reverse'}});
  });
  $$('.ml .sc').forEach(sc=>{
    gsap.fromTo(sc,{clipPath:'inset(-70% 100% -70% -15%)'},{clipPath:'inset(-70% -15% -70% -15%)',duration:1.6,ease:'power2.inOut',delay:0.35,scrollTrigger:{trigger:sc.parentElement,start:'top 82%',toggleActions:'play none none reverse'}});
  });

  /* lead paragraphs: word scrub */
  $$('.lead').forEach(p=>{
    const words=splitWords(p);
    gsap.from(words,{opacity:0.12,stagger:0.06,ease:'none',scrollTrigger:{trigger:p,start:'top 82%',end:'bottom 50%',scrub:true}});
  });
  gsap.to('.ghost-marq',{xPercent:-12,ease:'none',scrollTrigger:{trigger:'.about-intro',start:'top bottom',end:'bottom top',scrub:true}});
  gsap.fromTo('.lead-img',{clipPath:'inset(100% 0 0 0)',scale:1.3},{clipPath:'inset(0% 0 0 0)',scale:1,duration:1.4,ease:'power4.out',scrollTrigger:{trigger:'.lead-img',start:'top 85%',toggleActions:'play none none reverse'}});
  gsap.matchMedia().add('(min-width: 901px)',()=>{
    $$('.pol').forEach((photo,index)=>{
      gsap.fromTo(photo,{y:55+index*15},{y:-45-index*15,ease:'none',scrollTrigger:{
        trigger:'.lead-wrap',start:'top 90%',end:'bottom 20%',scrub:true
      }});
    });
  });

  /* works: tilted 3D cards */
  $$('.proj').forEach(p=>{
    const f=$('.pframe',p),img=$('img',f);
    gsap.set(f,{transformPerspective:1500});
    gsap.timeline({scrollTrigger:{trigger:p,start:'top bottom',end:'bottom top',scrub:true}})
      .fromTo(f,{rotationX:62,scale:0.86,y:60},{rotationX:0,scale:1,y:0,ease:'none',duration:1})
      .to(f,{rotationX:-62,scale:0.86,y:-60,ease:'none',duration:1},'>0.1');
    gsap.fromTo(img,{yPercent:-4},{yPercent:4,ease:'none',scrollTrigger:{trigger:p,start:'top bottom',end:'bottom top',scrub:true}});
    if(fine){
      const ry=gsap.quickTo(f,'rotationY',{duration:0.8,ease:'power3'}),ix=gsap.quickTo(img,'x',{duration:0.9,ease:'power3'});
      p.addEventListener('pointermove',e=>{const r=p.getBoundingClientRect(),nx=(e.clientX-r.left)/r.width-0.5;ry(nx*10);ix(nx*-24)});
      p.addEventListener('pointerleave',()=>{ry(0);ix(0)});
    }
  });
  gsap.fromTo('.feat em',{y:60,opacity:0},{y:0,opacity:1,stagger:0.15,scrollTrigger:{trigger:'.feat',start:'top 88%',end:'top 55%',scrub:true}});
  gsap.fromTo('.ghost span',{yPercent:20},{yPercent:-20,ease:'none',stagger:0.05,scrollTrigger:{trigger:'.works',start:'top bottom',end:'bottom top',scrub:true}});

  /* services */
  $$('.svc-words p').forEach(p=>{
    const chs=$$('span',p).flatMap(splitChars);
    gsap.from(chs,{yPercent:110,opacity:0,duration:1,ease:'power4.out',stagger:0.03,scrollTrigger:{trigger:p,start:'top 92%',toggleActions:'play none none reverse'}});
    gsap.fromTo($('.th',p),{y:40,scale:0.6,opacity:0},{y:-30,scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:p,start:'top 90%',end:'bottom 30%',scrub:true}});
  });

  /* retro */
  ScrollTrigger.create({trigger:'#retro',start:'top bottom',end:'bottom top',onToggle:s=>pc?.setActive(s.isActive)});
  ScrollTrigger.create({trigger:'#retro',start:'top top',end:'bottom bottom',scrub:true,onUpdate:s=>pc?.setProgress(s.progress)});
  gsap.fromTo('.warp',{yPercent:-10,skewX:-6},{yPercent:10,skewX:6,ease:'none',scrollTrigger:{trigger:'#retro',start:'top bottom',end:'bottom top',scrub:true}});

  /* scroll velocity → skew headlines, speed up marquees */
  if(lenis){
    const skews=['.mani','.svc-words','.feat'].map(s=>gsap.quickTo(s,'skewY',{duration:0.7,ease:'power3'}));
    const anims=()=>[...$$('.mq-in'),...$$('.ghost-marq div')].flatMap(e=>e.getAnimations());
    lenis.on('scroll',({velocity})=>{
      const k=gsap.utils.clamp(-5,5,velocity*0.14);skews.forEach(s=>s(k));
      const rate=1+Math.min(Math.abs(velocity)*0.35,7);anims().forEach(a=>{a.playbackRate=rate});
    });
  }
}

/* ───────── loader → hero intro ───────── */
const loader=$('#loader'),num=$('#ldNum');
const loaderProgress=$('#loaderProgress');
if(!reduce)gsap.set('.flower-nav a',{opacity:0});
const disposeLamp=reduce?null:initLavaLamp($('.lava-lamp',loader));
let started=false;
function start(){
  if(started)return;started=true;
  setupScroll();
  if(reduce){loader.remove();flowers?.intro();return}
  const tl=gsap.timeline({defaults:{ease:'power4.out'}});
  tl.to('.ld-bot',{opacity:0,y:-30,duration:0.5,ease:'power2.in'})
    .to(loader,{clipPath:'inset(0 0 100% 0)',duration:1.1,ease:'power4.inOut',onComplete:()=>{disposeLamp?.();loader.remove()}},'>-0.1')
    .from('.hero .card',{clipPath:'inset(46% 46% 46% 46%)',duration:1.5,ease:'expo.out'},'<0.35')
    .from('.info > *',{opacity:0,y:20,stagger:0.12,duration:1},'<0.6')
    .from('.hero-line,.scroll-hint,.mini-marq',{opacity:0,y:16,stagger:0.08,duration:0.9},'<0.2')
    .add(()=>{flowers?.intro();lenis?.start()},'<0.1')
    .to('.flower-nav a',{opacity:1,stagger:0.1,duration:0.3},'+=1.3');
}
if(reduce){start()}else{
  document.documentElement.classList.add('is-loading');
  const cnt={v:0};
  const paint=()=>{
    num.textContent=String(Math.round(cnt.v)).padStart(3,'0');
    const travel=loader.clientHeight-loaderProgress.offsetHeight;
    loaderProgress.style.transform=`translateY(${-travel*cnt.v/100}px)`;
  };
  gsap.to(cnt,{v:88,duration:1.8,ease:'power2.out',onUpdate:paint});
  const ready=Promise.all([
    new Promise(r=>document.readyState==='complete'?r():addEventListener('load',r,{once:true})),
    document.fonts?.ready||Promise.resolve(),
    new Promise(r=>setTimeout(r,1300))
  ]);
  const finish=()=>{gsap.killTweensOf(cnt);gsap.to(cnt,{v:100,duration:0.4,ease:'none',onUpdate:paint,onComplete:()=>{document.documentElement.classList.remove('is-loading');start()}})};
  ready.then(finish);
  setTimeout(finish,6000);
}

addEventListener('load',()=>ScrollTrigger.refresh());
