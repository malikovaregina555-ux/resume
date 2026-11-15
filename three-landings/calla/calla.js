import {initFlowers,initPC} from './scene.js';

const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover:hover)').matches;
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
const goTo=sel=>lenis?lenis.scrollTo(sel,{duration:1.5}):$(sel)?.scrollIntoView({behavior:'smooth'});

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

/* ───────── menu + anchors ───────── */
const menu=$('#menu'),btn=$('#menuBtn');
const toggle=open=>{menu.classList.toggle('open',open);btn.setAttribute('aria-expanded',open);open?lenis?.stop():lenis?.start()};
btn.addEventListener('click',()=>toggle(!menu.classList.contains('open')));
addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open'))toggle(false)});
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();toggle(false);goTo(a.getAttribute('href'))}));

/* ───────── cursor crosshair + guide lines + magnetic buttons ───────── */
if(fine){
  const cross=$('#cross'),gx=$('.gx'),gy=$('.gy');
  let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
  addEventListener('pointermove',e=>{
    mx=e.clientX;my=e.clientY;
    cross.classList.toggle('hot',!!e.target.closest?.('a,button,.proj,.pb-track figure,#pc'));
  },{passive:true});
  gsap.ticker.add(()=>{
    cx+=(mx-cx)*0.16;cy+=(my-cy)*0.16;
    cross.style.transform=`translate(${cx}px,${cy}px)`;
    gx.style.transform=`translateY(${cy}px)`;gy.style.transform=`translateX(${cx}px)`;
  });
  if(!reduce)$$('.round,.scroll-hint b,.menu-btn').forEach(el=>{
    const xt=gsap.quickTo(el,'x',{duration:0.6,ease:'elastic.out(1,0.5)'}),yt=gsap.quickTo(el,'y',{duration:0.6,ease:'elastic.out(1,0.5)'});
    el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();xt((e.clientX-r.left-r.width/2)*0.4);yt((e.clientY-r.top-r.height/2)*0.4)});
    el.addEventListener('pointerleave',()=>{xt(0);yt(0)});
  });
}

/* ───────── scroll progress bar ───────── */
const bar=$('#pbar');
ScrollTrigger.create({start:0,end:'max',onUpdate:s=>{bar.style.transform=`scaleX(${s.progress})`}});

/* ───────── 3D scenes ───────── */
const flowers=initFlowers($('#flowers'));
const warp=$('#warpG');
for(let r=0;r<9;r++){let d='';for(let x=0;x<=600;x+=20)d+=(x?'L':'M')+x+' '+(30+r*42+Math.sin(x/85+r*0.55)*20);warp.insertAdjacentHTML('beforeend',`<path d="${d}"/>`)}
for(let c=0;c<15;c++){let d='';for(let y=0;y<=400;y+=20)d+=(y?'L':'M')+(c*43+Math.sin(y/70+c*0.7)*16)+' '+y;warp.insertAdjacentHTML('beforeend',`<path d="${d}"/>`)}
const hint=$('#pcHint');
const pc=initPC($('#pc'),{onPlay:()=>{hint.style.opacity=0}});
if(!pc)hint.textContent='WebGL is not available in this browser';

/* contact marquee */
const unit='<span class="t">Send an email</span><span class="s">i’m eager to</span><span class="b">✉</span><span class="t">Send an email</span><span class="s">hear from you</span><span class="b">✉</span>';
$('#mq').innerHTML=unit+unit;

/* ───────── scroll-driven animation ───────── */
function setupScroll(){
  if(reduce){
    $$('.lead').forEach(splitWords);
    ScrollTrigger.create({trigger:'#retro',start:'top bottom',end:'bottom top',onToggle:s=>pc?.setActive(s.isActive)});
    document.documentElement.classList.add('static-reel');
    return;
  }

  /* hero */
  gsap.to('.ellipse',{rotate:-4,scale:1.08,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  if(fine){
    const ex=gsap.quickTo('.ellipse','x',{duration:1.2,ease:'power3'}),ey=gsap.quickTo('.ellipse','y',{duration:1.2,ease:'power3'});
    addEventListener('pointermove',e=>{ex((e.clientX/innerWidth-0.5)*-50);ey((e.clientY/innerHeight-0.5)*-30)},{passive:true});
  }
  if(flowers){
    const cv=$('#flowers');
    ScrollTrigger.create({trigger:'.manifest',start:'top 60%',end:'top 8%',scrub:true,onUpdate:s=>{cv.style.opacity=1-s.progress}});
    ScrollTrigger.create({trigger:'.lead-wrap',start:'top bottom',onEnter:()=>flowers.pause(true),onLeaveBack:()=>flowers.pause(false)});
  }

  /* giant headlines: letter-by-letter rise + handwriting wipe */
  $$('.mani .mt,.big .mt').forEach(mt=>{
    const chs=splitChars(mt);
    gsap.from(chs,{yPercent:120,rotate:7,opacity:0,duration:1.15,ease:'power4.out',stagger:{each:0.04,from:'start'},scrollTrigger:{trigger:mt,start:'top 92%',toggleActions:'play none none reverse'}});
  });
  $$('.ml .sc').forEach(sc=>{
    gsap.fromTo(sc,{clipPath:'inset(-30% 100% -30% 0)'},{clipPath:'inset(-30% -6% -30% -6%)',duration:1.6,ease:'power2.inOut',delay:0.35,scrollTrigger:{trigger:sc.parentElement,start:'top 82%',toggleActions:'play none none reverse'}});
  });

  /* lead paragraphs: word scrub */
  $$('.lead').forEach(p=>{
    const words=splitWords(p);
    gsap.from(words,{opacity:0.12,stagger:0.06,ease:'none',scrollTrigger:{trigger:p,start:'top 82%',end:'bottom 50%',scrub:true}});
  });
  gsap.from('.mono',{scale:0.7,opacity:0,duration:1.4,ease:'power3.out',scrollTrigger:{trigger:'.mono',start:'top 80%'}});
  gsap.to('.ghost-marq',{xPercent:-12,ease:'none',scrollTrigger:{trigger:'.about-intro',start:'top bottom',end:'bottom top',scrub:true}});
  gsap.fromTo('.lead-img',{clipPath:'inset(100% 0 0 0)',scale:1.3},{clipPath:'inset(0% 0 0 0)',scale:1,duration:1.4,ease:'power4.out',scrollTrigger:{trigger:'.lead-img',start:'top 85%',toggleActions:'play none none reverse'}});
  $$('.pol').forEach((p,i)=>{
    gsap.fromTo(p,{y:120+i*40,opacity:0},{y:-80-i*30,opacity:1,ease:'none',scrollTrigger:{trigger:'.lead-wrap',start:'top 90%',end:'bottom 20%',scrub:true}});
    gsap.fromTo($('img',p),{scale:1.3},{scale:1,ease:'none',scrollTrigger:{trigger:p,start:'top bottom',end:'center center',scrub:true}});
  });
  gsap.from('.about-intro .cap',{y:30,opacity:0,stagger:0.2,duration:1.2,ease:'power3.out',scrollTrigger:{trigger:'.mono',start:'top 80%'}});

  /* showreel: pinned slider */
  const box=$('#reelBox'),track=$('#reelTrack'),thumbs=$$('#ring3 img'),n=thumbs.length;
  const rowX=i=>(i-(n-1)/2)*thumbs[0].offsetWidth*1.12;
  const R=()=>Math.min(box.offsetWidth*0.2,box.offsetHeight*0.4);
  const ang=i=>i/n*Math.PI*2-Math.PI/2;
  const hold={duration:0.9};
  const tl=gsap.timeline({defaults:{ease:'power2.inOut'},scrollTrigger:{trigger:'#reel',start:'top top',end:'+=560%',pin:'.reel-pin',scrub:0.7,invalidateOnRefresh:true}});
  tl.to(box,{'--arc':'0vh',duration:1})
    .to('.s1-word',{letterSpacing:'0.22em',duration:1.8},0)
    .to('.s1-stage img',{scale:1.08,duration:1.8},0)
    .to({},hold)
    .to(track,{yPercent:-25,duration:1.1})
    .fromTo('.s2 .cell',{clipPath:'inset(100% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.2,stagger:0.18,ease:'power3.out'},'<')
    .fromTo('.s2 img',{scale:1.3},{scale:1,duration:1.6,stagger:0.18,ease:'power2.out'},'<')
    .to({},hold)
    .to(track,{yPercent:-50,duration:1.1})
    .fromTo(thumbs,{x:rowX,y:()=>box.offsetHeight*0.06,rotation:0,scale:1},{x:i=>Math.cos(ang(i))*R(),y:i=>Math.sin(ang(i))*R()+box.offsetHeight*0.06,rotation:i=>(i%2?1:-1)*(5+i*3),scale:1.25,duration:1.2,stagger:0.04,ease:'power3.inOut'},'>')
    .to('.s3-txt',{scale:0.5,duration:1.2},'<')
    .to({},hold)
    .to(track,{yPercent:-75,duration:1.1})
    .fromTo('.diamond',{clipPath:'polygon(50% 42%,58% 50%,50% 58%,42% 50%)'},{clipPath:'polygon(50% 0%,100% 50%,50% 100%,0% 50%)',duration:1.2,ease:'power3.out'},'<0.3')
    .fromTo('.s4-l i',{yPercent:120,opacity:0},{yPercent:0,opacity:1,stagger:0.08,duration:0.6},'<')
    .to({},hold);

  gsap.from('.s1-word',{y:90,opacity:0,duration:1.4,ease:'power4.out',scrollTrigger:{trigger:'#reel',start:'top 75%',toggleActions:'play none none reverse'}});
  gsap.from('.s1-stage',{yPercent:25,opacity:0,duration:1.4,ease:'power4.out',delay:0.15,scrollTrigger:{trigger:'#reel',start:'top 75%',toggleActions:'play none none reverse'}});

  /* what i do / philosophy */
  gsap.from('.w-right > *,.w-pill,.whatido .cap,.stars',{y:40,opacity:0,stagger:0.1,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.w-right',start:'top 85%'}});
  gsap.from('.philo-l > *',{y:50,opacity:0,stagger:0.12,duration:1,ease:'power3.out',scrollTrigger:{trigger:'.philo-l',start:'top 70%'}});
  gsap.timeline({defaults:{ease:'none'},scrollTrigger:{trigger:'.philo',start:'top 75%',end:'center 45%',scrub:true}})
    .fromTo('.philo-art .draw',{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,stagger:0.05,duration:1})
    .fromTo('.philo-art .fl',{y:50,opacity:0},{y:0,opacity:1,stagger:0.12,duration:0.8},0.2);

  /* works: tilted 3D cards */
  $$('.proj').forEach(p=>{
    const f=$('.pframe',p),t=$('.ptitle',p),img=$('img',f);
    gsap.set(f,{transformPerspective:1500});
    gsap.timeline({scrollTrigger:{trigger:p,start:'top bottom',end:'bottom top',scrub:true}})
      .fromTo(f,{rotationX:62,scale:0.86,y:60},{rotationX:0,scale:1,y:0,ease:'none',duration:1})
      .to(f,{rotationX:-62,scale:0.86,y:-60,ease:'none',duration:1},'>0.1');
    gsap.fromTo(t,{y:80,opacity:0},{y:0,opacity:1,ease:'none',scrollTrigger:{trigger:p,start:'top 75%',end:'top 38%',scrub:true}});
    gsap.fromTo(img,{yPercent:-4},{yPercent:4,ease:'none',scrollTrigger:{trigger:p,start:'top bottom',end:'bottom top',scrub:true}});
    if(fine){
      const ry=gsap.quickTo(f,'rotationY',{duration:0.8,ease:'power3'}),ix=gsap.quickTo(img,'x',{duration:0.9,ease:'power3'}),tx=gsap.quickTo(t,'x',{duration:0.9,ease:'power3'});
      p.addEventListener('pointermove',e=>{const r=p.getBoundingClientRect(),nx=(e.clientX-r.left)/r.width-0.5;ry(nx*10);ix(nx*-24);tx(nx*18)});
      p.addEventListener('pointerleave',()=>{ry(0);ix(0);tx(0)});
    }
  });
  gsap.fromTo('.feat em',{y:60,opacity:0},{y:0,opacity:1,stagger:0.15,scrollTrigger:{trigger:'.feat',start:'top 88%',end:'top 55%',scrub:true}});
  gsap.fromTo('.ghost span',{yPercent:20},{yPercent:-20,ease:'none',stagger:0.05,scrollTrigger:{trigger:'.works',start:'top bottom',end:'bottom top',scrub:true}});

  /* services */
  $$('.svc-words p').forEach(p=>{
    const chs=splitChars($('span',p));
    gsap.from(chs,{yPercent:110,opacity:0,duration:1,ease:'power4.out',stagger:0.03,scrollTrigger:{trigger:p,start:'top 92%',toggleActions:'play none none reverse'}});
    gsap.fromTo($('.th',p),{y:40,scale:0.6,opacity:0},{y:-30,scale:1,opacity:1,ease:'none',scrollTrigger:{trigger:p,start:'top 90%',end:'bottom 30%',scrub:true}});
  });

  /* playbook: vertical scroll → horizontal strip */
  const tr=$('#pbTrack'),mark=$('#ruler i');
  gsap.to(tr,{x:()=>-(tr.scrollWidth-innerWidth),ease:'none',scrollTrigger:{trigger:'.pb-pin',start:'top top',end:()=>'+='+(tr.scrollWidth-innerWidth),pin:true,scrub:true,invalidateOnRefresh:true,onUpdate:s=>{mark.style.left=s.progress*100+'%'}}});
  gsap.from('.pb-head h2 em',{scale:0.8,opacity:0,duration:1.4,ease:'power3.out',scrollTrigger:{trigger:'.pb-head',start:'top 60%'}});
  gsap.from('.globe',{xPercent:i=>i?30:-30,opacity:0,duration:1.6,ease:'power3.out',scrollTrigger:{trigger:'.pb-head',start:'top 65%'}});

  /* retro */
  ScrollTrigger.create({trigger:'#retro',start:'top bottom',end:'bottom top',onToggle:s=>pc?.setActive(s.isActive)});
  ScrollTrigger.create({trigger:'#retro',start:'top top',end:'bottom bottom',scrub:true,onUpdate:s=>pc?.setProgress(s.progress)});
  gsap.fromTo('.warp',{yPercent:-10,skewX:-6},{yPercent:10,skewX:6,ease:'none',scrollTrigger:{trigger:'#retro',start:'top bottom',end:'bottom top',scrub:true}});

  /* scroll velocity → skew headlines, speed up marquees */
  if(lenis){
    const skews=['.mani','.big','.svc-words','.feat'].map(s=>gsap.quickTo(s,'skewY',{duration:0.7,ease:'power3'}));
    const anims=()=>[...$$('.mq-in'),...$$('.mini-marq div'),...$$('.ghost-marq div')].flatMap(e=>e.getAnimations());
    lenis.on('scroll',({velocity})=>{
      const k=gsap.utils.clamp(-5,5,velocity*0.14);skews.forEach(s=>s(k));
      const rate=1+Math.min(Math.abs(velocity)*0.35,7);anims().forEach(a=>{a.playbackRate=rate});
    });
  }
}

/* ───────── loader → hero intro ───────── */
const loader=$('#loader'),num=$('#ldNum');
let started=false;
function start(){
  if(started)return;started=true;
  setupScroll();
  if(reduce){loader.remove();return}
  const tl=gsap.timeline({defaults:{ease:'power4.out'}});
  tl.to('.ld-name,.ld-bot',{opacity:0,y:-30,duration:0.5,ease:'power2.in'})
    .to(loader,{clipPath:'inset(0 0 100% 0)',duration:1.1,ease:'power4.inOut',onComplete:()=>loader.remove()},'>-0.1')
    .from('.hero .card',{clipPath:'inset(46% 46% 46% 46%)',duration:1.5,ease:'expo.out'},'<0.35')
    .from('.ell-wrap',{scale:0.35,rotate:-28,opacity:0,duration:1.8,ease:'expo.out'},'<0.15')
    .from('.info > *',{opacity:0,y:20,stagger:0.12,duration:1},'<0.6')
    .from('.hero-dot,.hero-line,.scroll-hint,.menu-btn,.mini-marq',{opacity:0,y:16,stagger:0.08,duration:0.9},'<0.2')
    .add(()=>{flowers?.intro();lenis?.start()},'<0.1');
}
if(reduce){start()}else{
  document.documentElement.classList.add('is-loading');
  const cnt={v:0};
  const paint=()=>{num.textContent=String(Math.round(cnt.v)).padStart(3,'0')};
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
