const bars = [
  [48,[60,64,67,71],[76,79,74]],
  [45,[60,64,67,71],[72,76,79]],
  [41,[60,64,65,69],[77,76,72]],
  [43,[59,62,65,69],[74,71,69]],
  [48,[60,64,67,71],[76,79,83]],
  [40,[59,62,64,67],[79,76,74]],
  [41,[60,64,65,69],[72,77,76]],
  [43,[59,62,65,69],[74,72,71]],
];

function makeLoop(context){
  const rate=22050, beat=.75, bar=beat*4;
  const buffer=context.createBuffer(1,rate*bar*bars.length,rate);
  const samples=buffer.getChannelData(0);
  function note(pitch,start,duration,volume){
    const frequency=440*2**((pitch-69)/12);
    const offset=Math.round(start*rate);
    for(let i=0;i<duration*rate;i++){
      const t=i/rate, phase=2*Math.PI*frequency*t;
      const envelope=Math.min(1,t/.025)*Math.exp(-2.5*t/duration)*Math.min(1,(duration-t)/.19);
      samples[(offset+i)%samples.length]+=volume*envelope*(Math.sin(phase)+.23*Math.sin(2*phase));
    }
  }
  bars.forEach(([bass,chord,melody],i)=>{
    const start=i*bar;
    note(bass,start,2.4,.11);
    chord.forEach((pitch,index)=>note(pitch,start+index*beat*.5,1.8,.065));
    melody.forEach((pitch,index)=>note(pitch,start+[.5,1.75,3][index]*beat,1.15,.075));
  });
  return buffer;
}

export function initBackgroundMusic(buttons){
  const AudioContext=window.AudioContext||window.webkitAudioContext;
  if(!AudioContext){buttons.forEach(button=>button.hidden=true);return}
  let context, source, pending=false, playing=false;
  async function toggle(){
    if(pending)return;
    pending=true;
    try{
      context??=new AudioContext();
      if(playing){
        await context.suspend();
      }else{
        await context.resume();
        if(!source){
          source=context.createBufferSource();
          source.buffer=makeLoop(context);
          source.loop=true;
          const gain=context.createGain();
          gain.gain.value=.21;
          source.connect(gain).connect(context.destination);
          source.start();
        }
      }
      playing=!playing;
      buttons.forEach(button=>button.setAttribute('aria-pressed',String(playing)));
    }catch(error){
      console.debug('Background music unavailable',error);
    }finally{
      pending=false;
    }
  }
  buttons.forEach(button=>button.addEventListener('click',toggle));
}
