(()=>{var Sc=Object.defineProperty;var bc=(i,e,t)=>e in i?Sc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var dt=(i,e,t)=>bc(i,typeof e!="symbol"?e+"":e,t);var Ec=0,Ya=1,wc=2;var Ml=1,Ac=2,on=3,An=0,xt=1,Wt=2;var bn=0,pi=1,$a=2,Ja=3,Za=4,Tc=5,Bn=100,Rc=101,Cc=102,Ka=103,Qa=104,Pc=200,Lc=201,Ic=202,Dc=203,Vr=204,Gr=205,Uc=206,Nc=207,Fc=208,Oc=209,Bc=210,zc=211,Hc=212,kc=213,Vc=214,Gc=0,Wc=1,Xc=2,As=3,qc=4,Yc=5,$c=6,Jc=7,Sl=0,Zc=1,Kc=2,En=0,Qc=1,jc=2,eh=3,wa=4,th=5,nh=6;var bl=300,_i=301,xi=302,Wr=303,Xr=304,Zs=306,qr=1e3,Xt=1001,Yr=1002,St=1003,ja=1004;var cr=1005;var Ft=1006,ih=1007;var Bi=1008;var wn=1009,sh=1010,rh=1011,Aa=1012,El=1013,Mn=1014,Sn=1015,zi=1016,wl=1017,Al=1018,Hn=1020,ah=1021,qt=1023,oh=1024,lh=1025,kn=1026,vi=1027,ch=1028,Tl=1029,hh=1030,Rl=1031,Cl=1033,hr=33776,ur=33777,dr=33778,fr=33779,eo=35840,to=35841,no=35842,io=35843,Pl=36196,so=37492,ro=37496,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,_o=37818,xo=37819,vo=37820,yo=37821,pr=36492,Mo=36494,So=36495,uh=36283,bo=36284,Eo=36285,wo=36286;var Ts=2300,Rs=2301,mr=2302,Ao=2400,To=2401,Ro=2402;var Ll=3e3,Vn=3001,dh=3200,fh=3201,Ta=0,ph=1,Ot="",nt="srgb",hn="srgb-linear",Ra="display-p3",Ks="display-p3-linear",Cs="linear",Qe="srgb",Ps="rec709",Ls="p3";var Jn=7680;var Co=519,mh=512,gh=513,_h=514,Il=515,xh=516,vh=517,yh=518,Mh=519,Po=35044;var Lo="300 es",$r=1035,cn=2e3,Is=2001,Tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gr=Math.PI/180,Jr=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Sh(i,e){return(i%e+e)%e}function _r(i,e,t){return(1-t)*i+t*e}function Io(i){return(i&i-1)===0&&i!==0}function Zr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],u=s[6],b=s[1],v=s[4],w=s[7],L=s[2],A=s[5],T=s[8];return r[0]=o*_+a*b+l*L,r[3]=o*p+a*v+l*A,r[6]=o*u+a*w+l*T,r[1]=c*_+h*b+d*L,r[4]=c*p+h*v+d*A,r[7]=c*u+h*w+d*T,r[2]=f*_+m*b+g*L,r[5]=f*p+m*v+g*A,r[8]=f*u+m*w+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xr.makeScale(e,t)),this}rotate(e){return this.premultiply(xr.makeRotation(-e)),this}translate(e,t){return this.premultiply(xr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xr=new ze;function Dl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bh(){let i=Hi("canvas");return i.style.display="block",i}var Do={};function Fi(i){i in Do||(Do[i]=!0,console.warn(i))}var Uo=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),No=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[hn]:{transfer:Cs,primaries:Ps,toReference:i=>i,fromReference:i=>i},[nt]:{transfer:Qe,primaries:Ps,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ks]:{transfer:Cs,primaries:Ls,toReference:i=>i.applyMatrix3(No),fromReference:i=>i.applyMatrix3(Uo)},[Ra]:{transfer:Qe,primaries:Ls,toReference:i=>i.convertSRGBToLinear().applyMatrix3(No),fromReference:i=>i.applyMatrix3(Uo).convertLinearToSRGB()}},Eh=new Set([hn,Ks]),$e={enabled:!0,_workingColorSpace:hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Eh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=is[e].toReference,s=is[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return is[i].primaries},getTransfer:function(i){return i===Ot?Cs:is[i].transfer}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zn,Ds=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Hi("canvas")),Zn.width=e.width,Zn.height=e.height;let n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Hi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wh=0,Us=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=$i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yr(s[o].image)):r.push(yr(s[o]))}else r=yr(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function yr(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ds.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ah=0,It=class i extends Tn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Xt,s=Xt,r=Ft,o=Bi,a=qt,l=wn,c=i.DEFAULT_ANISOTROPY,h=Ot){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=$i(),this.name="",this.source=new Us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vn?nt:Ot),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qr:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qr:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nt?Vn:Ll}set encoding(e){Fi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vn?nt:Ot}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=bl;It.DEFAULT_ANISOTROPY=1;var et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,w=(m+1)/2,L=(u+1)/2,A=(h+f)/4,T=(d+_)/4,X=(g+p)/4;return v>w&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=T/n):w>L?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=A/s,r=X/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=X/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kr=class extends Tn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Fi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?nt:Ot),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new It(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Us(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends Kr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ns=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qr=class extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-a,u=l*f+c*m+h*g+d*_,b=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let L=Math.sqrt(v),A=Math.atan2(L,u*b);p=Math.sin(p*A)/L,a=Math.sin(a*A)/L}let w=a*b;if(l=l*p+f*w,c=c*p+m*w,h=h*p+g*w,d=d*p+_*w,p===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-a*m,e[t+2]=c*g+h*m+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mr.copy(this).projectOnVector(e),this.sub(Mr)}reflect(e){return this.sub(Mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mr=new D,Fo=new Rn,Gn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kt):kt.fromBufferAttribute(r,o),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),rs.subVectors(this.max,Li),Kn.subVectors(e.a,Li),Qn.subVectors(e.b,Li),jn.subVectors(e.c,Li),gn.subVectors(Qn,Kn),_n.subVectors(jn,Qn),Dn.subVectors(Kn,jn);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Dn.z,Dn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Dn.z,0,-Dn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Dn.y,Dn.x,0];return!Sr(t,Kn,Qn,jn,rs)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,Kn,Qn,jn,rs))?!1:(as.crossVectors(gn,_n),t=[as.x,as.y,as.z],Sr(t,Kn,Qn,jn,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},tn=[new D,new D,new D,new D,new D,new D,new D,new D],kt=new D,ss=new Gn,Kn=new D,Qn=new D,jn=new D,gn=new D,_n=new D,Dn=new D,Li=new D,rs=new D,as=new D,Un=new D;function Sr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Un.fromArray(i,r);let a=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Th=new Gn,Ii=new D,br=new D,ki=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);let t=Ii.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ii,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(br)),this.expandByPoint(Ii.copy(e.center).sub(br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},nn=new D,Er=new D,os=new D,xn=new D,wr=new D,ls=new D,Ar=new D,Fs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Er.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Er);let r=e.distanceTo(t)*.5,o=-this.direction.dot(os),a=xn.dot(this.direction),l=-xn.dot(os),c=xn.lengthSq(),h=Math.abs(1-o*o),d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Er).addScaledVector(os,f),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);let n=nn.dot(this.direction),s=nn.dot(nn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,s,r){wr.subVectors(t,e),ls.subVectors(n,e),Ar.crossVectors(wr,ls);let o=this.direction.dot(Ar),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);let l=a*this.direction.dot(ls.crossVectors(xn,ls));if(l<0)return null;let c=a*this.direction.dot(wr.cross(xn));if(c<0||l+c>o)return null;let h=-a*xn.dot(Ar);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,h,d,f,m,g,_,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ei.setFromMatrixColumn(e,0).length(),r=1/ei.setFromMatrixColumn(e,1).length(),o=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rh,e,Ch)}lookAt(e,t,n){let s=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),vn.crossVectors(n,Pt),vn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),vn.crossVectors(n,Pt)),vn.normalize(),cs.crossVectors(Pt,vn),s[0]=vn.x,s[4]=cs.x,s[8]=Pt.x,s[1]=vn.y,s[5]=cs.y,s[9]=Pt.y,s[2]=vn.z,s[6]=cs.z,s[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],b=n[3],v=n[7],w=n[11],L=n[15],A=s[0],T=s[4],X=s[8],M=s[12],E=s[1],B=s[5],Y=s[9],ee=s[13],C=s[2],P=s[6],U=s[10],V=s[14],W=s[3],G=s[7],q=s[11],$=s[15];return r[0]=o*A+a*E+l*C+c*W,r[4]=o*T+a*B+l*P+c*G,r[8]=o*X+a*Y+l*U+c*q,r[12]=o*M+a*ee+l*V+c*$,r[1]=h*A+d*E+f*C+m*W,r[5]=h*T+d*B+f*P+m*G,r[9]=h*X+d*Y+f*U+m*q,r[13]=h*M+d*ee+f*V+m*$,r[2]=g*A+_*E+p*C+u*W,r[6]=g*T+_*B+p*P+u*G,r[10]=g*X+_*Y+p*U+u*q,r[14]=g*M+_*ee+p*V+u*$,r[3]=b*A+v*E+w*C+L*W,r[7]=b*T+v*B+w*P+L*G,r[11]=b*X+v*Y+w*U+L*q,r[15]=b*M+v*ee+w*V+L*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],b=d*p*c-_*f*c+_*l*m-a*p*m-d*l*u+a*f*u,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,w=h*_*c-g*d*c+g*a*m-o*_*m-h*a*u+o*d*u,L=g*d*l-h*_*l-g*a*f+o*_*f+h*a*p-o*d*p,A=t*b+n*v+s*w+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=b*T,e[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*u-n*f*u)*T,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*u+n*l*u)*T,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*T,e[4]=v*T,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*u+t*f*u)*T,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*u-t*l*u)*T,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*T,e[8]=w*T,e[9]=(g*d*r-h*_*r-g*n*m+t*_*m+h*n*u-t*d*u)*T,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*u+t*a*u)*T,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*m-t*a*m)*T,e[12]=L*T,e[13]=(h*_*s-g*d*s+g*n*f-t*_*f-h*n*p+t*d*p)*T,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*T,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,_=o*h,p=o*d,u=a*d,b=l*c,v=l*h,w=l*d,L=n.x,A=n.y,T=n.z;return s[0]=(1-(_+u))*L,s[1]=(m+w)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(m-w)*A,s[5]=(1-(f+u))*A,s[6]=(p+b)*A,s[7]=0,s[8]=(g+v)*T,s[9]=(p-b)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ei.set(s[0],s[1],s[2]).length(),o=ei.set(s[4],s[5],s[6]).length(),a=ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vt.copy(this);let c=1/r,h=1/o,d=1/a;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=d,Vt.elements[9]*=d,Vt.elements[10]*=d,t.setFromRotationMatrix(Vt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=cn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,g;if(a===cn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Is)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=cn){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),f=(t+e)*c,m=(n+s)*h,g,_;if(a===cn)g=(o+r)*d,_=-2*d;else if(a===Is)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ei=new D,Vt=new ot,Rh=new D(0,0,0),Ch=new D(1,1,1),vn=new D,cs=new D,Pt=new D,Oo=new ot,Bo=new Rn,Os=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Os.DEFAULT_ORDER="XYZ";var Vi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ph=0,zo=new D,ti=new Rn,sn=new ot,hs=new D,Di=new D,Lh=new D,Ih=new Rn,Ho=new D(1,0,0),ko=new D(0,1,0),Vo=new D(0,0,1),Dh={type:"added"},Uh={type:"removed"},At=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Os,n=new Rn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(Ho,e)}rotateY(e){return this.rotateOnAxis(ko,e)}rotateZ(e){return this.rotateOnAxis(Vo,e)}translateOnAxis(e,t){return zo.copy(e).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ho,e)}translateY(e){return this.translateOnAxis(ko,e)}translateZ(e){return this.translateOnAxis(Vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Di,hs,this.up):sn.lookAt(hs,Di,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),ti.setFromRotationMatrix(sn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Lh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Ih,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};At.DEFAULT_UP=new D(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=new D,rn=new D,Tr=new D,an=new D,ni=new D,ii=new D,Go=new D,Rr=new D,Cr=new D,Pr=new D,us=!1,ui=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gt.subVectors(e,t),s.cross(Gt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gt.subVectors(s,t),rn.subVectors(n,t),Tr.subVectors(e,t);let o=Gt.dot(Gt),a=Gt.dot(rn),l=Gt.dot(Tr),c=rn.dot(rn),h=rn.dot(Tr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,s,r,o,a,l){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l)}static isFrontFacing(e,t,n,s){return Gt.subVectors(n,t),rn.subVectors(e,t),Gt.cross(rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Gt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ni.subVectors(s,n),ii.subVectors(r,n),Rr.subVectors(e,n);let l=ni.dot(Rr),c=ii.dot(Rr);if(l<=0&&c<=0)return t.copy(n);Cr.subVectors(e,s);let h=ni.dot(Cr),d=ii.dot(Cr);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ni,o);Pr.subVectors(e,r);let m=ni.dot(Pr),g=ii.dot(Pr);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ii,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Go.subVectors(r,s),a=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector(Go,a);let u=1/(p+_+f);return o=_*u,a=f*u,t.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Lr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Sh(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lr(o,r,e+1/3),this.g=Lr(o,r,e),this.b=Lr(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=Ul[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return $e.fromWorkingColorSpace(_t.copy(this),e),Math.round(wt(_t.r*255,0,255))*65536+Math.round(wt(_t.g*255,0,255))*256+Math.round(wt(_t.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(_t.copy(this),t);let n=_t.r,s=_t.g,r=_t.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=nt){$e.fromWorkingColorSpace(_t.copy(this),e);let t=_t.r,n=_t.g,s=_t.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(ds);let n=_r(yn.h,ds.h,t),s=_r(yn.s,ds.s,t),r=_r(yn.l,ds.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_t=new He;He.NAMES=Ul;var Nh=0,Cn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=pi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Gr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Co,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Gr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Co&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pn=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var at=new D,fs=new Le,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),e}};var Bs=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zs=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var bt=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Fh=0,Nt=new ot,Ir=new At,si=new D,Lt=new Gn,Ui=new Gn,ft=new D,Yt=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dl(e)?zs:Bs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ui.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Lt.min,Ui.min),Lt.expandByPoint(ft),ft.addVectors(Lt.max,Ui.max),Lt.expandByPoint(ft)):(Lt.expandByPoint(Ui.min),Lt.expandByPoint(Ui.max))}Lt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ft.fromBufferAttribute(a,c),l&&(si.fromBufferAttribute(e,c),ft.add(si)),s=Math.max(s,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new D,h[E]=new D;let d=new D,f=new D,m=new D,g=new Le,_=new Le,p=new Le,u=new D,b=new D;function v(E,B,Y){d.fromArray(s,E*3),f.fromArray(s,B*3),m.fromArray(s,Y*3),g.fromArray(o,E*2),_.fromArray(o,B*2),p.fromArray(o,Y*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);let ee=1/(_.x*p.y-p.x*_.y);isFinite(ee)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ee),b.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(ee),c[E].add(u),c[B].add(u),c[Y].add(u),h[E].add(b),h[B].add(b),h[Y].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,B=w.length;E<B;++E){let Y=w[E],ee=Y.start,C=Y.count;for(let P=ee,U=ee+C;P<U;P+=3)v(n[P+0],n[P+1],n[P+2])}let L=new D,A=new D,T=new D,X=new D;function M(E){T.fromArray(r,E*3),X.copy(T);let B=c[E];L.copy(B),L.sub(T.multiplyScalar(T.dot(B))).normalize(),A.crossVectors(X,B);let ee=A.dot(h[E])<0?-1:1;l[E*4]=L.x,l[E*4+1]=L.y,l[E*4+2]=L.z,l[E*4+3]=ee}for(let E=0,B=w.length;E<B;++E){let Y=w[E],ee=Y.start,C=Y.count;for(let P=ee,U=ee+C;P<U;P+=3)M(n[P+0]),M(n[P+1]),M(n[P+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new zt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wo=new ot,Nn=new Fs,ps=new ki,Xo=new D,ri=new D,ai=new D,oi=new D,Dr=new D,ms=new D,gs=new Le,_s=new Le,xs=new Le,qo=new D,Yo=new D,$o=new D,vs=new D,ys=new D,Ge=class extends At{constructor(e=new Yt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Dr.fromBufferAttribute(d,e),o?ms.addScaledVector(Dr,h):ms.addScaledVector(Dr.sub(t),h))}t.add(ms)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),Nn.copy(e.ray).recast(e.near),!(ps.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(ps,Xo)===null||Nn.origin.distanceToSquared(Xo)>(e.far-e.near)**2))&&(Wo.copy(r).invert(),Nn.copy(e.ray).applyMatrix4(Wo),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,L=v;w<L;w+=3){let A=a.getX(w),T=a.getX(w+1),X=a.getX(w+2);s=Ms(this,u,e,n,c,h,d,A,T,X),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let b=a.getX(p),v=a.getX(p+1),w=a.getX(p+2);s=Ms(this,o,e,n,c,h,d,b,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=b,L=v;w<L;w+=3){let A=w,T=w+1,X=w+2;s=Ms(this,u,e,n,c,h,d,A,T,X),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let b=p,v=p+1,w=p+2;s=Ms(this,o,e,n,c,h,d,b,v,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Oh(i,e,t,n,s,r,o,a){let l;if(e.side===xt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===An,a),l===null)return null;ys.copy(a),ys.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:i}}function Ms(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ri),i.getVertexPosition(l,ai),i.getVertexPosition(c,oi);let h=Oh(i,e,t,n,ri,ai,oi,vs);if(h){s&&(gs.fromBufferAttribute(s,a),_s.fromBufferAttribute(s,l),xs.fromBufferAttribute(s,c),h.uv=ui.getInterpolation(vs,ri,ai,oi,gs,_s,xs,new Le)),r&&(gs.fromBufferAttribute(r,a),_s.fromBufferAttribute(r,l),xs.fromBufferAttribute(r,c),h.uv1=ui.getInterpolation(vs,ri,ai,oi,gs,_s,xs,new Le),h.uv2=h.uv1),o&&(qo.fromBufferAttribute(o,a),Yo.fromBufferAttribute(o,l),$o.fromBufferAttribute(o,c),h.normal=ui.getInterpolation(vs,ri,ai,oi,qo,Yo,$o,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};ui.getNormal(ri,ai,oi,d.normal),h.face=d}return h}var Dt=class i extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function g(_,p,u,b,v,w,L,A,T,X,M){let E=w/T,B=L/X,Y=w/2,ee=L/2,C=A/2,P=T+1,U=X+1,V=0,W=0,G=new D;for(let q=0;q<U;q++){let $=q*B-ee;for(let se=0;se<P;se++){let k=se*E-Y;G[_]=k*b,G[p]=$*v,G[u]=C,c.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[u]=A>0?1:-1,h.push(G.x,G.y,G.z),d.push(se/T),d.push(1-q/X),V+=1}}for(let q=0;q<X;q++)for(let $=0;$<T;$++){let se=f+$+P*q,k=f+$+P*(q+1),J=f+($+1)+P*(q+1),le=f+($+1)+P*q;l.push(se,k,le),l.push(k,J,le),W+=6}a.addGroup(m,W,M),m+=W,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function yi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Mt(i){let e={};for(let t=0;t<i.length;t++){let n=yi(i[t]);for(let s in n)e[s]=n[s]}return e}function Bh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nl(i){return i.getRenderTarget()===null?i.outputColorSpace:$e.workingColorSpace}var zh={clone:yi,merge:Mt},Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=Bh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Mi=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pt=class extends Mi{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},li=-90,ci=1,jr=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pt(li,ci,e,t);s.layers=this.layers,this.add(s);let r=new pt(li,ci,e,t);r.layers=this.layers,this.add(r);let o=new pt(li,ci,e,t);o.layers=this.layers,this.add(o);let a=new pt(li,ci,e,t);a.layers=this.layers,this.add(a);let l=new pt(li,ci,e,t);l.layers=this.layers,this.add(l);let c=new pt(li,ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Hs=class extends It{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ea=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Fi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vn?nt:Ot),this.texture=new Hs(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Dt(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:bn});r.uniforms.tEquirect.value=t;let o=new Ge(s,r),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Ft),new jr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ur=new D,Vh=new D,Gh=new ze,ln=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ur.subVectors(n,t).cross(Vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ur),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gh.getNormalMatrix(e),s=this.coplanarPoint(Ur).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fn=new ki,Ss=new D,Gi=class{constructor(e=new ln,t=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],u=s[12],b=s[13],v=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,p-m,w-u).normalize(),n[1].setComponents(l+r,f+c,p+m,w+u).normalize(),n[2].setComponents(l+o,f+h,p+g,w+b).normalize(),n[3].setComponents(l-o,f-h,p-g,w-b).normalize(),n[4].setComponents(l-a,f-d,p-_,w-v).normalize(),t===cn)n[5].setComponents(l+a,f+d,p+_,w+v).normalize();else if(t===Is)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ss.x=s.normal.x>0?e.max.x:e.min.x,Ss.y=s.normal.y>0?e.max.y:e.min.y,Ss.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wh(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let u=g[_];t?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Wn=class i extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){let b=u*f-o;for(let v=0;v<c;v++){let w=v*d-r;g.push(w,-b,0),_.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){let v=b+c*u,w=b+c*(u+1),L=b+1+c*(u+1),A=b+1+c*u;m.push(v,w,A),m.push(w,L,A)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,su=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ru=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Su=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Du=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ou=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ad=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Od=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,af=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ff=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Yh,alphamap_pars_fragment:$h,alphatest_fragment:Jh,alphatest_pars_fragment:Zh,aomap_fragment:Kh,aomap_pars_fragment:Qh,batching_pars_vertex:jh,batching_vertex:eu,begin_vertex:tu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:su,bumpmap_pars_fragment:ru,clipping_planes_fragment:au,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:hu,color_pars_fragment:uu,color_pars_vertex:du,color_vertex:fu,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:_u,displacementmap_vertex:xu,emissivemap_fragment:vu,emissivemap_pars_fragment:yu,colorspace_fragment:Mu,colorspace_pars_fragment:Su,envmap_fragment:bu,envmap_common_pars_fragment:Eu,envmap_pars_fragment:wu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Bu,envmap_vertex:Tu,fog_vertex:Ru,fog_pars_vertex:Cu,fog_fragment:Pu,fog_pars_fragment:Lu,gradientmap_pars_fragment:Iu,lightmap_fragment:Du,lightmap_pars_fragment:Uu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Ou,lights_toon_fragment:zu,lights_toon_pars_fragment:Hu,lights_phong_fragment:ku,lights_phong_pars_fragment:Vu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Wu,lights_fragment_begin:Xu,lights_fragment_maps:qu,lights_fragment_end:Yu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Ju,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:Ku,map_fragment:Qu,map_pars_fragment:ju,map_particle_fragment:ed,map_particle_pars_fragment:td,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphcolor_vertex:sd,morphnormal_vertex:rd,morphtarget_pars_vertex:ad,morphtarget_vertex:od,normal_fragment_begin:ld,normal_fragment_maps:cd,normal_pars_fragment:hd,normal_pars_vertex:ud,normal_vertex:dd,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:pd,clearcoat_normal_fragment_maps:md,clearcoat_pars_fragment:gd,iridescence_pars_fragment:_d,opaque_fragment:xd,packing:vd,premultiplied_alpha_fragment:yd,project_vertex:Md,dithering_fragment:Sd,dithering_pars_fragment:bd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:wd,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Td,shadowmap_vertex:Rd,shadowmask_pars_fragment:Cd,skinbase_vertex:Pd,skinning_pars_vertex:Ld,skinning_vertex:Id,skinnormal_vertex:Dd,specularmap_fragment:Ud,specularmap_pars_fragment:Nd,tonemapping_fragment:Fd,tonemapping_pars_fragment:Od,transmission_fragment:Bd,transmission_pars_fragment:zd,uv_pars_fragment:Hd,uv_pars_vertex:kd,uv_vertex:Vd,worldpos_vertex:Gd,background_vert:Wd,background_frag:Xd,backgroundCube_vert:qd,backgroundCube_frag:Yd,cube_vert:$d,cube_frag:Jd,depth_vert:Zd,depth_frag:Kd,distanceRGBA_vert:Qd,distanceRGBA_frag:jd,equirect_vert:ef,equirect_frag:tf,linedashed_vert:nf,linedashed_frag:sf,meshbasic_vert:rf,meshbasic_frag:af,meshlambert_vert:of,meshlambert_frag:lf,meshmatcap_vert:cf,meshmatcap_frag:hf,meshnormal_vert:uf,meshnormal_frag:df,meshphong_vert:ff,meshphong_frag:pf,meshphysical_vert:mf,meshphysical_frag:gf,meshtoon_vert:_f,meshtoon_frag:xf,points_vert:vf,points_frag:yf,shadow_vert:Mf,shadow_frag:Sf,sprite_vert:bf,sprite_frag:Ef},ie={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Kt={basic:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Mt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Mt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Mt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Mt([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Mt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Mt([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Mt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Mt([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Mt([ie.common,ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Mt([ie.lights,ie.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Kt.physical={uniforms:Mt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var bs={r:0,b:0,g:0};function wf(i,e,t,n,s,r,o){let a=new He(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let b=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zs)?(h===void 0&&(h=new Ge(new Dt(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:yi(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=$e.getTransfer(v.colorSpace)!==Qe,(d!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ge(new Wn(2,2),new $t({name:"BackgroundMaterial",uniforms:yi(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=$e.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(bs,Nl(i)),n.buffers.color.setClear(bs.r,bs.g,bs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Af(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(C,P,U,V,W){let G=!1;if(o){let q=_(V,U,P);c!==q&&(c=q,m(c.object)),G=u(C,V,U,W),G&&b(C,V,U,W)}else{let q=P.wireframe===!0;(c.geometry!==V.id||c.program!==U.id||c.wireframe!==q)&&(c.geometry=V.id,c.program=U.id,c.wireframe=q,G=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,X(C,P,U,V),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function _(C,P,U){let V=U.wireframe===!0,W=a[C.id];W===void 0&&(W={},a[C.id]=W);let G=W[P.id];G===void 0&&(G={},W[P.id]=G);let q=G[V];return q===void 0&&(q=p(f()),G[V]=q),q}function p(C){let P=[],U=[],V=[];for(let W=0;W<s;W++)P[W]=0,U[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:V,object:C,attributes:{},index:null}}function u(C,P,U,V){let W=c.attributes,G=P.attributes,q=0,$=U.getAttributes();for(let se in $)if($[se].location>=0){let J=W[se],le=G[se];if(le===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;q++}return c.attributesNum!==q||c.index!==V}function b(C,P,U,V){let W={},G=P.attributes,q=0,$=U.getAttributes();for(let se in $)if($[se].location>=0){let J=G[se];J===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));let le={};le.attribute=J,J&&J.data&&(le.data=J.data),W[se]=le,q++}c.attributes=W,c.attributesNum=q,c.index=V}function v(){let C=c.newAttributes;for(let P=0,U=C.length;P<U;P++)C[P]=0}function w(C){L(C,0)}function L(C,P){let U=c.newAttributes,V=c.enabledAttributes,W=c.attributeDivisors;U[C]=1,V[C]===0&&(i.enableVertexAttribArray(C),V[C]=1),W[C]!==P&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,P),W[C]=P)}function A(){let C=c.newAttributes,P=c.enabledAttributes;for(let U=0,V=P.length;U<V;U++)P[U]!==C[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function T(C,P,U,V,W,G,q){q===!0?i.vertexAttribIPointer(C,P,U,W,G):i.vertexAttribPointer(C,P,U,V,W,G)}function X(C,P,U,V){if(n.isWebGL2===!1&&(C.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let W=V.attributes,G=U.getAttributes(),q=P.defaultAttributeValues;for(let $ in G){let se=G[$];if(se.location>=0){let k=W[$];if(k===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){let J=k.normalized,le=k.itemSize,pe=t.get(k);if(pe===void 0)continue;let me=pe.buffer,Te=pe.type,Re=pe.bytesPerElement,ye=n.isWebGL2===!0&&(Te===i.INT||Te===i.UNSIGNED_INT||k.gpuType===El);if(k.isInterleavedBufferAttribute){let Ve=k.data,N=Ve.stride,re=k.offset;if(Ve.isInstancedInterleavedBuffer){for(let te=0;te<se.locationSize;te++)L(se.location+te,Ve.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let te=0;te<se.locationSize;te++)w(se.location+te);i.bindBuffer(i.ARRAY_BUFFER,me);for(let te=0;te<se.locationSize;te++)T(se.location+te,le/se.locationSize,Te,J,N*Re,(re+le/se.locationSize*te)*Re,ye)}else{if(k.isInstancedBufferAttribute){for(let Ve=0;Ve<se.locationSize;Ve++)L(se.location+Ve,k.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Ve=0;Ve<se.locationSize;Ve++)w(se.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Ve=0;Ve<se.locationSize;Ve++)T(se.location+Ve,le/se.locationSize,Te,J,le*Re,le/se.locationSize*Ve*Re,ye)}}else if(q!==void 0){let J=q[$];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(se.location,J);break;case 3:i.vertexAttrib3fv(se.location,J);break;case 4:i.vertexAttrib4fv(se.location,J);break;default:i.vertexAttrib1fv(se.location,J)}}}}A()}function M(){Y();for(let C in a){let P=a[C];for(let U in P){let V=P[U];for(let W in V)g(V[W].object),delete V[W];delete P[U]}delete a[C]}}function E(C){if(a[C.id]===void 0)return;let P=a[C.id];for(let U in P){let V=P[U];for(let W in V)g(V[W].object),delete V[W];delete P[U]}delete a[C.id]}function B(C){for(let P in a){let U=a[P];if(U[C.id]===void 0)continue;let V=U[C.id];for(let W in V)g(V[W].object),delete V[W];delete U[C.id]}}function Y(){ee(),h=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:ee,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:w,disableUnusedAttributes:A}}function Tf(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Rf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=o||e.has("OES_texture_float"),L=v&&w,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:A}}function Cf(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ln,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,v=b*4,w=u.clippingState||null;l.value=w,w=h(g,f,v,m);for(let L=0;L!==v;++L)w[L]=t[L];u.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let u=m+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,w=m;v!==_;++v,w+=4)o.copy(d[v]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Pf(i){let e=new WeakMap;function t(o,a){return a===Wr?o.mapping=_i:a===Xr&&(o.mapping=xi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wr||a===Xr)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ea(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ks=class extends Mi{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},di=4,Jo=[.125,.215,.35,.446,.526,.582],zn=20,Nr=new ks,Zo=new He,Fr=null,Or=0,Br=0,On=(1+Math.sqrt(5))/2,hi=1/On,Ko=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,On,hi),new D(0,On,-hi),new D(hi,0,On),new D(-hi,0,On),new D(On,hi,0),new D(-On,hi,0)],Si=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Or,Br),e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:zi,format:qt,colorSpace:hn,depthBuffer:!1},s=Qo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lf(r)),this._blurMaterial=If(r,e,t)}return s}_compileMaterial(e){let t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,s){let a=new pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Zo),h.toneMapping=En,h.autoClear=!1;let m=new Pn({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),g=new Ge(new Dt,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Zo),_=!0);for(let u=0;u<6;u++){let b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;Es(s,b*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===_i||e.mapping===xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ko[(s-1)%Ko.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ge(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):zn;p>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);let u=[],b=0;for(let T=0;T<zn;++T){let X=T/_,M=Math.exp(-X*X/2);u.push(M),T===0?b+=M:T<p&&(b+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let w=this._sizeLods[s],L=3*w*(s>v-di?s-v+di:0),A=4*(this._cubeSize-w);Es(t,L,A,3*w,2*w),l.setRenderTarget(t),l.render(d,Nr)}};function Lf(i){let e=[],t=[],n=[],s=i,r=i-di+1+Jo.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-di?l=Jo[o-i+di-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,b=new Float32Array(_*g*m),v=new Float32Array(p*g*m),w=new Float32Array(u*g*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,X=A>2?0:-1,M=[T,X,0,T+2/3,X,0,T+2/3,X+1,0,T,X,0,T+2/3,X+1,0,T,X+1,0];b.set(M,_*g*A),v.set(f,p*g*A);let E=[A,A,A,A,A,A];w.set(E,u*g*A)}let L=new Yt;L.setAttribute("position",new zt(b,_)),L.setAttribute("uv",new zt(v,p)),L.setAttribute("faceIndex",new zt(w,u)),e.push(L),s>di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qo(i,e,t){let n=new un(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function If(i,e,t){let n=new Float32Array(zn),s=new D(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function jo(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function el(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Df(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wr||l===Xr,h=l===_i||l===xi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Si(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Si(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Uf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Nf(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let b=m.array;_=m.version;for(let v=0,w=b.length;v<w;v+=3){let L=b[v+0],A=b[v+1],T=b[v+2];f.push(L,A,A,T,T,L)}}else if(g!==void 0){let b=g.array;_=g.version;for(let v=0,w=b.length/3-1;v<w;v+=3){let L=v+0,A=v+1,T=v+2;f.push(L,A,A,T,T,L)}}else return;let p=new(Dl(f)?zs:Bs)(f,1);p.version=_;let u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ff(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*l,_),t.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let u=0;for(let b=0;b<_;b++)u+=g[b];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Of(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bf(i,e){return i[0]-e[0]}function zf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Hf(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let C=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();let b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],X=0;b===!0&&(X=1),v===!0&&(X=2),w===!0&&(X=3);let M=h.attributes.position.count*X,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let B=new Float32Array(M*E*4*g),Y=new Ns(B,M,E,g);Y.type=Sn,Y.needsUpdate=!0;let ee=X*4;for(let P=0;P<g;P++){let U=L[P],V=A[P],W=T[P],G=M*E*4*P;for(let q=0;q<U.count;q++){let $=q*ee;b===!0&&(o.fromBufferAttribute(U,q),B[G+$+0]=o.x,B[G+$+1]=o.y,B[G+$+2]=o.z,B[G+$+3]=0),v===!0&&(o.fromBufferAttribute(V,q),B[G+$+4]=o.x,B[G+$+5]=o.y,B[G+$+6]=o.z,B[G+$+7]=0),w===!0&&(o.fromBufferAttribute(W,q),B[G+$+8]=o.x,B[G+$+9]=o.y,B[G+$+10]=o.z,B[G+$+11]=W.itemSize===4?o.w:1)}}_={count:g,texture:Y,size:new Le(M,E)},r.set(h,_),h.addEventListener("dispose",C)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<m;v++){let w=g[v];w[0]=v,w[1]=f[v]}g.sort(zf);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Bf);let _=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let w=a[v],L=w[0],A=w[1];L!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+v)!==_[L]&&h.setAttribute("morphTarget"+v,_[L]),p&&h.getAttribute("morphNormal"+v)!==p[L]&&h.setAttribute("morphNormal"+v,p[L]),s[v]=A,u+=A):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let b=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function kf(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Vs=class extends It{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:kn,h!==kn&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===kn&&(n=Mn),n===void 0&&h===vi&&(n=Hn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ol=new It,Bl=new Vs(1,1);Bl.compareFunction=Il;var zl=new Ns,Hl=new Qr,kl=new Hs,tl=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function wi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=tl[s];if(r===void 0&&(r=new Float32Array(s),tl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qs(i,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function Wf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function Xf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function qf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;rl.set(n),i.uniformMatrix2fv(this.addr,!1,rl),ct(t,n)}}function Yf(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),ct(t,n)}}function $f(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;il.set(n),i.uniformMatrix4fv(this.addr,!1,il),ct(t,n)}}function Jf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function Kf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function Qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function jf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function ip(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Bl:Ol;t.setTexture2D(e||r,s)}function sp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hl,s)}function rp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kl,s)}function ap(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zl,s)}function op(i){switch(i){case 5126:return Vf;case 35664:return Gf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return $f;case 5124:case 35670:return Jf;case 35667:case 35671:return Zf;case 35668:case 35672:return Kf;case 35669:case 35673:return Qf;case 5125:return jf;case 36294:return ep;case 36295:return tp;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return ap}}function lp(i,e){i.uniform1fv(this.addr,e)}function cp(i,e){let t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function hp(i,e){let t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function up(i,e){let t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function dp(i,e){let t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fp(i,e){let t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pp(i,e){let t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mp(i,e){i.uniform1iv(this.addr,e)}function gp(i,e){i.uniform2iv(this.addr,e)}function _p(i,e){i.uniform3iv(this.addr,e)}function xp(i,e){i.uniform4iv(this.addr,e)}function vp(i,e){i.uniform1uiv(this.addr,e)}function yp(i,e){i.uniform2uiv(this.addr,e)}function Mp(i,e){i.uniform3uiv(this.addr,e)}function Sp(i,e){i.uniform4uiv(this.addr,e)}function bp(i,e,t){let n=this.cache,s=e.length,r=Qs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ol,r[o])}function Ep(i,e,t){let n=this.cache,s=e.length,r=Qs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hl,r[o])}function wp(i,e,t){let n=this.cache,s=e.length,r=Qs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kl,r[o])}function Ap(i,e,t){let n=this.cache,s=e.length,r=Qs(t,s);lt(n,r)||(i.uniform1iv(this.addr,r),ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zl,r[o])}function Tp(i){switch(i){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return xp;case 5125:return vp;case 36294:return yp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return Ap}}var ta=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=op(t.type)}},na=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tp(t.type)}},ia=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},zr=/(\w+)(\])?(\[|\.)?/g;function al(i,e){i.seq.push(e),i.map[e.id]=e}function Rp(i,e,t){let n=i.name,s=n.length;for(zr.lastIndex=0;;){let r=zr.exec(n),o=zr.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){al(t,c===void 0?new ta(a,i,e):new na(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new ia(a),al(t,d)),t=d}}}var gi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Rp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ol(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cp=37297,Pp=0;function Lp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ip(i){let e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(i),n;switch(e===t?n="":e===Ls&&t===Ps?n="LinearDisplayP3ToLinearSRGB":e===Ps&&t===Ls&&(n="LinearSRGBToLinearDisplayP3"),i){case hn:case Ks:return[n,"LinearTransferOETF"];case nt:case Ra:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ll(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Lp(i.getShaderSource(e),o)}else return s}function Dp(i,e){let t=Ip(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Up(i,e){let t;switch(e){case Qc:t="Linear";break;case jc:t="Reinhard";break;case eh:t="OptimizedCineon";break;case wa:t="ACESFilmic";break;case nh:t="AgX";break;case th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Np(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fi).join(`
`)}function Fp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(fi).join(`
`)}function Op(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fi(i){return i!==""}function cl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(zp,kp)}var Hp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kp(i,e){let t=Ue[e];if(t===void 0){let n=Hp.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sa(t)}var Vp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(i){return i.replace(Vp,Gp)}function Gp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ac?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function Xp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case xi:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qp(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xi&&(e="ENVMAP_MODE_REFRACTION"),e}function Yp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sl:e="ENVMAP_BLENDING_MULTIPLY";break;case Zc:e="ENVMAP_BLENDING_MIX";break;case Kc:e="ENVMAP_BLENDING_ADD";break}return e}function $p(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jp(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Wp(t),c=Xp(t),h=qp(t),d=Yp(t),f=$p(t),m=t.isWebGL2?"":Np(t),g=Fp(t),_=Op(r),p=s.createProgram(),u,b,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fi).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fi).join(`
`),b.length>0&&(b+=`
`)):(u=[dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fi).join(`
`),b=[m,dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ue.tonemapping_pars_fragment:"",t.toneMapping!==En?Up("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Dp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fi).join(`
`)),o=sa(o),o=cl(o,t),o=hl(o,t),a=sa(a),a=cl(a,t),a=hl(a,t),o=ul(o),a=ul(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let w=v+u+o,L=v+b+a,A=ol(s,s.VERTEX_SHADER,w),T=ol(s,s.FRAGMENT_SHADER,L);s.attachShader(p,A),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function X(Y){if(i.debug.checkShaderErrors){let ee=s.getProgramInfoLog(p).trim(),C=s.getShaderInfoLog(A).trim(),P=s.getShaderInfoLog(T).trim(),U=!0,V=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,A,T);else{let W=ll(s,A,"vertex"),G=ll(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+W+`
`+G)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(C===""||P==="")&&(V=!1);V&&(Y.diagnostics={runnable:U,programLog:ee,vertexShader:{log:C,prefix:u},fragmentShader:{log:P,prefix:b}})}s.deleteShader(A),s.deleteShader(T),M=new gi(s,p),E=Bp(s,p)}let M;this.getUniforms=function(){return M===void 0&&X(this),M};let E;this.getAttributes=function(){return E===void 0&&X(this),E};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(p,Cp)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=T,this}var Zp=0,ra=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new aa(e),t.set(e,n)),n}},aa=class{constructor(e){this.id=Zp++,this.code=e,this.usedTimes=0}};function Kp(i,e,t,n,s,r,o){let a=new Vi,l=new ra,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,E,B,Y,ee){let C=Y.fog,P=ee.geometry,U=M.isMeshStandardMaterial?Y.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),W=V&&V.mapping===Zs?V.image.height:null,G=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,$=q!==void 0?q.length:0,se=0;P.morphAttributes.position!==void 0&&(se=1),P.morphAttributes.normal!==void 0&&(se=2),P.morphAttributes.color!==void 0&&(se=3);let k,J,le,pe;if(G){let vt=Kt[G];k=vt.vertexShader,J=vt.fragmentShader}else k=M.vertexShader,J=M.fragmentShader,l.update(M),le=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);let me=i.getRenderTarget(),Te=ee.isInstancedMesh===!0,Re=ee.isBatchedMesh===!0,ye=!!M.map,Ve=!!M.matcap,N=!!V,re=!!M.aoMap,te=!!M.lightMap,ge=!!M.bumpMap,ue=!!M.normalMap,We=!!M.displacementMap,we=!!M.emissiveMap,S=!!M.metalnessMap,x=!!M.roughnessMap,O=M.anisotropy>0,Q=M.clearcoat>0,K=M.iridescence>0,j=M.sheen>0,_e=M.transmission>0,ce=O&&!!M.anisotropyMap,de=Q&&!!M.clearcoatMap,be=Q&&!!M.clearcoatNormalMap,Ne=Q&&!!M.clearcoatRoughnessMap,Z=K&&!!M.iridescenceMap,Ye=K&&!!M.iridescenceThicknessMap,ke=j&&!!M.sheenColorMap,Ce=j&&!!M.sheenRoughnessMap,ve=!!M.specularMap,fe=!!M.specularColorMap,De=!!M.specularIntensityMap,Xe=_e&&!!M.transmissionMap,it=_e&&!!M.thicknessMap,Oe=!!M.gradientMap,ne=!!M.alphaMap,R=M.alphaTest>0,ae=!!M.alphaHash,oe=!!M.extensions,Ee=!!P.attributes.uv1,Me=!!P.attributes.uv2,Je=!!P.attributes.uv3,Ze=En;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ze=i.toneMapping),{isWebGL2:h,shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:J,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Re,instancing:Te,instancingColor:Te&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:hn,map:ye,matcap:Ve,envMap:N,envMapMode:N&&V.mapping,envMapCubeUVHeight:W,aoMap:re,lightMap:te,bumpMap:ge,normalMap:ue,displacementMap:f&&We,emissiveMap:we,normalMapObjectSpace:ue&&M.normalMapType===ph,normalMapTangentSpace:ue&&M.normalMapType===Ta,metalnessMap:S,roughnessMap:x,anisotropy:O,anisotropyMap:ce,clearcoat:Q,clearcoatMap:de,clearcoatNormalMap:be,clearcoatRoughnessMap:Ne,iridescence:K,iridescenceMap:Z,iridescenceThicknessMap:Ye,sheen:j,sheenColorMap:ke,sheenRoughnessMap:Ce,specularMap:ve,specularColorMap:fe,specularIntensityMap:De,transmission:_e,transmissionMap:Xe,thicknessMap:it,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===pi,alphaMap:ne,alphaTest:R,alphaHash:ae,combine:M.combine,mapUv:ye&&_(M.map.channel),aoMapUv:re&&_(M.aoMap.channel),lightMapUv:te&&_(M.lightMap.channel),bumpMapUv:ge&&_(M.bumpMap.channel),normalMapUv:ue&&_(M.normalMap.channel),displacementMapUv:We&&_(M.displacementMap.channel),emissiveMapUv:we&&_(M.emissiveMap.channel),metalnessMapUv:S&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:ce&&_(M.anisotropyMap.channel),clearcoatMapUv:de&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(M.sheenRoughnessMap.channel),specularMapUv:ve&&_(M.specularMap.channel),specularColorMapUv:fe&&_(M.specularColorMap.channel),specularIntensityMapUv:De&&_(M.specularIntensityMap.channel),transmissionMapUv:Xe&&_(M.transmissionMap.channel),thicknessMapUv:it&&_(M.thicknessMap.channel),alphaMapUv:ne&&_(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ue||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:Me,vertexUv3s:Je,pointsUvs:ee.isPoints===!0&&!!P.attributes.uv&&(ye||ne),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wt,flipSided:M.side===xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let B in M.defines)E.push(B),E.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(b(E,M),v(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function b(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function v(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function w(M){let E=g[M.type],B;if(E){let Y=Kt[E];B=zh.clone(Y.uniforms)}else B=M.uniforms;return B}function L(M,E){let B;for(let Y=0,ee=c.length;Y<ee;Y++){let C=c[Y];if(C.cacheKey===E){B=C,++B.usedTimes;break}}return B===void 0&&(B=new Jp(i,E,M,r),c.push(B)),B}function A(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function X(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:X}}function Qp(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function jp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,m,g,_,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function a(d,f,m,g,_,p){let u=o(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,f,m,g,_,p){let u=o(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||jp),n.length>1&&n.sort(f||fl),s.length>1&&s.sort(f||fl)}function h(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function em(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pl,i.set(n,[o])):s>=r.length?(o=new pl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function tm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function nm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var im=0;function sm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rm(i,e){let t=new tm,n=nm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,o=new ot,a=new ot;function l(h,d){let f=0,m=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let _=0,p=0,u=0,b=0,v=0,w=0,L=0,A=0,T=0,X=0,M=0;h.sort(sm);let E=d===!0?Math.PI:1;for(let Y=0,ee=h.length;Y<ee;Y++){let C=h[Y],P=C.color,U=C.intensity,V=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=P.r*U*E,m+=P.g*U*E,g+=P.b*U*E;else if(C.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(C.sh.coefficients[G],U);M++}else if(C.isDirectionalLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){let q=C.shadow,$=n.get(C);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,s.directionalShadow[_]=$,s.directionalShadowMap[_]=W,s.directionalShadowMatrix[_]=C.shadow.matrix,w++}s.directional[_]=G,_++}else if(C.isSpotLight){let G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(P).multiplyScalar(U*E),G.distance=V,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,s.spot[u]=G;let q=C.shadow;if(C.map&&(s.spotLightMap[T]=C.map,T++,q.updateMatrices(C),C.castShadow&&X++),s.spotLightMatrix[u]=q.matrix,C.castShadow){let $=n.get(C);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,s.spotShadow[u]=$,s.spotShadowMap[u]=W,A++}u++}else if(C.isRectAreaLight){let G=t.get(C);G.color.copy(P).multiplyScalar(U),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),s.rectArea[b]=G,b++}else if(C.isPointLight){let G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity*E),G.distance=C.distance,G.decay=C.decay,C.castShadow){let q=C.shadow,$=n.get(C);$.shadowBias=q.bias,$.shadowNormalBias=q.normalBias,$.shadowRadius=q.radius,$.shadowMapSize=q.mapSize,$.shadowCameraNear=q.camera.near,$.shadowCameraFar=q.camera.far,s.pointShadow[p]=$,s.pointShadowMap[p]=W,s.pointShadowMatrix[p]=C.shadow.matrix,L++}s.point[p]=G,p++}else if(C.isHemisphereLight){let G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(U*E),G.groundColor.copy(C.groundColor).multiplyScalar(U*E),s.hemi[v]=G,v++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let B=s.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==u||B.rectAreaLength!==b||B.hemiLength!==v||B.numDirectionalShadows!==w||B.numPointShadows!==L||B.numSpotShadows!==A||B.numSpotMaps!==T||B.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=u,s.rectArea.length=b,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=A+T-X,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=M,B.directionalLength=_,B.pointLength=p,B.spotLength=u,B.rectAreaLength=b,B.hemiLength=v,B.numDirectionalShadows=w,B.numPointShadows=L,B.numSpotShadows=A,B.numSpotMaps=T,B.numLightProbes=M,s.version=im++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0,u=d.matrixWorldInverse;for(let b=0,v=h.length;b<v;b++){let w=h[b];if(w.isDirectionalLight){let L=s.directional[f];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),f++}else if(w.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(u),g++}else if(w.isRectAreaLight){let L=s.rectArea[_];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let L=s.point[m];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){let L=s.hemi[p];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function ml(i,e){let t=new rm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function am(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new ml(i,e),t.set(r,[l])):o>=a.length?(l=new ml(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var oa=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},la=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cm(i,e,t){let n=new Gi,s=new Le,r=new Le,o=new et,a=new oa({depthPacking:fh}),l=new la,c={},h=t.maxTextureSize,d={[An]:xt,[xt]:An,[Wt]:Wt},f=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:om,fragmentShader:lm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Yt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ge(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let u=this.type;this.render=function(A,T,X){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),E=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(bn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let ee=u!==on&&this.type===on,C=u===on&&this.type!==on;for(let P=0,U=A.length;P<U;P++){let V=A[P],W=V.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let G=W.getFrameExtents();if(s.multiply(G),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,W.mapSize.y=r.y)),W.map===null||ee===!0||C===!0){let $=this.type!==on?{minFilter:St,magFilter:St}:{};W.map!==null&&W.map.dispose(),W.map=new un(s.x,s.y,$),W.map.texture.name=V.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let q=W.getViewportCount();for(let $=0;$<q;$++){let se=W.getViewport($);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),Y.viewport(o),W.updateMatrices(V,$),n=W.getFrustum(),w(T,X,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===on&&b(W,X),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,E,B)};function b(A,T){let X=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new un(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,X,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,X,m,_,null)}function v(A,T,X,M){let E=null,B=X.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)E=B;else if(E=X.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let Y=E.uuid,ee=T.uuid,C=c[Y];C===void 0&&(C={},c[Y]=C);let P=C[ee];P===void 0&&(P=E.clone(),C[ee]=P,T.addEventListener("dispose",L)),E=P}if(E.visible=T.visible,E.wireframe=T.wireframe,M===on?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,X.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let Y=i.properties.get(E);Y.light=X}return E}function w(A,T,X,M,E){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===on)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld);let ee=e.update(A),C=A.material;if(Array.isArray(C)){let P=ee.groups;for(let U=0,V=P.length;U<V;U++){let W=P[U],G=C[W.materialIndex];if(G&&G.visible){let q=v(A,G,M,E);A.onBeforeShadow(i,A,T,X,ee,q,W),i.renderBufferDirect(X,null,ee,q,A,W),A.onAfterShadow(i,A,T,X,ee,q,W)}}}else if(C.visible){let P=v(A,C,M,E);A.onBeforeShadow(i,A,T,X,ee,P,null),i.renderBufferDirect(X,null,ee,P,A,null),A.onAfterShadow(i,A,T,X,ee,P,null)}}let Y=A.children;for(let ee=0,C=Y.length;ee<C;ee++)w(Y[ee],T,X,M,E)}function L(A){A.target.removeEventListener("dispose",L);for(let X in c){let M=c[X],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function hm(i,e,t){let n=t.isWebGL2;function s(){let R=!1,ae=new et,oe=null,Ee=new et(0,0,0,0);return{setMask:function(Me){oe!==Me&&!R&&(i.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){R=Me},setClear:function(Me,Je,Ze,ht,vt){vt===!0&&(Me*=ht,Je*=ht,Ze*=ht),ae.set(Me,Je,Ze,ht),Ee.equals(ae)===!1&&(i.clearColor(Me,Je,Ze,ht),Ee.copy(ae))},reset:function(){R=!1,oe=null,Ee.set(-1,0,0,0)}}}function r(){let R=!1,ae=null,oe=null,Ee=null;return{setTest:function(Me){Me?Re(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!R&&(i.depthMask(Me),ae=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case Gc:i.depthFunc(i.NEVER);break;case Wc:i.depthFunc(i.ALWAYS);break;case Xc:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case qc:i.depthFunc(i.EQUAL);break;case Yc:i.depthFunc(i.GEQUAL);break;case $c:i.depthFunc(i.GREATER);break;case Jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Me}},setLocked:function(Me){R=Me},setClear:function(Me){Ee!==Me&&(i.clearDepth(Me),Ee=Me)},reset:function(){R=!1,ae=null,oe=null,Ee=null}}}function o(){let R=!1,ae=null,oe=null,Ee=null,Me=null,Je=null,Ze=null,ht=null,vt=null;return{setTest:function(Ke){R||(Ke?Re(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!R&&(i.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,yt,Zt){(oe!==Ke||Ee!==yt||Me!==Zt)&&(i.stencilFunc(Ke,yt,Zt),oe=Ke,Ee=yt,Me=Zt)},setOp:function(Ke,yt,Zt){(Je!==Ke||Ze!==yt||ht!==Zt)&&(i.stencilOp(Ke,yt,Zt),Je=Ke,Ze=yt,ht=Zt)},setLocked:function(Ke){R=Ke},setClear:function(Ke){vt!==Ke&&(i.clearStencil(Ke),vt=Ke)},reset:function(){R=!1,ae=null,oe=null,Ee=null,Me=null,Je=null,Ze=null,ht=null,vt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,v=null,w=null,L=null,A=null,T=null,X=null,M=new He(0,0,0),E=0,B=!1,Y=null,ee=null,C=null,P=null,U=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,G=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=G>=2);let $=null,se={},k=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),le=new et().fromArray(k),pe=new et().fromArray(J);function me(R,ae,oe,Ee){let Me=new Uint8Array(4),Je=i.createTexture();i.bindTexture(R,Je),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<oe;Ze++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ae+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Je}let Te={};Te[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),l.setFunc(As),we(!1),S(Ya),Re(i.CULL_FACE),ue(bn);function Re(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function ye(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function Ve(R,ae){return m[R]!==ae?(i.bindFramebuffer(R,ae),m[R]=ae,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function N(R,ae){let oe=_,Ee=!1;if(R)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),R.isWebGLMultipleRenderTargets){let Me=R.texture;if(oe.length!==Me.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Je=0,Ze=Me.length;Je<Ze;Je++)oe[Je]=i.COLOR_ATTACHMENT0+Je;oe.length=Me.length,Ee=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,Ee=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function re(R){return p!==R?(i.useProgram(R),p=R,!0):!1}let te={[Bn]:i.FUNC_ADD,[Rc]:i.FUNC_SUBTRACT,[Cc]:i.FUNC_REVERSE_SUBTRACT};if(n)te[Ka]=i.MIN,te[Qa]=i.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(te[Ka]=R.MIN_EXT,te[Qa]=R.MAX_EXT)}let ge={[Pc]:i.ZERO,[Lc]:i.ONE,[Ic]:i.SRC_COLOR,[Vr]:i.SRC_ALPHA,[Bc]:i.SRC_ALPHA_SATURATE,[Fc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Dc]:i.ONE_MINUS_SRC_COLOR,[Gr]:i.ONE_MINUS_SRC_ALPHA,[Oc]:i.ONE_MINUS_DST_COLOR,[Nc]:i.ONE_MINUS_DST_ALPHA,[zc]:i.CONSTANT_COLOR,[Hc]:i.ONE_MINUS_CONSTANT_COLOR,[kc]:i.CONSTANT_ALPHA,[Vc]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(R,ae,oe,Ee,Me,Je,Ze,ht,vt,Ke){if(R===bn){u===!0&&(ye(i.BLEND),u=!1);return}if(u===!1&&(Re(i.BLEND),u=!0),R!==Tc){if(R!==b||Ke!==B){if((v!==Bn||A!==Bn)&&(i.blendEquation(i.FUNC_ADD),v=Bn,A=Bn),Ke)switch(R){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.ONE,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Za:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Za:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,L=null,T=null,X=null,M.set(0,0,0),E=0,b=R,B=Ke}return}Me=Me||ae,Je=Je||oe,Ze=Ze||Ee,(ae!==v||Me!==A)&&(i.blendEquationSeparate(te[ae],te[Me]),v=ae,A=Me),(oe!==w||Ee!==L||Je!==T||Ze!==X)&&(i.blendFuncSeparate(ge[oe],ge[Ee],ge[Je],ge[Ze]),w=oe,L=Ee,T=Je,X=Ze),(ht.equals(M)===!1||vt!==E)&&(i.blendColor(ht.r,ht.g,ht.b,vt),M.copy(ht),E=vt),b=R,B=!1}function We(R,ae){R.side===Wt?ye(i.CULL_FACE):Re(i.CULL_FACE);let oe=R.side===xt;ae&&(oe=!oe),we(oe),R.blending===pi&&R.transparent===!1?ue(bn):ue(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let Ee=R.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),O(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(R){Y!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),Y=R)}function S(R){R!==Ec?(Re(i.CULL_FACE),R!==ee&&(R===Ya?i.cullFace(i.BACK):R===wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),ee=R}function x(R){R!==C&&(W&&i.lineWidth(R),C=R)}function O(R,ae,oe){R?(Re(i.POLYGON_OFFSET_FILL),(P!==ae||U!==oe)&&(i.polygonOffset(ae,oe),P=ae,U=oe)):ye(i.POLYGON_OFFSET_FILL)}function Q(R){R?Re(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function K(R){R===void 0&&(R=i.TEXTURE0+V-1),$!==R&&(i.activeTexture(R),$=R)}function j(R,ae,oe){oe===void 0&&($===null?oe=i.TEXTURE0+V-1:oe=$);let Ee=se[oe];Ee===void 0&&(Ee={type:void 0,texture:void 0},se[oe]=Ee),(Ee.type!==R||Ee.texture!==ae)&&($!==oe&&(i.activeTexture(oe),$=oe),i.bindTexture(R,ae||Te[R]),Ee.type=R,Ee.texture=ae)}function _e(){let R=se[$];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ce(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ce(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function De(R){le.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function Xe(R){pe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),pe.copy(R))}function it(R,ae){let oe=d.get(ae);oe===void 0&&(oe=new WeakMap,d.set(ae,oe));let Ee=oe.get(R);Ee===void 0&&(Ee=i.getUniformBlockIndex(ae,R.name),oe.set(R,Ee))}function Oe(R,ae){let Ee=d.get(ae).get(R);h.get(ae)!==Ee&&(i.uniformBlockBinding(ae,Ee,R.__bindingPointIndex),h.set(ae,Ee))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},$=null,se={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,v=null,w=null,L=null,A=null,T=null,X=null,M=new He(0,0,0),E=0,B=!1,Y=null,ee=null,C=null,P=null,U=null,le.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:ye,bindFramebuffer:Ve,drawBuffers:N,useProgram:re,setBlending:ue,setMaterial:We,setFlipSided:we,setCullFace:S,setLineWidth:x,setPolygonOffset:O,setScissorTest:Q,activeTexture:K,bindTexture:j,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:ve,texImage3D:fe,updateUBOMapping:it,uniformBlockBinding:Oe,texStorage2D:ke,texStorage3D:Ce,texSubImage2D:be,texSubImage3D:Ne,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ye,scissor:De,viewport:Xe,reset:ne}}function um(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):Hi("canvas")}function _(S,x,O,Q){let K=1;if((S.width>Q||S.height>Q)&&(K=Q/Math.max(S.width,S.height)),K<1||x===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){let j=x?Zr:Math.floor,_e=j(K*S.width),ce=j(K*S.height);d===void 0&&(d=g(_e,ce));let de=O?g(_e,ce):d;return de.width=_e,de.height=ce,de.getContext("2d").drawImage(S,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+_e+"x"+ce+")."),de}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Io(S.width)&&Io(S.height)}function u(S){return a?!1:S.wrapS!==Xt||S.wrapT!==Xt||S.minFilter!==St&&S.minFilter!==Ft}function b(S,x){return S.generateMipmaps&&x&&S.minFilter!==St&&S.minFilter!==Ft}function v(S){i.generateMipmap(S)}function w(S,x,O,Q,K=!1){if(a===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=x;if(x===i.RED&&(O===i.FLOAT&&(j=i.R32F),O===i.HALF_FLOAT&&(j=i.R16F),O===i.UNSIGNED_BYTE&&(j=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.R8UI),O===i.UNSIGNED_SHORT&&(j=i.R16UI),O===i.UNSIGNED_INT&&(j=i.R32UI),O===i.BYTE&&(j=i.R8I),O===i.SHORT&&(j=i.R16I),O===i.INT&&(j=i.R32I)),x===i.RG&&(O===i.FLOAT&&(j=i.RG32F),O===i.HALF_FLOAT&&(j=i.RG16F),O===i.UNSIGNED_BYTE&&(j=i.RG8)),x===i.RGBA){let _e=K?Cs:$e.getTransfer(Q);O===i.FLOAT&&(j=i.RGBA32F),O===i.HALF_FLOAT&&(j=i.RGBA16F),O===i.UNSIGNED_BYTE&&(j=_e===Qe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function L(S,x,O){return b(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==St&&S.minFilter!==Ft?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function A(S){return S===St||S===ja||S===cr?i.NEAREST:i.LINEAR}function T(S){let x=S.target;x.removeEventListener("dispose",T),M(x),x.isVideoTexture&&h.delete(x)}function X(S){let x=S.target;x.removeEventListener("dispose",X),B(x)}function M(S){let x=n.get(S);if(x.__webglInit===void 0)return;let O=S.source,Q=f.get(O);if(Q){let K=Q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(S),Object.keys(Q).length===0&&f.delete(O)}n.remove(S)}function E(S){let x=n.get(S);i.deleteTexture(x.__webglTexture);let O=S.source,Q=f.get(O);delete Q[x.__cacheKey],o.memory.textures--}function B(S){let x=S.texture,O=n.get(S),Q=n.get(x);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(O.__webglFramebuffer[K]))for(let j=0;j<O.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(O.__webglFramebuffer[K][j]);else i.deleteFramebuffer(O.__webglFramebuffer[K]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[K])}else{if(Array.isArray(O.__webglFramebuffer))for(let K=0;K<O.__webglFramebuffer.length;K++)i.deleteFramebuffer(O.__webglFramebuffer[K]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let K=0;K<O.__webglColorRenderbuffer.length;K++)O.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[K]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let K=0,j=x.length;K<j;K++){let _e=n.get(x[K]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(x[K])}n.remove(x),n.remove(S)}let Y=0;function ee(){Y=0}function C(){let S=Y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),Y+=1,S}function P(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function U(S,x){let O=n.get(S);if(S.isVideoTexture&&We(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(O,S,x);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function V(S,x){let O=n.get(S);if(S.version>0&&O.__version!==S.version){le(O,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function W(S,x){let O=n.get(S);if(S.version>0&&O.__version!==S.version){le(O,S,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function G(S,x){let O=n.get(S);if(S.version>0&&O.__version!==S.version){pe(O,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let q={[qr]:i.REPEAT,[Xt]:i.CLAMP_TO_EDGE,[Yr]:i.MIRRORED_REPEAT},$={[St]:i.NEAREST,[ja]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[ih]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},se={[mh]:i.NEVER,[Mh]:i.ALWAYS,[gh]:i.LESS,[Il]:i.LEQUAL,[_h]:i.EQUAL,[yh]:i.GEQUAL,[xh]:i.GREATER,[vh]:i.NOTEQUAL};function k(S,x,O){if(O?(i.texParameteri(S,i.TEXTURE_WRAP_S,q[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,q[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,q[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,$[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,$[x.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Xt||x.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==St&&x.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Q=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===St||x.minFilter!==cr&&x.minFilter!==Bi||x.type===Sn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===zi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(S,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function J(S,x){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",T));let Q=x.source,K=f.get(Q);K===void 0&&(K={},f.set(Q,K));let j=P(x);if(j!==S.__cacheKey){K[j]===void 0&&(K[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[j].usedTimes++;let _e=K[S.__cacheKey];_e!==void 0&&(K[S.__cacheKey].usedTimes--,_e.usedTimes===0&&E(x)),S.__cacheKey=j,S.__webglTexture=K[j].texture}return O}function le(S,x,O){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);let K=J(S,x),j=x.source;t.bindTexture(Q,S.__webglTexture,i.TEXTURE0+O);let _e=n.get(j);if(j.version!==_e.__version||K===!0){t.activeTexture(i.TEXTURE0+O);let ce=$e.getPrimaries($e.workingColorSpace),de=x.colorSpace===Ot?null:$e.getPrimaries(x.colorSpace),be=x.colorSpace===Ot||ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ne=u(x)&&p(x.image)===!1,Z=_(x.image,Ne,!1,s.maxTextureSize);Z=we(x,Z);let Ye=p(Z)||a,ke=r.convert(x.format,x.colorSpace),Ce=r.convert(x.type),ve=w(x.internalFormat,ke,Ce,x.colorSpace,x.isVideoTexture);k(Q,x,Ye);let fe,De=x.mipmaps,Xe=a&&x.isVideoTexture!==!0&&ve!==Pl,it=_e.__version===void 0||K===!0,Oe=L(x,Z,Ye);if(x.isDepthTexture)ve=i.DEPTH_COMPONENT,a?x.type===Sn?ve=i.DEPTH_COMPONENT32F:x.type===Mn?ve=i.DEPTH_COMPONENT24:x.type===Hn?ve=i.DEPTH24_STENCIL8:ve=i.DEPTH_COMPONENT16:x.type===Sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===kn&&ve===i.DEPTH_COMPONENT&&x.type!==Aa&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,Ce=r.convert(x.type)),x.format===vi&&ve===i.DEPTH_COMPONENT&&(ve=i.DEPTH_STENCIL,x.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Hn,Ce=r.convert(x.type))),it&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,ve,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,ke,Ce,null));else if(x.isDataTexture)if(De.length>0&&Ye){Xe&&it&&t.texStorage2D(i.TEXTURE_2D,Oe,ve,De[0].width,De[0].height);for(let ne=0,R=De.length;ne<R;ne++)fe=De[ne],Xe?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,ke,Ce,fe.data):t.texImage2D(i.TEXTURE_2D,ne,ve,fe.width,fe.height,0,ke,Ce,fe.data);x.generateMipmaps=!1}else Xe?(it&&t.texStorage2D(i.TEXTURE_2D,Oe,ve,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,ke,Ce,Z.data)):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,ke,Ce,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,ve,De[0].width,De[0].height,Z.depth);for(let ne=0,R=De.length;ne<R;ne++)fe=De[ne],x.format!==qt?ke!==null?Xe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,Z.depth,ke,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,ve,fe.width,fe.height,Z.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,Z.depth,ke,Ce,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,ve,fe.width,fe.height,Z.depth,0,ke,Ce,fe.data)}else{Xe&&it&&t.texStorage2D(i.TEXTURE_2D,Oe,ve,De[0].width,De[0].height);for(let ne=0,R=De.length;ne<R;ne++)fe=De[ne],x.format!==qt?ke!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,ke,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,ke,Ce,fe.data):t.texImage2D(i.TEXTURE_2D,ne,ve,fe.width,fe.height,0,ke,Ce,fe.data)}else if(x.isDataArrayTexture)Xe?(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,ve,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ke,Ce,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Z.width,Z.height,Z.depth,0,ke,Ce,Z.data);else if(x.isData3DTexture)Xe?(it&&t.texStorage3D(i.TEXTURE_3D,Oe,ve,Z.width,Z.height,Z.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ke,Ce,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Z.width,Z.height,Z.depth,0,ke,Ce,Z.data);else if(x.isFramebufferTexture){if(it)if(Xe)t.texStorage2D(i.TEXTURE_2D,Oe,ve,Z.width,Z.height);else{let ne=Z.width,R=Z.height;for(let ae=0;ae<Oe;ae++)t.texImage2D(i.TEXTURE_2D,ae,ve,ne,R,0,ke,Ce,null),ne>>=1,R>>=1}}else if(De.length>0&&Ye){Xe&&it&&t.texStorage2D(i.TEXTURE_2D,Oe,ve,De[0].width,De[0].height);for(let ne=0,R=De.length;ne<R;ne++)fe=De[ne],Xe?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ke,Ce,fe):t.texImage2D(i.TEXTURE_2D,ne,ve,ke,Ce,fe);x.generateMipmaps=!1}else Xe?(it&&t.texStorage2D(i.TEXTURE_2D,Oe,ve,Z.width,Z.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,Ce,Z)):t.texImage2D(i.TEXTURE_2D,0,ve,ke,Ce,Z);b(x,Ye)&&v(Q),_e.__version=j.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function pe(S,x,O){if(x.image.length!==6)return;let Q=J(S,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);let j=n.get(K);if(K.version!==j.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let _e=$e.getPrimaries($e.workingColorSpace),ce=x.colorSpace===Ot?null:$e.getPrimaries(x.colorSpace),de=x.colorSpace===Ot||_e===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let be=x.isCompressedTexture||x.image[0].isCompressedTexture,Ne=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let ne=0;ne<6;ne++)!be&&!Ne?Z[ne]=_(x.image[ne],!1,!0,s.maxCubemapSize):Z[ne]=Ne?x.image[ne].image:x.image[ne],Z[ne]=we(x,Z[ne]);let Ye=Z[0],ke=p(Ye)||a,Ce=r.convert(x.format,x.colorSpace),ve=r.convert(x.type),fe=w(x.internalFormat,Ce,ve,x.colorSpace),De=a&&x.isVideoTexture!==!0,Xe=j.__version===void 0||Q===!0,it=L(x,Ye,ke);k(i.TEXTURE_CUBE_MAP,x,ke);let Oe;if(be){De&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,it,fe,Ye.width,Ye.height);for(let ne=0;ne<6;ne++){Oe=Z[ne].mipmaps;for(let R=0;R<Oe.length;R++){let ae=Oe[R];x.format!==qt?Ce!==null?De?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,ae.width,ae.height,Ce,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,ae.width,ae.height,Ce,ve,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,fe,ae.width,ae.height,0,Ce,ve,ae.data)}}}else{Oe=x.mipmaps,De&&Xe&&(Oe.length>0&&it++,t.texStorage2D(i.TEXTURE_CUBE_MAP,it,fe,Z[0].width,Z[0].height));for(let ne=0;ne<6;ne++)if(Ne){De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Z[ne].width,Z[ne].height,Ce,ve,Z[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,Z[ne].width,Z[ne].height,0,Ce,ve,Z[ne].data);for(let R=0;R<Oe.length;R++){let oe=Oe[R].image[ne].image;De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,oe.width,oe.height,Ce,ve,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,fe,oe.width,oe.height,0,Ce,ve,oe.data)}}else{De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,ve,Z[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,Ce,ve,Z[ne]);for(let R=0;R<Oe.length;R++){let ae=Oe[R];De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,Ce,ve,ae.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,fe,Ce,ve,ae.image[ne])}}}b(x,ke)&&v(i.TEXTURE_CUBE_MAP),j.__version=K.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function me(S,x,O,Q,K,j){let _e=r.convert(O.format,O.colorSpace),ce=r.convert(O.type),de=w(O.internalFormat,_e,ce,O.colorSpace);if(!n.get(x).__hasExternalTextures){let Ne=Math.max(1,x.width>>j),Z=Math.max(1,x.height>>j);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,j,de,Ne,Z,x.depth,0,_e,ce,null):t.texImage2D(K,j,de,Ne,Z,0,_e,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),ue(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,n.get(O).__webglTexture,0,ge(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,n.get(O).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(S,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||ue(x)){let K=x.depthTexture;K&&K.isDepthTexture&&(K.type===Sn?Q=i.DEPTH_COMPONENT32F:K.type===Mn&&(Q=i.DEPTH_COMPONENT24));let j=ge(x);ue(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,Q,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,j,Q,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){let Q=ge(x);O&&ue(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):ue(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0;K<Q.length;K++){let j=Q[K],_e=r.convert(j.format,j.colorSpace),ce=r.convert(j.type),de=w(j.internalFormat,_e,ce,j.colorSpace),be=ge(x);O&&ue(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,de,x.width,x.height):ue(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),U(x.depthTexture,0);let Q=n.get(x.depthTexture).__webglTexture,K=ge(x);if(x.depthTexture.format===kn)ue(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===vi)ue(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ye(S){let x=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Re(x.__webglFramebuffer,S)}else if(O){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=i.createRenderbuffer(),Te(x.__webglDepthbuffer[Q],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Te(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(S,x,O){let Q=n.get(S);x!==void 0&&me(Q.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ye(S)}function N(S){let x=S.texture,O=n.get(S),Q=n.get(x);S.addEventListener("dispose",X),S.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,o.memory.textures++);let K=S.isWebGLCubeRenderTarget===!0,j=S.isWebGLMultipleRenderTargets===!0,_e=p(S)||a;if(K){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let de=0;de<x.mipmaps.length;de++)O.__webglFramebuffer[ce][de]=i.createFramebuffer()}else O.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)O.__webglFramebuffer[ce]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(j)if(s.drawBuffers){let ce=S.texture;for(let de=0,be=ce.length;de<be;de++){let Ne=n.get(ce[de]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ue(S)===!1){let ce=j?x:[x];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){let be=ce[de];O.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[de]);let Ne=r.convert(be.format,be.colorSpace),Z=r.convert(be.type),Ye=w(be.internalFormat,Ne,Z,be.colorSpace,S.isXRRenderTarget===!0),ke=ge(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ye,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,O.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),k(i.TEXTURE_CUBE_MAP,x,_e);for(let ce=0;ce<6;ce++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)me(O.__webglFramebuffer[ce][de],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else me(O.__webglFramebuffer[ce],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);b(x,_e)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let ce=S.texture;for(let de=0,be=ce.length;de<be;de++){let Ne=ce[de],Z=n.get(Ne);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),k(i.TEXTURE_2D,Ne,_e),me(O.__webglFramebuffer,S,Ne,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),b(Ne,_e)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ce=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,Q.__webglTexture),k(ce,x,_e),a&&x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)me(O.__webglFramebuffer[de],S,x,i.COLOR_ATTACHMENT0,ce,de);else me(O.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,ce,0);b(x,_e)&&v(ce),t.unbindTexture()}S.depthBuffer&&ye(S)}function re(S){let x=p(S)||a,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Q=0,K=O.length;Q<K;Q++){let j=O[Q];if(b(j,x)){let _e=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ce=n.get(j).__webglTexture;t.bindTexture(_e,ce),v(_e),t.unbindTexture()}}}function te(S){if(a&&S.samples>0&&ue(S)===!1){let x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,Q=S.height,K=i.COLOR_BUFFER_BIT,j=[],_e=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(S),de=S.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<x.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let be=0;be<x.length;be++){j.push(i.COLOR_ATTACHMENT0+be),S.depthBuffer&&j.push(_e);let Ne=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Ne===!1&&(S.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[be]),Ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),de){let Z=n.get(x[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,O,Q,0,0,O,Q,K,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<x.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);let Ne=n.get(x[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function ge(S){return Math.min(s.maxSamples,S.samples)}function ue(S){let x=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function We(S){let x=o.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function we(S,x){let O=S.colorSpace,Q=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===$r||O!==hn&&O!==Ot&&($e.getTransfer(O)===Qe?a===!1?e.has("EXT_sRGB")===!0&&Q===qt?(S.format=$r,S.minFilter=Ft,S.generateMipmaps=!1):x=Ds.sRGBToLinear(x):(Q!==qt||K!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}this.allocateTextureUnit=C,this.resetTextureUnits=ee,this.setTexture2D=U,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=Ve,this.setupRenderTarget=N,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ue}function dm(i,e,t){let n=t.isWebGL2;function s(r,o=Ot){let a,l=$e.getTransfer(o);if(r===wn)return i.UNSIGNED_BYTE;if(r===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(r===sh)return i.BYTE;if(r===rh)return i.SHORT;if(r===Aa)return i.UNSIGNED_SHORT;if(r===El)return i.INT;if(r===Mn)return i.UNSIGNED_INT;if(r===Sn)return i.FLOAT;if(r===zi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ah)return i.ALPHA;if(r===qt)return i.RGBA;if(r===oh)return i.LUMINANCE;if(r===lh)return i.LUMINANCE_ALPHA;if(r===kn)return i.DEPTH_COMPONENT;if(r===vi)return i.DEPTH_STENCIL;if(r===$r)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ch)return i.RED;if(r===Tl)return i.RED_INTEGER;if(r===hh)return i.RG;if(r===Rl)return i.RG_INTEGER;if(r===Cl)return i.RGBA_INTEGER;if(r===hr||r===ur||r===dr||r===fr)if(l===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eo||r===to||r===no||r===io)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===eo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===to)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===no)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===io)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===so||r===ro)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===so)return l===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ro)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ao||r===oo||r===lo||r===co||r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===_o||r===xo||r===vo||r===yo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ao)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===co)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ho)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===po)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===go)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_o)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yo)return l===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pr||r===Mo||r===So)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===pr)return l===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===So)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uh||r===bo||r===Eo||r===wo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===pr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===bo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Eo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ca=class extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Bt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},fm={type:"move"},Oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ha=class extends Tn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,_=t.getContextAttributes(),p=null,u=null,b=[],v=[],w=new Le,L=null,A=new pt;A.layers.enable(1),A.viewport=new et;let T=new pt;T.layers.enable(2),T.viewport=new et;let X=[A,T],M=new ca;M.layers.enable(1),M.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=b[k];return J===void 0&&(J=new Oi,b[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=b[k];return J===void 0&&(J=new Oi,b[k]=J),J.getGripSpace()},this.getHand=function(k){let J=b[k];return J===void 0&&(J=new Oi,b[k]=J),J.getHandSpace()};function Y(k){let J=v.indexOf(k.inputSource);if(J===-1)return;let le=b[J];le!==void 0&&(le.update(k.inputSource,k.frame,c||o),le.dispatchEvent({type:k.type,data:k.inputSource}))}function ee(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",C);for(let k=0;k<b.length;k++){let J=v[k];J!==null&&(v[k]=null,b[k].disconnect(J))}E=null,B=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new un(m.framebufferWidth,m.framebufferHeight,{format:qt,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,le=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?vi:kn,le=_.stencil?Hn:Mn);let me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new un(f.textureWidth,f.textureHeight,{format:qt,type:wn,depthTexture:new Vs(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Te=e.properties.get(u);Te.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(k){for(let J=0;J<k.removed.length;J++){let le=k.removed[J],pe=v.indexOf(le);pe>=0&&(v[pe]=null,b[pe].disconnect(le))}for(let J=0;J<k.added.length;J++){let le=k.added[J],pe=v.indexOf(le);if(pe===-1){for(let Te=0;Te<b.length;Te++)if(Te>=v.length){v.push(le),pe=Te;break}else if(v[Te]===null){v[Te]=le,pe=Te;break}if(pe===-1)break}let me=b[pe];me&&me.connect(le)}}let P=new D,U=new D;function V(k,J,le){P.setFromMatrixPosition(J.matrixWorld),U.setFromMatrixPosition(le.matrixWorld);let pe=P.distanceTo(U),me=J.projectionMatrix.elements,Te=le.projectionMatrix.elements,Re=me[14]/(me[10]-1),ye=me[14]/(me[10]+1),Ve=(me[9]+1)/me[5],N=(me[9]-1)/me[5],re=(me[8]-1)/me[0],te=(Te[8]+1)/Te[0],ge=Re*re,ue=Re*te,We=pe/(-re+te),we=We*-re;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(we),k.translateZ(We),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let S=Re+We,x=ye+We,O=ge-we,Q=ue+(pe-we),K=Ve*ye/x*S,j=N*ye/x*S;k.projectionMatrix.makePerspective(O,Q,K,j,S,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function W(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;M.near=T.near=A.near=k.near,M.far=T.far=A.far=k.far,(E!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,B=M.far);let J=k.parent,le=M.cameras;W(M,J);for(let pe=0;pe<le.length;pe++)W(le[pe],J);le.length===2?V(M,A,T):M.projectionMatrix.copy(A.projectionMatrix),G(k,M,J)};function G(k,J,le){le===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(le.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Jr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let q=null;function $(k,J){if(h=J.getViewerPose(c||o),g=J,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let pe=!1;le.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let me=0;me<le.length;me++){let Te=le[me],Re=null;if(m!==null)Re=m.getViewport(Te);else{let Ve=d.getViewSubImage(f,Te);Re=Ve.viewport,me===0&&(e.setRenderTargetTextures(u,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(u))}let ye=X[me];ye===void 0&&(ye=new pt,ye.layers.enable(me),ye.viewport=new et,X[me]=ye),ye.matrix.fromArray(Te.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Te.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Re.x,Re.y,Re.width,Re.height),me===0&&(M.matrix.copy(ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(ye)}}for(let le=0;le<b.length;le++){let pe=v[le],me=b[le];pe!==null&&me!==void 0&&me.update(pe,J,c||o)}q&&q(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let se=new Fl;se.setAnimationLoop($),this.setAnimationLoop=function(k){q=k},this.dispose=function(){}}};function pm(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Nl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,v,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,b,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===xt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===xt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let b=e.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=v*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mm(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,v){let w=v.program;n.uniformBlockBinding(b,w)}function c(b,v){let w=s[b.id];w===void 0&&(g(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",p));let L=v.program;n.updateUBOMapping(b,L);let A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){let v=d();b.__bindingPointIndex=v;let w=i.createBuffer(),L=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],w=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,T=w.length;A<T;A++){let X=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,E=X.length;M<E;M++){let B=X[M];if(m(B,A,M,L)===!0){let Y=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value],C=0;for(let P=0;P<ee.length;P++){let U=ee[P],V=_(U);typeof U=="number"||typeof U=="boolean"?(B.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,Y+C,B.__data)):U.isMatrix3?(B.__data[0]=U.elements[0],B.__data[1]=U.elements[1],B.__data[2]=U.elements[2],B.__data[3]=0,B.__data[4]=U.elements[3],B.__data[5]=U.elements[4],B.__data[6]=U.elements[5],B.__data[7]=0,B.__data[8]=U.elements[6],B.__data[9]=U.elements[7],B.__data[10]=U.elements[8],B.__data[11]=0):(U.toArray(B.__data,C),C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,v,w,L){let A=b.value,T=v+"_"+w;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{let X=L[T];if(typeof A=="number"||typeof A=="boolean"){if(X!==A)return L[T]=A,!0}else if(X.equals(A)===!1)return X.copy(A),!0}return!1}function g(b){let v=b.uniforms,w=0,L=16;for(let T=0,X=v.length;T<X;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,B=M.length;E<B;E++){let Y=M[E],ee=Array.isArray(Y.value)?Y.value:[Y.value];for(let C=0,P=ee.length;C<P;C++){let U=ee[C],V=_(U),W=w%L;W!==0&&L-W<V.boundary&&(w+=L-W),Y.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=V.storage}}}let A=w%L;return A>0&&(w+=L-A),b.__size=w,b.__cache={},this}function _(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){let v=b.target;v.removeEventListener("dispose",p);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Xn=class{constructor(e={}){let{canvas:t=bh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this._useLegacyLights=!1,this.toneMapping=En,this.toneMappingExposure=1;let v=this,w=!1,L=0,A=0,T=null,X=-1,M=null,E=new et,B=new et,Y=null,ee=new He(0),C=0,P=t.width,U=t.height,V=1,W=null,G=null,q=new et(0,0,P,U),$=new et(0,0,P,U),se=!1,k=new Gi,J=!1,le=!1,pe=null,me=new ot,Te=new Le,Re=new D,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return T===null?V:1}let N=n;function re(y,I){for(let z=0;z<y.length;z++){let H=y[z],F=t.getContext(H,I);if(F!==null)return F}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){let I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),N=re(I,y),N===null)throw re(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let te,ge,ue,We,we,S,x,O,Q,K,j,_e,ce,de,be,Ne,Z,Ye,ke,Ce,ve,fe,De,Xe;function it(){te=new Uf(N),ge=new Rf(N,te,e),te.init(ge),fe=new dm(N,te,ge),ue=new hm(N,te,ge),We=new Of(N),we=new Qp,S=new um(N,te,ue,we,ge,fe,We),x=new Pf(v),O=new Df(v),Q=new Wh(N,ge),De=new Af(N,te,Q,ge),K=new Nf(N,Q,We,De),j=new kf(N,K,Q,We),ke=new Hf(N,ge,S),Ne=new Cf(we),_e=new Kp(v,x,O,te,ge,De,Ne),ce=new pm(v,we),de=new em,be=new am(te,ge),Ye=new wf(v,x,O,ue,j,f,l),Z=new cm(v,j,ge),Xe=new mm(N,We,ge,ue),Ce=new Tf(N,te,We,ge),ve=new Ff(N,te,We,ge),We.programs=_e.programs,v.capabilities=ge,v.extensions=te,v.properties=we,v.renderLists=de,v.shadowMap=Z,v.state=ue,v.info=We}it();let Oe=new ha(v,N);this.xr=Oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=te.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=te.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(P,U,!1))},this.getSize=function(y){return y.set(P,U)},this.setSize=function(y,I,z=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=y,U=I,t.width=Math.floor(y*V),t.height=Math.floor(I*V),z===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(P*V,U*V).floor()},this.setDrawingBufferSize=function(y,I,z){P=y,U=I,V=z,t.width=Math.floor(y*z),t.height=Math.floor(I*z),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(E)},this.getViewport=function(y){return y.copy(q)},this.setViewport=function(y,I,z,H){y.isVector4?q.set(y.x,y.y,y.z,y.w):q.set(y,I,z,H),ue.viewport(E.copy(q).multiplyScalar(V).floor())},this.getScissor=function(y){return y.copy($)},this.setScissor=function(y,I,z,H){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,I,z,H),ue.scissor(B.copy($).multiplyScalar(V).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){ue.setScissorTest(se=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){G=y},this.getClearColor=function(y){return y.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(y=!0,I=!0,z=!0){let H=0;if(y){let F=!1;if(T!==null){let he=T.texture.format;F=he===Cl||he===Rl||he===Tl}if(F){let he=T.texture.type,xe=he===wn||he===Mn||he===Aa||he===Hn||he===wl||he===Al,Se=Ye.getClearColor(),Ae=Ye.getClearAlpha(),Fe=Se.r,Pe=Se.g,Ie=Se.b;xe?(m[0]=Fe,m[1]=Pe,m[2]=Ie,m[3]=Ae,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=Fe,g[1]=Pe,g[2]=Ie,g[3]=Ae,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}I&&(H|=N.DEPTH_BUFFER_BIT),z&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),be.dispose(),we.dispose(),x.dispose(),O.dispose(),j.dispose(),De.dispose(),Xe.dispose(),_e.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",vt),Oe.removeEventListener("sessionend",Ke),pe&&(pe.dispose(),pe=null),yt.stop()};function ne(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let y=We.autoReset,I=Z.enabled,z=Z.autoUpdate,H=Z.needsUpdate,F=Z.type;it(),We.autoReset=y,Z.enabled=I,Z.autoUpdate=z,Z.needsUpdate=H,Z.type=F}function ae(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function oe(y){let I=y.target;I.removeEventListener("dispose",oe),Ee(I)}function Ee(y){Me(y),we.remove(y)}function Me(y){let I=we.get(y).programs;I!==void 0&&(I.forEach(function(z){_e.releaseProgram(z)}),y.isShaderMaterial&&_e.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,z,H,F,he){I===null&&(I=ye);let xe=F.isMesh&&F.matrixWorld.determinant()<0,Se=xc(y,I,z,H,F);ue.setMaterial(H,xe);let Ae=z.index,Fe=1;if(H.wireframe===!0){if(Ae=K.getWireframeAttribute(z),Ae===void 0)return;Fe=2}let Pe=z.drawRange,Ie=z.attributes.position,rt=Pe.start*Fe,Ct=(Pe.start+Pe.count)*Fe;he!==null&&(rt=Math.max(rt,he.start*Fe),Ct=Math.min(Ct,(he.start+he.count)*Fe)),Ae!==null?(rt=Math.max(rt,0),Ct=Math.min(Ct,Ae.count)):Ie!=null&&(rt=Math.max(rt,0),Ct=Math.min(Ct,Ie.count));let ut=Ct-rt;if(ut<0||ut===1/0)return;De.setup(F,H,Se,z,Ae);let en,tt=Ce;if(Ae!==null&&(en=Q.get(Ae),tt=ve,tt.setIndex(en)),F.isMesh)H.wireframe===!0?(ue.setLineWidth(H.wireframeLinewidth*Ve()),tt.setMode(N.LINES)):tt.setMode(N.TRIANGLES);else if(F.isLine){let Be=H.linewidth;Be===void 0&&(Be=1),ue.setLineWidth(Be*Ve()),F.isLineSegments?tt.setMode(N.LINES):F.isLineLoop?tt.setMode(N.LINE_LOOP):tt.setMode(N.LINE_STRIP)}else F.isPoints?tt.setMode(N.POINTS):F.isSprite&&tt.setMode(N.TRIANGLES);if(F.isBatchedMesh)tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)tt.renderInstances(rt,ut,F.count);else if(z.isInstancedBufferGeometry){let Be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,rr=Math.min(z.instanceCount,Be);tt.renderInstances(rt,ut,rr)}else tt.render(rt,ut)};function Je(y,I,z){y.transparent===!0&&y.side===Wt&&y.forceSinglePass===!1?(y.side=xt,y.needsUpdate=!0,ns(y,I,z),y.side=An,y.needsUpdate=!0,ns(y,I,z),y.side=Wt):ns(y,I,z)}this.compile=function(y,I,z=null){z===null&&(z=y),p=be.get(z),p.init(),b.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),y!==z&&y.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(v._useLegacyLights);let H=new Set;return y.traverse(function(F){let he=F.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){let Se=he[xe];Je(Se,z,F),H.add(Se)}else Je(he,z,F),H.add(he)}),b.pop(),p=null,H},this.compileAsync=function(y,I,z=null){let H=this.compile(y,I,z);return new Promise(F=>{function he(){if(H.forEach(function(xe){we.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){F(y);return}setTimeout(he,10)}te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ze=null;function ht(y){Ze&&Ze(y)}function vt(){yt.stop()}function Ke(){yt.start()}let yt=new Fl;yt.setAnimationLoop(ht),typeof self!="undefined"&&yt.setContext(self),this.setAnimationLoop=function(y){Ze=y,Oe.setAnimationLoop(y),y===null?yt.stop():yt.start()},Oe.addEventListener("sessionstart",vt),Oe.addEventListener("sessionend",Ke),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(I),I=Oe.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,I,T),p=be.get(y,b.length),p.init(),b.push(p),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),k.setFromProjectionMatrix(me),le=this.localClippingEnabled,J=Ne.init(this.clippingPlanes,le),_=de.get(y,u.length),_.init(),u.push(_),Zt(y,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,G),this.info.render.frame++,J===!0&&Ne.beginShadows();let z=p.state.shadowsArray;if(Z.render(z,y,I),J===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,y),p.setupLights(v._useLegacyLights),I.isArrayCamera){let H=I.cameras;for(let F=0,he=H.length;F<he;F++){let xe=H[F];ka(_,y,xe,xe.viewport)}}else ka(_,y,I);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),y.isScene===!0&&y.onAfterRender(v,y,I),De.resetDefaultState(),X=-1,M=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Zt(y,I,z,H){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||k.intersectsSprite(y)){H&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(me);let xe=j.update(y),Se=y.material;Se.visible&&_.push(y,xe,Se,z,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||k.intersectsObject(y))){let xe=j.update(y),Se=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Re.copy(xe.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(me)),Array.isArray(Se)){let Ae=xe.groups;for(let Fe=0,Pe=Ae.length;Fe<Pe;Fe++){let Ie=Ae[Fe],rt=Se[Ie.materialIndex];rt&&rt.visible&&_.push(y,xe,rt,z,Re.z,Ie)}}else Se.visible&&_.push(y,xe,Se,z,Re.z,null)}}let he=y.children;for(let xe=0,Se=he.length;xe<Se;xe++)Zt(he[xe],I,z,H)}function ka(y,I,z,H){let F=y.opaque,he=y.transmissive,xe=y.transparent;p.setupLightsView(z),J===!0&&Ne.setGlobalState(v.clippingPlanes,z),he.length>0&&_c(F,he,I,z),H&&ue.viewport(E.copy(H)),F.length>0&&ts(F,I,z),he.length>0&&ts(he,I,z),xe.length>0&&ts(xe,I,z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function _c(y,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let he=ge.isWebGL2;pe===null&&(pe=new un(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?zi:wn,minFilter:Bi,samples:he?4:0})),v.getDrawingBufferSize(Te),he?pe.setSize(Te.x,Te.y):pe.setSize(Zr(Te.x),Zr(Te.y));let xe=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(ee),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();let Se=v.toneMapping;v.toneMapping=En,ts(y,z,H),S.updateMultisampleRenderTarget(pe),S.updateRenderTargetMipmap(pe);let Ae=!1;for(let Fe=0,Pe=I.length;Fe<Pe;Fe++){let Ie=I[Fe],rt=Ie.object,Ct=Ie.geometry,ut=Ie.material,en=Ie.group;if(ut.side===Wt&&rt.layers.test(H.layers)){let tt=ut.side;ut.side=xt,ut.needsUpdate=!0,Va(rt,z,H,Ct,ut,en),ut.side=tt,ut.needsUpdate=!0,Ae=!0}}Ae===!0&&(S.updateMultisampleRenderTarget(pe),S.updateRenderTargetMipmap(pe)),v.setRenderTarget(xe),v.setClearColor(ee,C),v.toneMapping=Se}function ts(y,I,z){let H=I.isScene===!0?I.overrideMaterial:null;for(let F=0,he=y.length;F<he;F++){let xe=y[F],Se=xe.object,Ae=xe.geometry,Fe=H===null?xe.material:H,Pe=xe.group;Se.layers.test(z.layers)&&Va(Se,I,z,Ae,Fe,Pe)}}function Va(y,I,z,H,F,he){y.onBeforeRender(v,I,z,H,F,he),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(v,I,z,H,y,he),F.transparent===!0&&F.side===Wt&&F.forceSinglePass===!1?(F.side=xt,F.needsUpdate=!0,v.renderBufferDirect(z,I,H,F,y,he),F.side=An,F.needsUpdate=!0,v.renderBufferDirect(z,I,H,F,y,he),F.side=Wt):v.renderBufferDirect(z,I,H,F,y,he),y.onAfterRender(v,I,z,H,F,he)}function ns(y,I,z){I.isScene!==!0&&(I=ye);let H=we.get(y),F=p.state.lights,he=p.state.shadowsArray,xe=F.state.version,Se=_e.getParameters(y,F.state,he,I,z),Ae=_e.getProgramCacheKey(Se),Fe=H.programs;H.environment=y.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(y.isMeshStandardMaterial?O:x).get(y.envMap||H.environment),Fe===void 0&&(y.addEventListener("dispose",oe),Fe=new Map,H.programs=Fe);let Pe=Fe.get(Ae);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===xe)return Wa(y,Se),Pe}else Se.uniforms=_e.getUniforms(y),y.onBuild(z,Se,v),y.onBeforeCompile(Se,v),Pe=_e.acquireProgram(Se,Ae),Fe.set(Ae,Pe),H.uniforms=Se.uniforms;let Ie=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ie.clippingPlanes=Ne.uniform),Wa(y,Se),H.needsLights=yc(y),H.lightsStateVersion=xe,H.needsLights&&(Ie.ambientLightColor.value=F.state.ambient,Ie.lightProbe.value=F.state.probe,Ie.directionalLights.value=F.state.directional,Ie.directionalLightShadows.value=F.state.directionalShadow,Ie.spotLights.value=F.state.spot,Ie.spotLightShadows.value=F.state.spotShadow,Ie.rectAreaLights.value=F.state.rectArea,Ie.ltc_1.value=F.state.rectAreaLTC1,Ie.ltc_2.value=F.state.rectAreaLTC2,Ie.pointLights.value=F.state.point,Ie.pointLightShadows.value=F.state.pointShadow,Ie.hemisphereLights.value=F.state.hemi,Ie.directionalShadowMap.value=F.state.directionalShadowMap,Ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ie.spotShadowMap.value=F.state.spotShadowMap,Ie.spotLightMatrix.value=F.state.spotLightMatrix,Ie.spotLightMap.value=F.state.spotLightMap,Ie.pointShadowMap.value=F.state.pointShadowMap,Ie.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function Ga(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=gi.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Wa(y,I){let z=we.get(y);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function xc(y,I,z,H,F){I.isScene!==!0&&(I=ye),S.resetTextureUnits();let he=I.fog,xe=H.isMeshStandardMaterial?I.environment:null,Se=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:hn,Ae=(H.isMeshStandardMaterial?O:x).get(H.envMap||xe),Fe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!z.morphAttributes.position,rt=!!z.morphAttributes.normal,Ct=!!z.morphAttributes.color,ut=En;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ut=v.toneMapping);let en=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=en!==void 0?en.length:0,Be=we.get(H),rr=p.state.lights;if(J===!0&&(le===!0||y!==M)){let Ut=y===M&&H.id===X;Ne.setState(H,y,Ut)}let st=!1;H.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==rr.state.version||Be.outputColorSpace!==Se||F.isBatchedMesh&&Be.batching===!1||!F.isBatchedMesh&&Be.batching===!0||F.isInstancedMesh&&Be.instancing===!1||!F.isInstancedMesh&&Be.instancing===!0||F.isSkinnedMesh&&Be.skinning===!1||!F.isSkinnedMesh&&Be.skinning===!0||F.isInstancedMesh&&Be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Be.instancingColor===!1&&F.instanceColor!==null||Be.envMap!==Ae||H.fog===!0&&Be.fog!==he||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Ne.numPlanes||Be.numIntersection!==Ne.numIntersection)||Be.vertexAlphas!==Fe||Be.vertexTangents!==Pe||Be.morphTargets!==Ie||Be.morphNormals!==rt||Be.morphColors!==Ct||Be.toneMapping!==ut||ge.isWebGL2===!0&&Be.morphTargetsCount!==tt)&&(st=!0):(st=!0,Be.__version=H.version);let Ln=Be.currentProgram;st===!0&&(Ln=ns(H,I,F));let Xa=!1,Ci=!1,ar=!1,mt=Ln.getUniforms(),In=Be.uniforms;if(ue.useProgram(Ln.program)&&(Xa=!0,Ci=!0,ar=!0),H.id!==X&&(X=H.id,Ci=!0),Xa||M!==y){mt.setValue(N,"projectionMatrix",y.projectionMatrix),mt.setValue(N,"viewMatrix",y.matrixWorldInverse);let Ut=mt.map.cameraPosition;Ut!==void 0&&Ut.setValue(N,Re.setFromMatrixPosition(y.matrixWorld)),ge.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ci=!0,ar=!0)}if(F.isSkinnedMesh){mt.setOptional(N,F,"bindMatrix"),mt.setOptional(N,F,"bindMatrixInverse");let Ut=F.skeleton;Ut&&(ge.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),mt.setValue(N,"boneTexture",Ut.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(mt.setOptional(N,F,"batchingTexture"),mt.setValue(N,"batchingTexture",F._matricesTexture,S));let or=z.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0&&ge.isWebGL2===!0)&&ke.update(F,z,Ln),(Ci||Be.receiveShadow!==F.receiveShadow)&&(Be.receiveShadow=F.receiveShadow,mt.setValue(N,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(In.envMap.value=Ae,In.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Ci&&(mt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&vc(In,ar),he&&H.fog===!0&&ce.refreshFogUniforms(In,he),ce.refreshMaterialUniforms(In,H,V,U,pe),gi.upload(N,Ga(Be),In,S)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gi.upload(N,Ga(Be),In,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(N,"center",F.center),mt.setValue(N,"modelViewMatrix",F.modelViewMatrix),mt.setValue(N,"normalMatrix",F.normalMatrix),mt.setValue(N,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Ut=H.uniformsGroups;for(let lr=0,Mc=Ut.length;lr<Mc;lr++)if(ge.isWebGL2){let qa=Ut[lr];Xe.update(qa,Ln),Xe.bind(qa,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function vc(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function yc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,I,z){we.get(y.texture).__webglTexture=I,we.get(y.depthTexture).__webglTexture=z;let H=we.get(y);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,I){let z=we.get(y);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,z=0){T=y,L=I,A=z;let H=!0,F=null,he=!1,xe=!1;if(y){let Ae=we.get(y);Ae.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):Ae.__webglFramebuffer===void 0?S.setupRenderTarget(y):Ae.__hasExternalTextures&&S.rebindTextures(y,we.get(y.texture).__webglTexture,we.get(y.depthTexture).__webglTexture);let Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);let Pe=we.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?F=Pe[I][z]:F=Pe[I],he=!0):ge.isWebGL2&&y.samples>0&&S.useMultisampledRTT(y)===!1?F=we.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[z]:F=Pe,E.copy(y.viewport),B.copy(y.scissor),Y=y.scissorTest}else E.copy(q).multiplyScalar(V).floor(),B.copy($).multiplyScalar(V).floor(),Y=se;if(ue.bindFramebuffer(N.FRAMEBUFFER,F)&&ge.drawBuffers&&H&&ue.drawBuffers(y,F),ue.viewport(E),ue.scissor(B),ue.setScissorTest(Y),he){let Ae=we.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ae.__webglTexture,z)}else if(xe){let Ae=we.get(y.texture),Fe=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,z||0,Fe)}X=-1},this.readRenderTargetPixels=function(y,I,z,H,F,he,xe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){ue.bindFramebuffer(N.FRAMEBUFFER,Se);try{let Ae=y.texture,Fe=Ae.format,Pe=Ae.type;if(Fe!==qt&&fe.convert(Fe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ie=Pe===zi&&(te.has("EXT_color_buffer_half_float")||ge.isWebGL2&&te.has("EXT_color_buffer_float"));if(Pe!==wn&&fe.convert(Pe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Sn&&(ge.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-H&&z>=0&&z<=y.height-F&&N.readPixels(I,z,H,F,fe.convert(Fe),fe.convert(Pe),he)}finally{let Ae=T!==null?we.get(T).__webglFramebuffer:null;ue.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(y,I,z=0){let H=Math.pow(2,-z),F=Math.floor(I.image.width*H),he=Math.floor(I.image.height*H);S.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,y.x,y.y,F,he),ue.unbindTexture()},this.copyTextureToTexture=function(y,I,z,H=0){let F=I.image.width,he=I.image.height,xe=fe.convert(z.format),Se=fe.convert(z.type);S.setTexture2D(z,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,y.x,y.y,F,he,xe,Se,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,y.x,y.y,I.mipmaps[0].width,I.mipmaps[0].height,xe,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,y.x,y.y,xe,Se,I.image),H===0&&z.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(y,I,z,H,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let he=y.max.x-y.min.x+1,xe=y.max.y-y.min.y+1,Se=y.max.z-y.min.z+1,Ae=fe.convert(H.format),Fe=fe.convert(H.type),Pe;if(H.isData3DTexture)S.setTexture3D(H,0),Pe=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)S.setTexture2DArray(H,0),Pe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let Ie=N.getParameter(N.UNPACK_ROW_LENGTH),rt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ct=N.getParameter(N.UNPACK_SKIP_PIXELS),ut=N.getParameter(N.UNPACK_SKIP_ROWS),en=N.getParameter(N.UNPACK_SKIP_IMAGES),tt=z.isCompressedTexture?z.mipmaps[F]:z.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,tt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,y.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,y.min.z),z.isDataTexture||z.isData3DTexture?N.texSubImage3D(Pe,F,I.x,I.y,I.z,he,xe,Se,Ae,Fe,tt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Pe,F,I.x,I.y,I.z,he,xe,Se,Ae,tt.data)):N.texSubImage3D(Pe,F,I.x,I.y,I.z,he,xe,Se,Ae,Fe,tt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ie),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),N.pixelStorei(N.UNPACK_SKIP_ROWS,ut),N.pixelStorei(N.UNPACK_SKIP_IMAGES,en),F===0&&H.generateMipmaps&&N.generateMipmap(Pe),ue.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,ue.reset(),De.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ra?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nt?Vn:Ll}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vn?nt:hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ua=class extends Xn{};ua.prototype.isWebGL1Renderer=!0;var dn=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Gs=class extends It{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ws=class i extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new D,f=new D,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){let b=[],v=u/n,w=0;u===0&&o===0?w=.5/t:u===n&&l===Math.PI&&(w=-.5/t);for(let L=0;L<=t;L++){let A=L/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+w,1-v),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){let v=h[u][b+1],w=h[u][b],L=h[u+1][b],A=h[u+1][b+1];(u!==0||o>0)&&m.push(v,w,A),(u!==n-1||l<Math.PI)&&m.push(w,L,A)}this.setIndex(m),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fn=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Xs=class extends Cn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new He(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ws(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},da=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ao,endingEnd:Ao}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case To:r=e,a=2*t-n;break;case Ro:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case To:o=e,l=2*n-t;break;case Ro:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,u=-f*p+2*f*_-f*g,b=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-m)*p+(1.5+m)*_+.5*g,w=m*p-m*_;for(let L=0;L!==a;++L)r[L]=u*o[h+L]+b*o[c+L]+v*o[l+L]+w*o[d+L];return r}},fa=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},pa=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new da(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ts:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case mr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return mr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&gm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Jt.prototype.TimeBufferType=Float32Array;Jt.prototype.ValueBufferType=Float32Array;Jt.prototype.DefaultInterpolation=Rs;var qn=class extends Jt{};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Ts;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends Jt{};ma.prototype.ValueTypeName="color";var ga=class extends Jt{};ga.prototype.ValueTypeName="number";var _a=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Wi=class extends Jt{InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName="quaternion";Wi.prototype.DefaultInterpolation=Rs;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yn=class extends Jt{};Yn.prototype.ValueTypeName="string";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=Ts;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Jt{};xa.prototype.ValueTypeName="vector";var gl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},va=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},_m=new va,Xi=class{constructor(e){this.manager=e!==void 0?e:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ya=class extends Xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=gl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Hi("img");function l(){h(),gl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ei=class extends Xi{constructor(e){super(e)}load(e,t,n,s){let r=new It,o=new ya(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},qi=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Hr=new ot,_l=new D,xl=new D,qs=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gi,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xl),t.updateMatrixWorld(),Hr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var vl=new ot,Ni=new D,kr=new D,Ma=class extends qs{constructor(){super(new pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ni.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ni),kr.copy(n.position),kr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kr),n.updateMatrixWorld(),s.makeTranslation(-Ni.x,-Ni.y,-Ni.z),vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl)}},Ys=class extends qi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ma}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Sa=class extends qs{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends qi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Sa}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Js=class extends qi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pa="\\[\\]\\.:\\/",xm=new RegExp("["+Pa+"]","g"),La="[^"+Pa+"]",vm="[^"+Pa.replace("\\.","")+"]",ym=/((?:WC+[\/:])*)/.source.replace("WC",La),Mm=/(WCOD+)?/.source.replace("WCOD",vm),Sm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",La),bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",La),Em=new RegExp("^"+ym+Mm+Sm+bm+"$"),wm=["material","materials","bones","map"],ba=class{constructor(e,t,n){let s=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},je=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xm,"")}static parseTrackName(e){let t=Em.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=ba;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xm=new Float32Array(1);var Yi=class{constructor(e,t,n=0,s=1/0){this.ray=new Fs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Vi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ea(e,this,n,t),n.sort(yl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ea(e[s],this,n,t);return n.sort(yl),n}};function yl(i,e){return i.distance-e.distance}function Ea(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Ea(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var js=class extends dn{constructor(e=null){super();let t=new Dt;t.deleteAttribute("uv");let n=new fn({side:xt}),s=new fn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Ys(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Ge(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Ge(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Ge(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Ge(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Ge(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let f=new Ge(t,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let m=new Ge(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let g=new Ge(t,Ai(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Ge(t,Ai(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let p=new Ge(t,Ai(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let u=new Ge(t,Ai(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let b=new Ge(t,Ai(20));b.position.set(3.235,11.486,-12.541),b.scale.set(2.5,2,.1),this.add(b);let v=new Ge(t,Ai(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ai(i){let e=new Pn;return e.color.setScalar(i),e}var Ji=new D;function Ht(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ji.copy(e),Ji[n]=0,Ji.normalize();let c=.5*o/(o+a),h=1-Ji.angleTo(i)/l;return Math.sign(Ji[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Ti=class extends Dt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new D,l=new D,c=new D(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=h.length/6,g=new D,_=.5/s;for(let p=0,u=0;p<h.length;p+=3,u+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),f[u+0]=Ht(g,l,"z","y",r,n),f[u+1]=1-Ht(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),f[u+0]=1-Ht(g,l,"z","y",r,n),f[u+1]=1-Ht(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),f[u+0]=1-Ht(g,l,"x","z",r,e),f[u+1]=Ht(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[u+0]=1-Ht(g,l,"x","z",r,e),f[u+1]=1-Ht(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[u+0]=1-Ht(g,l,"x","y",r,e),f[u+1]=1-Ht(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),f[u+0]=Ht(g,l,"x","y",r,e),f[u+1]=1-Ht(g,l,"y","x",r,t);break}}};var er="data:image/png;base64,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";var Tm=14,Rm=7;function Gl(i){let e=Math.min(i,4.2);return-.16*Math.sin(Math.PI*e/3)+.04*e/3}function Cm(i,e,t,n,s){let a=[],l=[];for(let h=0;h<=24;h++){let d=h/24,f=-d*i,m=Gl(-f),g=Math.min(1,d*i/Math.max(s,1e-4)),_=-(t+(n-t)*g*g),p=e*(1-.38*d);for(let u=0;u<=12;u++){let b=u/12*Math.PI*2;a.push(m+Math.cos(b)*p,f,_+Math.sin(b)*p)}}for(let h=0;h<24;h++)for(let d=0;d<12;d++){let f=h*13+d,m=f+12+1;l.push(f,m,f+1,m,m+1,f+1)}let c=new Yt;return c.setAttribute("position",new bt(a,3)),c.setIndex(l),c.computeVertexNormals(),c}function Vl(i,e,t,n){let s=Tm,r=Rm,o=[],a=[];for(let c=0;c<=s;c++){let h=c/s,d=e*Math.pow(Math.sin(Math.PI*h),.72),f=-t*h*h;for(let m=0;m<=r;m++){let g=m/r*2-1;o.push(g*d,h*i,f+n*g*g*i)}}for(let c=0;c<s;c++)for(let h=0;h<r;h++){let d=c*(r+1)+h,f=d+r+1;a.push(d,f,d+1,f,f+1,d+1)}let l=new Yt;return l.setAttribute("position",new bt(o,3)),l.setIndex(a),l.computeVertexNormals(),l}var tr;function Da(){if(tr)return tr;let i=new Ei().load(er);return i.colorSpace=nt,tr=new Xs({matcap:i,side:Wt,toneMapped:!1}),tr}function Wl(){let t=Da(),n=new Bt,s=Vl(.78,.78*.186,0,.022),r=Array.from({length:8},(c,h)=>{let d=new Ge(s,t);return d.rotation.order="ZYX",d.rotation.z=h*Math.PI/4,d.rotation.x=.18,n.add(d),d});n.add(new Ge(new Ws(.78*.2,24,16),t));let o=new Ge(Cm(7,.03081,0,.03081*1.6,.78),t),a=Vl(.72,.16,.15,.15),l=[{y:-2.15,angle:1.06,tilt:-.15,scale:1},{y:-2.85,angle:-1,tilt:.26,scale:.83}].map(({y:c,angle:h,tilt:d,scale:f})=>{let m=new Ge(a,t);return m.position.set(Gl(-c),c,-.03081*1.6),m.rotation.set(d,0,h,"ZYX"),m.scale.setScalar(f),m});return{head:n,petals:r,stem:o,leaves:l}}var Xl=()=>{try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}},Ua=(i,e,t)=>(t=Math.min(1,Math.max(0,(t-i)/(e-i))),t*t*(3-2*t)),Zi=(i,e,t)=>i+(e-i)*t;function ql(i){let e=new Xn({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(devicePixelRatio,2)),e.toneMapping=wa,e.toneMappingExposure=1.05,e}function Pm(i){let e=new Si(i),t=e.fromScene(new js,.04).texture;return e.dispose(),t}function Yl(i,e,t){let n=t.clientWidth||innerWidth,s=t.clientHeight||innerHeight;return i.setSize(n,s,!1),e.aspect=n/s,e.updateProjectionMatrix(),n/s}function Lm(i,e,t){let n=document.createElement("div"),s=90;n.className="flower-halo",n.hidden=!0,n.setAttribute("aria-hidden","true"),i.before(n);let r=new Yi,o=new Le,l=document.querySelector(".hero").querySelector(".card"),c=l.querySelector(".ellipse"),h=null;addEventListener("pointermove",m=>{h=m.pointerType==="mouse"?{x:m.clientX,y:m.clientY}:null},{passive:!0}),document.documentElement.addEventListener("pointerleave",()=>{h=null}),addEventListener("blur",()=>{h=null});function d(m,g){let _=l.getBoundingClientRect();if(m<_.left||m>_.right||g<_.top||g>_.bottom)return!0;let p=c.getBoundingClientRect(),b=new DOMMatrixReadOnly(getComputedStyle(c).transform).inverse().transformPoint(new DOMPoint(m-p.left-p.width/2,g-p.top-p.height/2));return(2*b.x/c.offsetWidth)**2+(2*b.y/c.offsetHeight)**2<=1}function f(){n.hidden||(n.hidden=!0)}return m=>{if(!h||m===0)return f();let{x:g,y:_}=h,p=i.getBoundingClientRect();if(o.set((g-p.left)/p.width*2-1,1-(_-p.top)/p.height*2),r.setFromCamera(o,t),!r.intersectObject(e,!0).length||!d(g,_))return f();let u=Math.round(g-s),b=Math.round(_-s);n.style.transform=`translate(${u}px,${b}px)`,n.style.opacity=m,n.hidden=!1}}function $l(i,e){if(!Xl())return null;let t=ql(i),n=new dn,s=new pt(32,1,.1,60);s.position.z=9;let r=new Bt,o=new Bt;n.add(r),r.add(o);let{head:a,petals:l,stem:c,leaves:h}=Wl(),d=e.getContext("2d");a.traverse(C=>C.layers.set(1)),o.add(a,c,...h);let f=Lm(i,o,s),m=document.querySelector(".manifest"),g=matchMedia("(prefers-reduced-motion: reduce)"),_=matchMedia("(max-width:800px), (max-aspect-ratio: 1/1)"),p=[...document.querySelectorAll(".flower-nav a")],u=[[.49,.38],[.43,.43],[.435,.763],[.51,.38],[.57,.42],[.496,.85]],v=document.querySelector(".hero .card").querySelector(".ellipse"),w=()=>{let C=document.querySelector(".hero .card").getBoundingClientRect(),P=p.map(U=>U.getBoundingClientRect());p.forEach((U,V)=>{let[W,G]=u[V],q=P[V],$=C.left+W*C.width-(V<3?q.right:q.left),se=C.top+G*C.height-(q.top+q.height/2);U.style.setProperty("--leader",`${Math.hypot($,se)}px`),U.style.setProperty("--angle",`${Math.atan2(se,$)}rad`)})},L=()=>{let C=Yl(t,s,i);r.scale.setScalar(Math.min(1,C*1.46)),a.scale.setScalar(_.matches?1.64:2.31),e.width=i.width,e.height=i.height,w()};L(),addEventListener("resize",L);let A=0,T=0,X=0,M=0;addEventListener("pointermove",C=>{A=C.clientX/innerWidth*2-1,T=C.clientY/innerHeight*2-1},{passive:!0});let E={y:-3.4,rotation:-.85},B=!1,Y=()=>{B||(B=!0,window.gsap&&!g.matches?gsap.to(E,{y:0,rotation:0,duration:2.6,ease:"power3.out"}):(E.y=0,E.rotation=0))};setTimeout(Y,8e3),i.addEventListener("webglcontextlost",C=>C.preventDefault());let ee=C=>{if(requestAnimationFrame(ee),document.hidden)return;let P=1-m.getBoundingClientRect().top/innerHeight,U=1-Ua(.34,1,P);i.style.opacity=U;let V=!!d&&!_.matches&&P<.4;if(e.hidden=!V,e.style.opacity=U,U===0){f(0);return}let W=g.matches?0:1,G=C/1e3;if(X+=(A-X)*.05,M+=(T-M)*.05,o.position.y=E.y+(_.matches?.32:.61)+W*Ua(0,.88,P)*1.9,o.rotation.y=E.rotation+W*Math.PI*Ua(0,.8,P),l.forEach((q,$)=>{q.rotation.x=.18+W*.1225*Math.sin(G*1.7+$*Math.PI/4)}),a.rotation.set(-.42+W*(Math.sin(G*.6)*.07+M*.08),-.08+W*X*.22,-.05),V){s.layers.set(1),t.render(n,s),d.clearRect(0,0,e.width,e.height),s.layers.set(0),t.render(n,s);let q=i.getBoundingClientRect(),$=v.getBoundingClientRect(),se=e.width/q.width,k=e.height/q.height;d.save(),d.beginPath(),d.ellipse(($.left+$.width/2-q.left)*se,($.top+$.height/2-q.top)*k,v.offsetWidth*se/2,v.offsetHeight*k/2,-12*Math.PI/180,0,Math.PI*2),d.clip(),d.globalCompositeOperation="source-over",d.drawImage(i,0,0),d.restore(),s.layers.set(1),t.render(n,s),d.drawImage(i,0,0)}s.layers.set(0),V||s.layers.enable(1),t.render(n,s),f(U)};return requestAnimationFrame(ee),{intro:Y}}function Jl(i,{onPlay:e}={}){if(!Xl())return null;let t=ql(i),n=new dn;n.environment=Pm(t);let s=new pt(30,1,.1,50),r=new $s(16777215,1.3);r.position.set(3,4,5),n.add(r,new Js(16777215,.35));let o=new fn({color:"#f1d39b",roughness:.55,envMapIntensity:.7}),a=new fn({color:"#D6E3EF",roughness:.6,envMapIntensity:.7}),l=new fn({color:"#141414",roughness:.5}),c=new Bt;n.add(c);let h=(re,te,ge,ue,We)=>{let we=new Ge(re,te);return we.position.set(ge,ue,We),c.add(we),we};h(new Ti(1.7,1.9,.8,5,.1),o,0,0,.45),h(new Ti(1.6,1.82,1,5,.1),a,0,.01,-.35),h(new Ti(1.3,1.05,.12,3,.05),Da(),0,.32,.87),h(new Dt(.62,.05,.03),l,0,-.5,.86),h(new Dt(.14,.05,.03),l,.55,-.5,.86);for(let re=0;re<5;re++)h(new Dt(.014,.03,.52),l,.81,-.3-re*.085,-.35);let d=320,f=240,m=16,g=12,_=20,p=document.createElement("canvas");p.width=d,p.height=f;let u=p.getContext("2d"),b=new Gs(p);b.colorSpace=nt,b.anisotropy=4;let v=h(new Wn(1.14,.855),new Pn({map:b,toneMapped:!1}),0,.32,.935),w="idle",L,A,T,X,M=0,E=0,B=0,Y=!1,ee=()=>{L=[{x:5,y:6},{x:4,y:6},{x:3,y:6}],A=T={x:1,y:0},M=0,C()},C=()=>{do X={x:Math.floor(Math.random()*m),y:Math.floor(Math.random()*g)};while(L.some(re=>re.x===X.x&&re.y===X.y))},P=()=>{A=T;let re={x:L[0].x+A.x,y:L[0].y+A.y};if(re.x<0||re.y<0||re.x>=m||re.y>=g||L.some(te=>te.x===re.x&&te.y===re.y)){w="over",E=Math.max(E,M),i.style.touchAction="pan-y";return}L.unshift(re),re.x===X.x&&re.y===X.y?(M++,C()):L.pop()},U=(re,te,ge,ue,We,we='"Courier New",monospace')=>{u.fillStyle=We,u.font=`bold ${ue}px ${we}`,u.textAlign="center",u.fillText(re,te,ge)},V=()=>{u.fillStyle="#D6E3EF",u.fillRect(0,0,d,f),u.fillStyle="rgba(43,15,36,.07)";for(let re=0;re<m;re++)for(let te=0;te<g;te++)(re+te)%2&&u.fillRect(re*_,te*_,_,_);w==="idle"?(U("\u0417\u041C\u0415\u0419\u041A\u0410",d/2,82,40,"#2b0f24"),U("\u0421\u044B\u0433\u0440\u0430\u0435\u043C?",d/2,120,16,"#2b0f24"),u.fillStyle="#D6AFB2",u.fillRect(d/2-46,142,92,30),U("\u0421\u0422\u0410\u0420\u0422",d/2,163,16,"#2b0f24"),U("\u0441\u0442\u0440\u0435\u043B\u043A\u0438 / WASD",d/2,206,11,"#604452")):(L.forEach((re,te)=>{u.fillStyle=te?"#a64e72":"#2b0f24",u.fillRect(re.x*_+1,re.y*_+1,_-2,_-2)}),u.fillStyle="#f0a23a",u.beginPath(),u.arc(X.x*_+_/2,X.y*_+_/2,7,0,7),u.fill(),u.textAlign="left",u.fillStyle="#2b0f24",u.font='bold 12px "Courier New",monospace',u.fillText("\u0421\u0427\u0401\u0422 "+M,6,14),w==="over"&&(u.fillStyle="rgba(214,227,239,.94)",u.fillRect(0,0,d,f),U("\u0418\u0413\u0420\u0410 \u041E\u041A\u041E\u041D\u0427\u0415\u041D\u0410",d/2,92,30,"#2b0f24"),U("\u0441\u0447\u0451\u0442 "+M+"  \xB7  \u0440\u0435\u043A\u043E\u0440\u0434 "+E,d/2,124,14,"#2b0f24"),u.fillStyle="#D6AFB2",u.fillRect(d/2-56,142,112,30),U("\u0415\u0429\u0401 \u0420\u0410\u0417",d/2,163,16,"#2b0f24"))),b.needsUpdate=!0};ee(),V();let W=()=>{ee(),w="play",B=0,i.style.touchAction="none",e&&e()},G=(re,te)=>{w==="play"&&(re===-A.x&&te===-A.y||(T={x:re,y:te}))};addEventListener("keydown",re=>{if(w!=="play")return;let te=re.key.toLowerCase(),ge={arrowup:[0,-1],w:[0,-1],arrowdown:[0,1],s:[0,1],arrowleft:[-1,0],a:[-1,0],arrowright:[1,0],d:[1,0]}[te];ge?(re.preventDefault(),G(...ge)):te==="escape"&&(w="idle",i.style.touchAction="pan-y")});let q=new Yi,$=new Le,se=re=>{let te=i.getBoundingClientRect();return $.set((re.clientX-te.left)/te.width*2-1,-((re.clientY-te.top)/te.height)*2+1),q.setFromCamera($,s),q.intersectObject(v)[0]},k=null,J=!1;i.addEventListener("pointermove",re=>{J=!!se(re),i.style.cursor=J?"pointer":""}),i.addEventListener("pointerleave",()=>{J=!1}),i.addEventListener("pointerdown",re=>{k={x:re.clientX,y:re.clientY}}),i.addEventListener("pointerup",re=>{if(!k)return;let te=re.clientX-k.x,ge=re.clientY-k.y;if(k=null,w==="play"&&Math.hypot(te,ge)>24){Math.abs(te)>Math.abs(ge)?G(Math.sign(te),0):G(0,Math.sign(ge));return}Math.hypot(te,ge)<12&&w!=="play"&&se(re)&&W()});let le=1,pe=0,me=0,Te=0,Re=0,ye=performance.now(),Ve=()=>{le=Yl(t,s,i),s.position.set(0,.1,le<1?8.5/Math.max(.6,le*1.15):8.5)};Ve(),addEventListener("resize",Ve),addEventListener("pointermove",re=>{Te=re.clientX/innerWidth*2-1,Re=re.clientY/innerHeight*2-1},{passive:!0});let N=re=>{requestAnimationFrame(N);let te=re-ye;if(ye=re,!Y||document.hidden)return;if(w==="play"){for(B+=te;B>230;)B-=230,P();V()}me+=((w==="play"||J?1:0)-me)*.06;let ue=re/1e3,We=pe*pe*(3-2*pe);c.rotation.y=Zi(Zi(-1.05,.5,We)+Te*.12,0,me),c.rotation.x=Zi(Math.sin(pe*Math.PI)*.18-.08+Re*.06,0,me),c.rotation.z=Zi(Math.sin(pe*Math.PI*2)*.05,0,me),c.position.y=Zi(.35,-.25,We)+Math.sin(ue*.9)*.04,t.render(n,s)};return requestAnimationFrame(N),{setProgress:re=>{pe=re},setActive:re=>{Y=re,!re&&w==="play"&&(w="idle",V())}}}var Im=`
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`,Dm=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 uRes;
uniform float uNearX, uFarX, uCirrusX;
uniform float uCoverage, uSize, uSoftness, uShadow, uCirrus;
uniform vec3 uZenith, uHorizon, uCloud;
uniform vec4 uGlow;
uniform vec2 uSun;
uniform vec2 uParallax;

// No sin() in the hash: fract(sin(x) * k) quantizes hard once the argument gets
// large, and the cell ids run far off the origin as the sky drifts.
vec2 hash22(vec2 p){
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy);
}

float hash12(vec2 p){
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float vnoise(vec2 x){
  vec2 i = floor(x), f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm(vec2 p){
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 4; i++){
    s += a * vnoise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return s;
}

// One hashed puff cluster per cell, walked over the neighbourhood so a puff near
// an edge is still drawn by the cell next door. Most cells are empty -- that is
// what leaves real sky between the clouds.
// Returns (coverage, height within the puff). The second component is what shades
// the cloud: -1 at its base, +1 at its crown. Without it the only shading signal
// is "is there cloud above me", which is true almost everywhere inside a puff, so
// the whole body goes grey and only a one-pixel rim stays white.
//
// THE WINDOW is 5x5, not 3x3, with an exact reach test that skips a cell before
// it costs a hash. A 3x3 window only serves puffs up to 1.85 cells wide; past
// that the widest puffs are dropped and their ellipses end on a hard arc. The
// test is |o| <= w + 0.85, so small sizes cost LESS than the old 3x3 (at Size 20
// only the centre cell can reach at all) and only Size 200+ pays for the ring.
//
// THE HEIGHT is a soft-max blend over every puff, not the nearest puff's. Taking
// it from the winner makes it jump the instant two overlapping puffs swap which
// one is nearest -- measured up to 1.43 across a single pixel -- and shadeCloud
// turns that discontinuity into a hard crease straight across the cloud body.
// That is what appears as Size grows: at Size 100 the puffs barely overlap and
// there are none, at 200 there are 458 and at 300 there are 1585.
//
// The soft-max is the ONLINE form, rescaling the running sums whenever a new
// best arrives, so the dominant weight is always exactly 1.0 and the sums stay
// in [1, 25]. The plain exp(K * val) form overflows outright on a mediump
// fragment path, and its smallest weights flush to zero exactly at the cloud
// edge where the height still has to be right.
vec2 blobs(vec2 uv, float seed){
  vec2 id = floor(uv), f = fract(uv);
  // Sentinel stays small: -1e9 is outside mediump's guaranteed range, and val
  // never falls below about -50 here.
  float best = -1e4;
  float wsum = 0.0, ysum = 0.0;
  float wMax = min(${2.15.toFixed(3)}, 0.72 * uSize);
  float reach = min(2.0, ceil(wMax + 0.85) - 1.0);
  for (int j = -2; j <= 2; j++){
    for (int i = -2; i <= 2; i++){
      vec2 o = vec2(float(i), float(j));
      if (max(abs(o.x), abs(o.y)) > reach) continue;
      vec2 h = hash22(id + o + seed);
      // Coverage decides how many cells hold a cloud at all.
      if (fract(h.x * 37.1) > uCoverage) continue;
      vec2 c = o + 0.15 + h * 0.7;
      float w = min(${2.15.toFixed(3)}, (0.30 + 0.42 * fract(h.y * 19.7)) * uSize);
      vec2 d = f - c;
      // Asymmetric about the centre: tall above, short below. That gap is the
      // flat base a cumulus has and a noise field never produces.
      float ry = (d.y > 0.0 ? ${.34.toFixed(3)} : ${.19.toFixed(3)}) * uSize * (0.8 + 0.5 * fract(h.y * 7.3));
      float e = length(vec2(d.x / max(w, 1e-3), d.y / max(ry, 1e-3)));
      float val = 1.0 - e;
      float yN = d.y / max(ry, 1e-3);
      if (val > best){
        float k = exp(${12 .toFixed(1)} * (best - val));
        wsum = wsum * k + 1.0;
        ysum = ysum * k + yN;
        best = val;
      } else {
        float g = exp(${12 .toFixed(1)} * (val - best));
        wsum += g;
        ysum += g * yN;
      }
    }
  }
  return vec2(best, ysum / max(wsum, 1e-4));
}

// Blobs decide WHERE, noise decides the OUTLINE.
vec2 cloudField(vec2 uv, float seed, float detailScale){
  vec2 b = blobs(uv, seed);
  // Two bands: the coarse one dents the silhouette into lobes, the fine one
  // frays it. One band alone gives either a wobbly outline or fuzz, never the
  // feathered edge a cumulus has.
  float n = fbm(uv * detailScale + seed * 3.1) * 0.72
          + fbm(uv * detailScale * 3.3 + seed * 7.7) * 0.28;
  return vec2(b.x - (1.0 - n) * ${.7.toFixed(3)}, b.y);
}

// A cumulus is lit from above: white crown, grey underside tinted toward the sky
// it sits in. dyNorm is the pixel's height within its own puff, so this is the
// puff's own vertical gradient rather than a flat tint.
vec3 shadeCloud(float dyNorm, vec3 sky){
  float t = smoothstep(-0.95, 0.25, dyNorm);
  vec3 base = mix(uCloud * 0.52, sky, 0.34);
  return mix(mix(uCloud, base, uShadow), uCloud, t);
}

void main(){
  vec2 frag = gl_FragCoord.xy / max(uRes.y, 1.0);
  float aspect = uRes.x / max(uRes.y, 1.0);
  vec2 p = vec2(frag.x, frag.y); // y in [0,1], x in [0,aspect]

  // ---- sky ---------------------------------------------------------------
  vec3 sky = mix(uHorizon, uZenith, smoothstep(-0.15, 1.05, p.y));
  vec2 sunP = vec2(uSun.x * aspect, uSun.y);
  float sd = length(p - sunP);
  // One tight term only. A second broad one reads as a lens wash over the whole
  // sky rather than as a sun, and clips the blue to white halfway across.
  sky += uGlow.rgb * uGlow.a * exp(-sd * 3.4) * 0.30;

  vec3 col = sky;
  float alpha = 0.0;

  // ---- cirrus: a thin high veil, no blobs, pure stretched noise ----------
  if (uCirrus > 0.0) {
    vec2 cuv = vec2(p.x * 1.4 + uCirrusX, p.y * 5.5);
    float veil = fbm(cuv) * fbm(cuv * 2.3 + 9.0);
    veil = smoothstep(0.24, 0.55, veil) * smoothstep(0.15, 0.7, p.y);
    alpha = veil * uCirrus * 0.5;
    col = mix(col, uCloud, alpha);
  }

  // ---- far cumulus -------------------------------------------------------
  vec2 fuv = vec2(p.x + uFarX, p.y) * ${2.15.toFixed(3)} + uParallax * 0.4;
  vec2 fd = cloudField(fuv, 17.0, 11.0);
  float fa = clamp(fd.x * uSoftness, 0.0, 1.0);
  if (fa > 0.0) {
    vec3 lit = shadeCloud(fd.y, sky);
    // Aerial perspective is a mix toward the SKY, not a drop in alpha.
    col = mix(col, mix(lit, sky, ${.55.toFixed(3)}), fa);
    alpha = mix(alpha, 1.0, fa);
  }

  // ---- near cumulus ------------------------------------------------------
  vec2 nuv = vec2(p.x + uNearX, p.y) * ${1.05.toFixed(3)} + uParallax;
  vec2 nd = cloudField(nuv, 3.0, 8.5);
  float na = clamp(nd.x * uSoftness, 0.0, 1.0);
  if (na > 0.0) {
    vec3 lit = shadeCloud(nd.y, sky);
    // A second sample one step UP is the inter-cloud shadow: a billow standing
    // over this one dims it beyond its own top-lit gradient.
    float above = clamp(cloudField(nuv + vec2(0.0, ${.085.toFixed(3)}), 3.0, 8.5).x * uSoftness, 0.0, 1.0);
    lit *= 1.0 - 0.18 * uShadow * above;
    // The sun side of a billow picks up the glow.
    lit += uGlow.rgb * uGlow.a * 0.22 * exp(-length(p - sunP) * 1.6);
    col = mix(col, lit, na);
    alpha = mix(alpha, 1.0, na);
  }

  gl_FragColor = vec4(max(vec3(0.0), col - sky * (1.0 - alpha)), alpha);
}
`;function Zl(i,e,t){let n=i.createShader(e);return n?(i.shaderSource(n,t),i.compileShader(n),i.getShaderParameter(n,i.COMPILE_STATUS)?n:(console.error("CloudSky shader:",i.getShaderInfoLog(n)),i.deleteShader(n),null)):null}function Kl(i){let e=i.getContext("webgl",{alpha:!0,antialias:!1,depth:!1});if(!e)return;let t=Zl(e,e.VERTEX_SHADER,Im),n=Zl(e,e.FRAGMENT_SHADER,Dm),s=e.createProgram();if(!t||!n||!s||(e.attachShader(s,t),e.attachShader(s,n),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS)))return;e.useProgram(s),e.deleteShader(t),e.deleteShader(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);let o=e.getAttribLocation(s,"a_pos");e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0);let a=v=>e.getUniformLocation(s,v);e.uniform1f(a("uCoverage"),1),e.uniform1f(a("uSize"),1.3),e.uniform1f(a("uSoftness"),2.25),e.uniform1f(a("uShadow"),.7),e.uniform1f(a("uCirrus"),1),e.uniform2f(a("uSun"),1,1),e.uniform3f(a("uZenith"),0,.46,1),e.uniform3f(a("uHorizon"),.71,.82,.94),e.uniform3f(a("uCloud"),1,1,1),e.uniform4f(a("uGlow"),1,1,1,1);let l=a("uRes"),c=a("uNearX"),h=a("uFarX"),d=a("uCirrusX"),f=matchMedia("(prefers-reduced-motion: reduce)"),m=!0,g=!0,_=0,p=0;new IntersectionObserver(([v])=>{m=v.isIntersecting}).observe(i),new ResizeObserver(()=>{g=!0}).observe(i);let b=v=>{if(requestAnimationFrame(b),!m||document.hidden||e.isContextLost()){_=0;return}if(!(!g&&(f.matches||v-_<33))){if(g){let w=Math.min(1,840/i.clientWidth,520/i.clientHeight);i.width=Math.max(1,Math.round(i.clientWidth*w)),i.height=Math.max(1,Math.round(i.clientHeight*w)),e.viewport(0,0,i.width,i.height),e.uniform2f(l,i.width,i.height),g=!1}_&&!f.matches&&(p+=Math.min(.05,(v-_)/1e3)*1.28),_=v,e.uniform1f(c,-p*.055%1e3),e.uniform1f(h,-p*.026%1e3),e.uniform1f(d,-p*.014%1e3),e.drawArrays(e.TRIANGLES,0,3)}};requestAnimationFrame(b)}var Ql=20,jl=2.4,ec=1.4,mn={top:"#D6E3EF",bottom:"#D6AFB2",sheen:"#F4FFFF",blobs:20,scale:4,viscosity:4,speed:14,glow:20,gloss:20,wander:8,magnet:20,sizePercent:33};function pn(i,e,t,n){let s=typeof i=="number"&&isFinite(i)?i:n;return Math.max(e,Math.min(t,s))}function Na(i){return{blobs:Math.round(pn(i.blobs,1,Ql,mn.blobs)),scale:.12+pn(i.scale,1,20,mn.scale)*.022,viscosity:.05+pn(i.viscosity,1,20,mn.viscosity)*.035,speed:pn(i.speed,0,20,mn.speed)*.075,glow:.3+pn(i.glow,0,20,mn.glow)*.06,gloss:8+pn(i.gloss,1,20,mn.gloss)*5,wander:pn(i.wander,0,20,mn.wander)*.035,magnet:pn(i.magnet,0,20,mn.magnet)*.028,zoom:100/pn(i.sizePercent,20,200,100)}}var Um=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        // Already in clip space; no camera is involved.
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`,Nm=`
    precision highp float;

    // Kept in step with the TypeScript constant, since GLSL loop bounds cannot
    // be uniforms.
    #define MAX_BLOBS ${Ql}

    uniform vec2 uResolution;
    uniform sampler2D uMatcap;
    uniform vec3 uTop;
    uniform vec3 uBottom;
    uniform vec3 uSheen;
    uniform float uTime;
    uniform float uCount;
    uniform float uScale;
    uniform float uViscosity;
    uniform float uGlow;
    uniform float uGloss;
    uniform float uWander;
    uniform float uZoom;
    // Where the cursor is, on the blobs' own plane, and how much pull it has
    // right now \u2014 eased, so this is 0 until the pointer arrives.
    uniform vec2 uPointer;
    uniform float uMagnet;

    varying vec2 vUv;

    /**
     * Smooth minimum \u2014 the whole trick.
     *
     * An ordinary min() of two distance fields gives two spheres with a crease
     * where they cross. This blends the two fields over a radius k, so the
     * surface necks between them and they read as one body of fluid. k is the
     * viscosity control.
     */
    float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
    }

    /** Where blob i is, and how big, at this instant. */
    vec4 blob(int i) {
        float f = float(i);
        // Rates deliberately not in ratio, so the lamp never returns to a
        // configuration it has already been in.
        float rate = 0.5 + fract(f * 0.37) * 0.6;
        float phase = f * 2.399;
        float y = sin(uTime * rate + phase) * 0.62;
        float x = sin(uTime * rate * 0.61 + phase * 1.7) * uWander;
        float z = cos(uTime * rate * 0.43 + phase * 2.3) * uWander;
        // Bigger blobs move slower, the way heavier ones do.
        float r = uScale * (0.75 + fract(f * 0.71) * 0.6);

        /*
         * The cursor's pull, applied to the centre rather than to the surface.
         *
         * Moving centres is all it takes: these are metaballs, so blobs drawn
         * to the same place neck and merge on their own, and the wax reaching
         * for the pointer is the fluid's own behaviour rather than an effect
         * laid over it. Falls off with the square of the distance, so only what
         * is nearby answers and the rest of the lamp carries on.
         */
        vec2 toPointer = uPointer - vec2(x, y);
        float grip = exp(-dot(toPointer, toPointer) * 2.2);
        // Smaller blobs are lighter, so they come further \u2014 the spread in how
        // much each one yields is what stops the group moving as one lump.
        float give = uMagnet * grip * (1.3 - r * 1.4);
        vec2 pulled = vec2(x, y) + toPointer * give;

        return vec4(pulled, z, r);
    }

    /**
     * The distance field: every blob, smoothly unioned.
     *
     * The loop bound has to be a compile-time constant, so it runs to the
     * ceiling and the guard inside skips the blobs that are not in use. Raising
     * the ceiling without raising this bound is a silent cap \u2014 the panel would
     * read 20 and the lamp would still show twelve.
     */
    float map(vec3 p) {
        float d = 1e9;
        for (int i = 0; i < MAX_BLOBS; i++) {
            if (float(i) < uCount) {
                vec4 b = blob(i);
                /*
                 * Squashed vertically by how fast it is travelling: wax pushes
                 * back against the fluid when it turns at the top or bottom of
                 * its run, and a perfect sphere reads as a bubble in a vacuum.
                 */
                float squash = 1.0 + 0.22 * sin(uTime * (0.5 + fract(float(i) * 0.37) * 0.6) + float(i) * 2.399);
                vec3 q = p - b.xyz;
                q.y /= squash;
                d = smin(d, length(q) - b.w, uViscosity);
            }
        }
        return d;
    }

    /** Gradient of the field, which is its normal \u2014 nothing is stored. */
    vec3 normalAt(vec3 p) {
        vec2 e = vec2(0.0015, 0.0);
        return normalize(vec3(
            map(p + e.xyy) - map(p - e.xyy),
            map(p + e.yxy) - map(p - e.yxy),
            map(p + e.yyx) - map(p - e.yyx)
        ));
    }

    void main() {
        // Square-aspect coordinates, so the blobs stay round in any frame.
        vec2 uv = (vUv - 0.5) * uZoom;
        uv.x *= uResolution.x / max(1.0, uResolution.y);

        // Injected from the TypeScript constants, so the pointer projection
        // cannot drift out of step with the rays.
        vec3 ro = vec3(0.0, 0.0, ${jl.toFixed(3)});
        vec3 rd = normalize(vec3(uv, -${ec.toFixed(3)}));

        float t = 0.0;
        float hit = 0.0;
        for (int i = 0; i < 72; i++) {
            vec3 p = ro + rd * t;
            float d = map(p);
            if (d < 0.001) { hit = 1.0; break; }
            /*
             * Short of the full distance on purpose.
             *
             * The pull warps the field, and a warped field is no longer a true
             * distance \u2014 a step measured on it can land past the surface and
             * punch a hole through a blob. Nine tenths costs a few more
             * iterations and removes the risk.
             */
            t += d * 0.9;
            // The blobs live in a small box; anything past it is empty space.
            if (t > 5.0) break;
        }

        if (hit < 0.5) discard;

        vec3 p = ro + rd * t;
        vec3 n = normalAt(p);
        vec3 v = -rd;

        // Use the flower's chrome matcap so both objects reflect the same light.
        vec3 x = normalize(vec3(v.z, 0.0, -v.x));
        vec3 y = cross(v, x);
        vec2 matcapUv = vec2(dot(x, n), dot(y, n)) * 0.495 + 0.5;
        vec3 col = texture2D(uMatcap, matcapUv).rgb;

        gl_FragColor = vec4(col, 1.0);
    }
`,Fa=class{constructor(e,t){dt(this,"container");dt(this,"cfg");dt(this,"renderer");dt(this,"scene",new dn);dt(this,"camera",new Mi);dt(this,"geometry",new Wn(2,2));dt(this,"material");dt(this,"mesh");dt(this,"pointer",new Le(0,0));dt(this,"pointerTarget",new Le(0,0));dt(this,"grip",0);dt(this,"gripTarget",0);dt(this,"time",0);dt(this,"frameId",0);dt(this,"lastT",0);dt(this,"disposed",!1);dt(this,"unbind",()=>{});this.container=e,this.cfg=t;let n=Na(t);this.renderer=new Xn({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1)),this.renderer.outputColorSpace=nt,this.renderer.setClearColor(0,0);let s=this.renderer.domElement;s.style.position="absolute",s.style.inset="0",s.style.width="100%",s.style.height="100%",e.appendChild(s),this.material=new $t({vertexShader:Um,fragmentShader:Nm,uniforms:{uResolution:{value:new Le(1,1)},uMatcap:{value:new Ei().load(er)},uTop:{value:new He(t.top)},uBottom:{value:new He(t.bottom)},uSheen:{value:new He(t.sheen)},uTime:{value:0},uCount:{value:n.blobs},uScale:{value:n.scale},uViscosity:{value:n.viscosity},uGlow:{value:n.glow},uGloss:{value:n.gloss},uWander:{value:n.wander},uZoom:{value:n.zoom},uPointer:{value:new Le(0,0)},uMagnet:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1}),this.mesh=new Ge(this.geometry,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh),this.bindEvents()}toField(e){let n=this.renderer.domElement.getBoundingClientRect();if(n.width<=0||n.height<=0)return null;let s=n.width/n.height,r=Na(this.cfg).zoom,o=(e.clientX-n.left)/n.width,a=1-(e.clientY-n.top)/n.height,l=jl/ec;return new Le((o-.5)*r*s*l,(a-.5)*r*l)}bindEvents(){let e=this.renderer.domElement;e.style.touchAction="none";let t=s=>{let r=this.toField(s);r&&(this.pointerTarget.copy(r),this.gripTarget=1)},n=()=>{this.gripTarget=0};e.addEventListener("pointermove",t),e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",n),e.addEventListener("pointercancel",n),this.unbind=()=>{e.removeEventListener("pointermove",t),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",n),e.removeEventListener("pointercancel",n)}}start(){this.lastT=performance.now();let e=()=>{this.frameId=requestAnimationFrame(e),this.step()};e()}setSize(e,t){this.disposed||e<=0||t<=0||(this.renderer.setSize(e,t,!1),this.material.uniforms.uResolution.value.set(e,t))}step(){if(this.disposed)return;let e=performance.now(),t=(e-this.lastT)/1e3;this.lastT=e,(!isFinite(t)||t<0)&&(t=0),t>.05&&(t=.05);let n=Na(this.cfg);this.time+=t*n.speed,this.grip+=(this.gripTarget-this.grip)*(1-Math.exp(-t*4)),this.pointer.lerp(this.pointerTarget,1-Math.exp(-t*9));let s=this.material.uniforms;s.uTime.value=this.time,s.uPointer.value.copy(this.pointer),s.uMagnet.value=n.magnet*this.grip,this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,cancelAnimationFrame(this.frameId),this.unbind(),this.geometry.dispose(),this.material.uniforms.uMatcap.value.dispose(),this.material.dispose(),this.renderer.dispose();let e=this.renderer.domElement;e.parentNode===this.container&&this.container.removeChild(e)}};function tc(i){let e;try{e=new Fa(i,mn)}catch{return()=>{}}let t=()=>e.setSize(i.clientWidth,i.clientHeight);t(),e.start();let n=new ResizeObserver(t);return n.observe(i),()=>{n.disconnect(),e.dispose()}}var nc=[[48,[60,64,67,71],[76,79,74]],[45,[60,64,67,71],[72,76,79]],[41,[60,64,65,69],[77,76,72]],[43,[59,62,65,69],[74,71,69]],[48,[60,64,67,71],[76,79,83]],[40,[59,62,64,67],[79,76,74]],[41,[60,64,65,69],[72,77,76]],[43,[59,62,65,69],[74,72,71]]];function Fm(i){let s=i.createBuffer(1,66150*nc.length,22050),r=s.getChannelData(0);function o(a,l,c,h){let d=440*2**((a-69)/12),f=Math.round(l*22050);for(let m=0;m<c*22050;m++){let g=m/22050,_=2*Math.PI*d*g,p=Math.min(1,g/.025)*Math.exp(-2.5*g/c)*Math.min(1,(c-g)/.19);r[(f+m)%r.length]+=h*p*(Math.sin(_)+.23*Math.sin(2*_))}}return nc.forEach(([a,l,c],h)=>{let d=h*3;o(a,d,2.4,.11),l.forEach((f,m)=>o(f,d+m*.75*.5,1.8,.065)),c.forEach((f,m)=>o(f,d+[.5,1.75,3][m]*.75,1.15,.075))}),s}function ic(i){let e=window.AudioContext||window.webkitAudioContext;if(!e){i.forEach(a=>a.hidden=!0);return}let t,n,s=!1,r=!1;async function o(){if(!s){s=!0;try{if(t!=null||(t=new e),r)await t.suspend();else if(await t.resume(),!n){n=t.createBufferSource(),n.buffer=Fm(t),n.loop=!0;let a=t.createGain();a.gain.value=.21,n.connect(a).connect(t.destination),n.start()}r=!r,i.forEach(a=>a.setAttribute("aria-pressed",String(r)))}catch(a){console.debug("Background music unavailable",a)}finally{s=!1}}}i.forEach(a=>a.addEventListener("click",o))}function sc(i,e){if(!i||typeof(e==null?void 0:e.showModal)!="function")return;let t=e.querySelector("canvas"),n=t.getContext("2d");if(!n)return;let s=e.querySelector(".snake-mobile__action"),r=e.querySelector(".snake-mobile__status"),o=e.querySelector("[data-snake-score]"),a=e.querySelector("[data-snake-best]"),l=[...e.querySelectorAll("[data-direction]")],c={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},h=matchMedia("(max-width: 800px), (pointer: coarse) and (hover: none)"),d=16,f=12,m=t.width/d,g="\u0421\u043C\u0430\u0445\u0438\u0432\u0430\u0439\u0442\u0435 \u043F\u043E \u043F\u043E\u043B\u044E \u0438\u043B\u0438 \u043D\u0430\u0436\u0438\u043C\u0430\u0439\u0442\u0435 \u0441\u0442\u0440\u0435\u043B\u043A\u0438",_,p,u,b,v,w,L="idle",A=0,T=0;function X(){let P=[];for(let U=0;U<f;U++)for(let V=0;V<d;V++)_.some(([W,G])=>W===V&&G===U)||P.push([V,U]);return P[Math.floor(Math.random()*P.length)]}function M(){_=[[5,6],[4,6],[3,6]],p=c.right,u=null,A=0,b=X(),E()}function E(){n.fillStyle="#d6e3ef",n.fillRect(0,0,t.width,t.height),n.fillStyle="#c8d5e0";for(let P=0;P<f;P++)for(let U=(P+1)%2;U<d;U+=2)n.fillRect(U*m,P*m,m,m);_.forEach(([P,U],V)=>{n.fillStyle=V===0?"#2b0f24":"#a64e72",n.fillRect(P*m+1,U*m+1,m-2,m-2)}),b&&(n.fillStyle="#ad4b14",n.beginPath(),n.arc((b[0]+.5)*m,(b[1]+.5)*m,m*.32,0,2*Math.PI),n.fill()),o.textContent=A,a.textContent=T}function B(P,U=g){clearInterval(v),v=null,L=P,r.textContent=U,s.textContent={idle:"\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443",playing:"\u041F\u0430\u0443\u0437\u0430",paused:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",over:"\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437"}[L],l.forEach(V=>{V.disabled=L!=="playing"}),L==="playing"&&(v=setInterval(Y,260))}function Y(){u&&(p=u),u=null;let P=_[0][0]+p[0],U=_[0][1]+p[1],V=b&&P===b[0]&&U===b[1],W=V?_:_.slice(0,-1);if(P<0||P>=d||U<0||U>=f||W.some(([G,q])=>G===P&&q===U)){B("over","\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430. \u0421\u0447\u0451\u0442: "+A);return}_.unshift([P,U]),V?(T=Math.max(T,++A),b=X(),b||B("over","\u041F\u043E\u0431\u0435\u0434\u0430! \u0421\u0447\u0451\u0442: "+A)):_.pop(),E()}function ee(P){if(L!=="playing"||u||!P||P===p)return;let[U,V]=P;(U!==-p[0]||V!==-p[1])&&(u=P)}i.addEventListener("click",()=>{!h.matches||e.open||(M(),B("idle"),e.showModal(),document.documentElement.classList.add("snake-mobile-open"))}),e.addEventListener("close",()=>{B("idle"),w=null,document.documentElement.classList.remove("snake-mobile-open")}),s.addEventListener("click",()=>{L==="playing"?B("paused","\u041F\u0430\u0443\u0437\u0430"):(L!=="paused"&&M(),B("playing"))}),l.forEach(P=>P.addEventListener("click",()=>ee(c[P.dataset.direction]))),e.addEventListener("keydown",P=>{if(L!=="playing"||!P.key.startsWith("Arrow"))return;let U=c[P.key.slice(5).toLowerCase()];U&&(P.preventDefault(),ee(U))}),t.addEventListener("pointerdown",P=>{L!=="playing"||!P.isPrimary||P.button!==0||(w={id:P.pointerId,x:P.clientX,y:P.clientY},t.setPointerCapture(P.pointerId))});function C(P){if((w==null?void 0:w.id)!==P.pointerId)return;let U=P.clientX-w.x,V=P.clientY-w.y;Math.max(Math.abs(U),Math.abs(V))<14||(w=null,ee(Math.abs(U)>Math.abs(V)?c[U>0?"right":"left"]:c[V>0?"down":"up"]))}t.addEventListener("pointermove",C),t.addEventListener("pointerup",P=>{C(P),(w==null?void 0:w.id)===P.pointerId&&(w=null)}),t.addEventListener("lostpointercapture",P=>{(w==null?void 0:w.id)===P.pointerId&&(w=null)}),document.addEventListener("visibilitychange",()=>{document.hidden&&L==="playing"&&B("paused","\u041F\u0430\u0443\u0437\u0430")}),h.addEventListener("change",()=>{!h.matches&&e.open&&e.close()}),i.hidden=!1,i.parentElement.classList.add("snake-mobile-ready")}var qe=(i,e=document)=>e.querySelector(i),Tt=(i,e=document)=>[...e.querySelectorAll(i)];ic(Tt(".sound-toggle"));var Qt;qe(".hero-barcode").addEventListener("click",async()=>{let i=window.AudioContext||window.webkitAudioContext;if(i)try{Qt!=null||(Qt=new i),Qt.state==="suspended"&&await Qt.resume();let e=Qt.currentTime,t=Qt.createOscillator(),n=Qt.createGain();t.frequency.value=2300,n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.1,e+.008),n.gain.exponentialRampToValueAtTime(.001,e+.115),t.connect(n).connect(Qt.destination),t.start(e),t.stop(e+.12)}catch(e){console.debug("Barcode sound unavailable",e)}});var ji=matchMedia("(prefers-reduced-motion: reduce)").matches,fc=matchMedia("(hover:hover)").matches,Om=0;Tt(".lead-wrap .lead-img").forEach(i=>{let e=qe("img",i);i.classList.add("is-draggable");let t=0,n=0,s=null;i.addEventListener("pointerdown",o=>{if(!o.isPrimary||o.button!==0)return;o.preventDefault();let{clientX:a,clientY:l,pointerId:c,timeStamp:h}=o,d=i.getBoundingClientRect();e.style.transformOrigin=`${a-d.left}px ${l-d.top}px`,s={pointerId:c,startX:a-t,startY:l-n,lastX:a,lastY:l,timeStamp:h},i.setPointerCapture(c),i.style.zIndex=++Om,i.classList.add("is-dragging"),ji||(e.style.transform="scale(1.06)")}),i.addEventListener("pointermove",o=>{if((s==null?void 0:s.pointerId)!==o.pointerId)return;let{clientX:a,clientY:l,timeStamp:c}=o;t=a-s.startX,n=l-s.startY,i.style.translate=`${t}px ${n}px`;let h=Math.max(8,c-s.timeStamp),d=f=>Math.max(-22,Math.min(22,f*16/h));ji||(e.style.transform=`rotateX(${-d(l-s.lastY)}deg) rotateY(${d(a-s.lastX)}deg) scale(1.06)`),Object.assign(s,{lastX:a,lastY:l,timeStamp:c})});let r=o=>{(s==null?void 0:s.pointerId)===o.pointerId&&(s=null,i.classList.remove("is-dragging"),e.style.transform="")};["pointerup","pointercancel","lostpointercapture"].forEach(o=>i.addEventListener(o,r))});gsap.registerPlugin(ScrollTrigger);document.documentElement.classList.add("js");var Rt=null;ji||(Rt=new Lenis({lerp:.1}),Rt.on("scroll",ScrollTrigger.update),gsap.ticker.add(i=>Rt.raf(i*1e3)),gsap.ticker.lagSmoothing(0),Rt.stop());var Bm=i=>{var e;return Rt?Rt.scrollTo(i,{duration:1.5}):(e=qe(i))==null?void 0:e.scrollIntoView({behavior:"instant"})};function rc(i){let e=i.textContent;return i.setAttribute("aria-label",e),i.textContent="",[...e].map(t=>{let n=document.createElement("span");return n.className="ch",n.setAttribute("aria-hidden","true"),n.textContent=t===" "?"\xA0":t,i.append(n),n})}function ac(i){let e=document.createDocumentFragment(),t=(n,s)=>{if(n.nodeName==="BR"){e.append(n.cloneNode());return}if(n.nodeType!==Node.TEXT_NODE){n.childNodes.forEach(r=>t(r,n.tagName==="B"?"hl":s));return}for(let r of n.textContent.split(/[ \t\n\r\f]+/).filter(Boolean)){let o=document.createElement("span");o.className=s?"w "+s:"w",o.textContent=r,e.append(o," ")}};return i.childNodes.forEach(n=>t(n,"")),i.replaceChildren(e),Tt(".w",i)}Tt('a[href^="#"]').forEach(i=>i.addEventListener("click",e=>{e.preventDefault(),Bm(i.getAttribute("href"))}));var zm=qe(".hero"),oc=qe(".flower-nav"),Ki=qe("#siteMenu"),$n=qe(".site-menu__toggle"),es=qe("#siteMenuPanel"),Hm=Tt('main > [data-menu-theme="light"]'),lc=window.scrollY;function ir(){es.hidden=!0,$n.setAttribute("aria-expanded","false"),$n.setAttribute("aria-label","\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E")}function za(){let i=zm.getBoundingClientRect(),e=window.scrollY<lc;i.top>=-20||e&&i.bottom>0?oc.classList.remove("is-scrolled"):i.top<-20&&oc.classList.add("is-scrolled"),lc=window.scrollY;let t=i.bottom<=0;if(!t&&!Ki.hidden&&ir(),Ki.hidden===t&&(Ki.hidden=!t),t){let{top:n,height:s}=$n.getBoundingClientRect(),r=n+s/2;Ki.classList.toggle("is-on-light",Hm.some(o=>{let a=o.getBoundingClientRect();return a.top<=r&&r<a.bottom}))}}$n.addEventListener("click",()=>{let i=es.hidden;es.hidden=!i,$n.setAttribute("aria-expanded",String(i)),$n.setAttribute("aria-label",i?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E")});es.addEventListener("click",i=>{i.target.closest("a")&&ir()});document.addEventListener("click",i=>{Ki.contains(i.target)||ir()});document.addEventListener("keydown",i=>{i.key==="Escape"&&!es.hidden&&(ir(),$n.focus())});addEventListener("scroll",za,{passive:!0});addEventListener("resize",za);za();if(fc){let i=qe("#cross"),e=qe(".gx"),t=qe(".gy"),n=innerWidth/2,s=innerHeight/2,r=n,o=s;addEventListener("pointermove",a=>{var l,c;n=a.clientX,s=a.clientY,i.classList.toggle("hot",!!((c=(l=a.target).closest)!=null&&c.call(l,"a,button,.proj,#pc")))},{passive:!0}),gsap.ticker.add(()=>{r+=(n-r)*.16,o+=(s-o)*.16,i.style.transform=`translate(${r}px,${o}px)`,e.style.transform=`translateY(${o}px)`,t.style.transform=`translateX(${r}px)`})}var km=qe("#pbar");ScrollTrigger.create({start:0,end:"max",onUpdate:i=>{km.style.transform=`scaleX(${i.progress})`}});var Ri=$l(qe("#flowers"),qe("#flowerFront")),pc=qe(".mini-marq"),Ba=qe(".mini-marq-track"),nr=Ba.firstElementChild;function Ha(){let i=Math.ceil(pc.clientWidth/nr.getBoundingClientRect().width)+1;if(!Number.isFinite(i)||Ba.children.length===i*2)return;let e=Array.from({length:i*2-1},()=>nr.cloneNode(!0));Ba.replaceChildren(nr,...e)}Ha();new ResizeObserver(Ha).observe(nr);new ResizeObserver(Ha).observe(pc);Kl(qe("#cloudSky"));var mc=qe("#warpG");for(let i=0;i<9;i++){let e="";for(let t=0;t<=600;t+=20)e+=(t?"L":"M")+t+" "+(30+i*42+Math.sin(t/85+i*.55)*20);mc.insertAdjacentHTML("beforeend",`<path d="${e}"/>`)}for(let i=0;i<15;i++){let e="";for(let t=0;t<=400;t+=20)e+=(t?"L":"M")+(i*43+Math.sin(t/70+i*.7)*16)+" "+t;mc.insertAdjacentHTML("beforeend",`<path d="${e}"/>`)}var gc=qe("#pcHint"),jt=Jl(qe("#pc"),{onPlay:()=>{gc.style.opacity=0}});jt||(gc.textContent="\u042D\u0442\u043E\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 WebGL");sc(qe("#snakeMobileLaunch"),qe("#snakeMobile"));function Vm(){if(ji){Tt(".lead").forEach(ac),ScrollTrigger.create({trigger:"#retro",start:"top bottom",end:"bottom top",onToggle:i=>jt==null?void 0:jt.setActive(i.isActive)});return}if(Tt(".mani .mt").forEach(i=>{let e=rc(i);gsap.from(e,{yPercent:120,rotate:7,opacity:0,duration:1.15,ease:"power4.out",stagger:{each:.04,from:"start"},scrollTrigger:{trigger:i,start:"top 92%",toggleActions:"play none none reverse"}})}),Tt(".ml .sc").forEach(i=>{gsap.fromTo(i,{clipPath:"inset(-70% 100% -70% -15%)"},{clipPath:"inset(-70% -15% -70% -15%)",duration:1.6,ease:"power2.inOut",delay:.35,scrollTrigger:{trigger:i.parentElement,start:"top 82%",toggleActions:"play none none reverse"}})}),Tt(".lead").forEach(i=>{let e=ac(i);gsap.from(e,{opacity:.12,stagger:.06,ease:"none",scrollTrigger:{trigger:i,start:"top 82%",end:"bottom 50%",scrub:!0}})}),gsap.to(".ghost-marq",{xPercent:-12,ease:"none",scrollTrigger:{trigger:".about-intro",start:"top bottom",end:"bottom top",scrub:!0}}),gsap.fromTo(".lead-img",{clipPath:"inset(100% 0 0 0)",scale:1.3},{clipPath:"inset(0% 0 0 0)",scale:1,duration:1.4,ease:"power4.out",scrollTrigger:{trigger:".lead-img",start:"top 85%",toggleActions:"play none none reverse"}}),Tt(".proj").forEach(i=>{let e=qe(".pframe",i),t=qe(".pframe:not(.pframe--full-bleed) img",i);if(gsap.set(e,{transformPerspective:1500}),gsap.timeline({scrollTrigger:{trigger:i,start:"top bottom",end:"bottom top",scrub:!0}}).fromTo(e,{rotationX:62,scale:.86,y:60},{rotationX:0,scale:1,y:0,ease:"none",duration:1}).to(e,{rotationX:-62,scale:.86,y:-60,ease:"none",duration:1},">0.1"),t&&gsap.fromTo(t,{yPercent:-4},{yPercent:4,ease:"none",scrollTrigger:{trigger:i,start:"top bottom",end:"bottom top",scrub:!0}}),fc){let n=gsap.quickTo(e,"rotationY",{duration:.8,ease:"power3"}),s=t?gsap.quickTo(t,"x",{duration:.9,ease:"power3"}):null;i.addEventListener("pointermove",r=>{let o=i.getBoundingClientRect(),a=(r.clientX-o.left)/o.width-.5;n(a*10),s==null||s(a*-24)}),i.addEventListener("pointerleave",()=>{n(0),s==null||s(0)})}}),gsap.fromTo(".feat em",{y:60,opacity:0},{y:0,opacity:1,stagger:.15,scrollTrigger:{trigger:".feat",start:"top 88%",end:"top 55%",scrub:!0}}),gsap.fromTo(".ghost span",{yPercent:20},{yPercent:-20,ease:"none",stagger:.05,scrollTrigger:{trigger:".works",start:"top bottom",end:"bottom top",scrub:!0}}),Tt(".svc-words p").forEach(i=>{let e=Tt("span",i).flatMap(rc);gsap.from(e,{yPercent:110,opacity:0,duration:1,ease:"power4.out",stagger:.03,scrollTrigger:{trigger:i,start:"top 92%",toggleActions:"play none none reverse"}}),gsap.fromTo(qe(".th",i),{y:40,scale:.6,opacity:0},{y:-30,scale:1,opacity:1,ease:"none",scrollTrigger:{trigger:i,start:"top 90%",end:"bottom 30%",scrub:!0}})}),ScrollTrigger.create({trigger:"#retro",start:"top bottom",end:"bottom top",onToggle:i=>jt==null?void 0:jt.setActive(i.isActive)}),ScrollTrigger.create({trigger:"#retro",start:"top top",end:"bottom bottom",scrub:!0,onUpdate:i=>jt==null?void 0:jt.setProgress(i.progress)}),gsap.fromTo(".warp",{yPercent:-10,skewX:-6},{yPercent:10,skewX:6,ease:"none",scrollTrigger:{trigger:"#retro",start:"top bottom",end:"bottom top",scrub:!0}}),Rt){let i=[".mani",".svc-words",".feat"].map(t=>gsap.quickTo(t,"skewY",{duration:.7,ease:"power3"})),e=()=>[...Tt(".mq-in"),...Tt(".ghost-marq div")].flatMap(t=>t.getAnimations());Rt.on("scroll",({velocity:t})=>{let n=gsap.utils.clamp(-5,5,t*.14);i.forEach(r=>r(n));let s=1+Math.min(Math.abs(t)*.35,7);e().forEach(r=>{r.playbackRate=s})})}}var Qi=qe("#loader"),Gm=qe("#ldNum"),cc=qe("#loaderProgress"),sr=ji;sr||gsap.set(".flower-nav a",{opacity:0});var Oa=sr?null:tc(qe(".lava-lamp",Qi)),hc=!1;function uc(){if(hc)return;if(hc=!0,Vm(),sr){Qi.remove(),Ri==null||Ri.intro(),Rt==null||Rt.start();return}gsap.timeline({defaults:{ease:"power4.out"}}).to(".ld-bot",{opacity:0,y:-30,duration:.5,ease:"power2.in"}).to(Qi,{clipPath:"inset(0 0 100% 0)",duration:1.1,ease:"power4.inOut",onComplete:()=>{Oa==null||Oa(),Qi.remove()}},">-0.1").from(".hero .card",{clipPath:"inset(46% 46% 46% 46%)",duration:1.5,ease:"expo.out"},"<0.35").from(".info > *",{opacity:0,y:20,stagger:.12,duration:1},"<0.6").from(".hero-line,.scroll-hint,.mini-marq",{opacity:0,y:16,stagger:.08,duration:.9},"<0.2").add(()=>{Ri==null||Ri.intro(),Rt==null||Rt.start()},"<0.1").to(".flower-nav a",{opacity:1,stagger:.1,duration:.3},"+=1.3")}var dc;if(sr)uc();else{document.documentElement.classList.add("is-loading");let i={v:0},e=()=>{Gm.textContent=String(Math.round(i.v)).padStart(3,"0");let s=Qi.clientHeight-cc.offsetHeight;cc.style.transform=`translateY(${-s*i.v/100}px)`};gsap.to(i,{v:88,duration:1.8,ease:"power2.out",onUpdate:e});let t=Promise.all([new Promise(s=>document.readyState==="complete"?s():addEventListener("load",s,{once:!0})),((dc=document.fonts)==null?void 0:dc.ready)||Promise.resolve(),new Promise(s=>setTimeout(s,1300))]),n=()=>{gsap.killTweensOf(i),gsap.to(i,{v:100,duration:.4,ease:"none",onUpdate:e,onComplete:()=>{document.documentElement.classList.remove("is-loading"),uc()}})};t.then(n),setTimeout(n,6e3)}addEventListener("load",()=>ScrollTrigger.refresh());})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
