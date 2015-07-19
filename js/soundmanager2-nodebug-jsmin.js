/** @license

 SoundManager 2: JavaScript Sound for the Web
 ----------------------------------------------
 http://schillmania.com/projects/soundmanager2/

 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt

 V2.97a.20110801
*/(function(a){function b(b,c){function d(a){return function(b){return!this._t||!this._t._a?null:a.call(this,b)}}this.flashVersion=8,this.debugFlash=this.debugMode=!1,this.useConsole=!0,this.waitForWindowLoad=this.consoleOnly=!1,this.nullURL="about:blank",this.allowPolling=!0,this.useFastPolling=!1,this.useMovieStar=!0,this.bgColor="#ffffff",this.useHighPerformance=!1,this.flashPollingInterval=null,this.flashLoadTimeout=1e3,this.wmode=null,this.allowScriptAccess="always",this.useFlashBlock=!1,this.useHTML5Audio=!0,this.html5Test=/^(probably|maybe)$/i,this.preferFlash=!0,this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}},this.defaultOptions={autoLoad:!1,stream:!0,autoPlay:!1,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onstop:null,onfailure:null,onfinish:null,onbeforefinish:null,onbeforefinishtime:5e3,onbeforefinishcomplete:null,onjustbeforefinish:null,onjustbeforefinishtime:200,multiShot:!0,multiShotEvents:!1,position:null,pan:0,type:null,usePolicyFile:!1,volume:100},this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null},this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null},this.version=null,this.versionNumber="V2.97a.20110801",this.movieURL=null,this.url=b||null,this.altURL=null,this.enabled=this.swfLoaded=!1,this.o=null,this.movieID="sm2-container",this.id=c||"sm2movie",this.swfCSS={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"},this.oMC=null,this.sounds={},this.soundIDs=[],this.muted=!1,this.debugID="soundmanager-debug",this.debugURLParam=/([#?&])debug=1/i,this.didFlashBlock=this.specialWmodeCase=!1,this.filePattern=null,this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i},this.baseMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,this.netStreamMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i,this.netStreamTypes=["aac","flv","mov","mp4","m4v","f4v","m4a","mp4v","3gp","3g2"],this.netStreamPattern=RegExp("\\.("+this.netStreamTypes.join("|")+")(\\?.*)?$","i"),this.mimePattern=this.baseMimeTypes,this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1},this.sandbox={},this.hasHTML5=typeof Audio!="undefined"&&typeof (new Audio).canPlayType!="undefined",this.html5={usingFlash:null},this.flash={},this.ignoreFlash=this.html5Only=!1;var e,f=this,g,h=navigator.userAgent,i=a,j=i.location.href.toString(),k=this.flashVersion,l=document,m,n,o=[],p=!1,q=!1,r=!1,s=!1,t=!1,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=null,P=null,Q,R,S,T,U,V,W,X=!1,Y=!1,$,_,ba=null,bb,bc,bd,be,bf,bg,bh,bi=Array.prototype.slice,bj=!1,bk,bl,bm,bn,bo,bp=h.match(/(ipad|iphone|ipod)/i),bq=h.match(/(mobile|pre\/|xoom)/i)||bp,br=h.match(/msie/i),bs=h.match(/webkit/i),bt=h.match(/safari/i)&&!h.match(/chrome/i),bu=h.match(/opera/i),bv=!j.match(/usehtml5audio/i)&&!j.match(/sm2\-ignorebadua/i)&&bt&&h.match(/OS X 10_6_([3-7])/i),bw=typeof l.hasFocus!="undefined"?l.hasFocus():null,bx=bt&&typeof l.hasFocus=="undefined",by=!bx,bz=/(mp3|mp4|mpa)/i,bA=l.location?l.location.protocol.match(/http/i):null,bB=bA?"":"http:";this.useAltURL=!bA,this._global_a=null,bq&&(f.useHTML5Audio=!0,f.preferFlash=!1,bp)&&(bj=f.ignoreFlash=!0),this.supported=this.ok=function(){return ba?r&&!s:f.useHTML5Audio&&f.hasHTML5},this.getMovie=function(a){return br?i[a]:bt?g(a)||l[a]:g(a)},this.createSound=function(a){function b(){c=T(c),f.sounds[g.id]=new e(g),f.soundIDs.push(g.id);return f.sounds[g.id]}var c=null,d=null,g=null;if(!r||!f.ok())return V("soundManager.createSound(): "+Q(r?"notOK":"notReady")),!1;arguments.length===2&&(a={id:arguments[0],url:arguments[1]}),g=c=v(a);if(W(g.id,!0))return f.sounds[g.id];if(bc(g))d=b(),d._setup_html5(g);else{k>8&&f.useMovieStar&&(g.isMovieStar===null&&(g.isMovieStar=g.serverURL||g.type&&g.type.match(f.netStreamPattern)||g.url.match(f.netStreamPattern)?!0:!1),g.isMovieStar&&g.usePeakData&&(g.usePeakData=!1)),g=U(g,"soundManager.createSound(): "),d=b();if(k===8)f.o._createSound(g.id,g.onjustbeforefinishtime,g.loops||1,g.usePolicyFile);else if(f.o._createSound(g.id,g.url,g.onjustbeforefinishtime,g.usePeakData,g.useWaveformData,g.useEQData,g.isMovieStar,g.isMovieStar?g.bufferTime:!1,g.loops||1,g.serverURL,g.duration||null,g.autoPlay,!0,g.autoLoad,g.usePolicyFile),!g.serverURL)d.connected=!0,g.onconnect&&g.onconnect.apply(d);!g.serverURL&&(g.autoLoad||g.autoPlay)&&d.load(g)}!g.serverURL&&g.autoPlay&&d.play();return d},this.destroySound=function(a,b){if(!W(a))return!1;var c=f.sounds[a],d;c._iO={},c.stop(),c.unload();for(d=0;d<f.soundIDs.length;d++)if(f.soundIDs[d]===a){f.soundIDs.splice(d,1);break}b||c.destruct(!0),delete f.sounds[a];return!0},this.load=function(a,b){return W(a)?f.sounds[a].load(b):!1},this.unload=function(a){return W(a)?f.sounds[a].unload():!1},this.start=this.play=function(a,b){return!r||!f.ok()?(V("soundManager.play(): "+Q(r?"notOK":"notReady")),!1):W(a)?f.sounds[a].play(b):(b instanceof Object||(b={url:b}),b&&b.url?(b.id=a,f.createSound(b).play()):!1)},this.setPosition=function(a,b){return W(a)?f.sounds[a].setPosition(b):!1},this.stop=function(a){return W(a)?f.sounds[a].stop():!1},this.stopAll=function(){for(var a in f.sounds)f.sounds.hasOwnProperty(a)&&f.sounds[a].stop()},this.pause=function(a){return W(a)?f.sounds[a].pause():!1},this.pauseAll=function(){var a;for(a=f.soundIDs.length;a--;)f.sounds[f.soundIDs[a]].pause()},this.resume=function(a){return W(a)?f.sounds[a].resume():!1},this.resumeAll=function(){var a;for(a=f.soundIDs.length;a--;)f.sounds[f.soundIDs[a]].resume()},this.togglePause=function(a){return W(a)?f.sounds[a].togglePause():!1},this.setPan=function(a,b){return W(a)?f.sounds[a].setPan(b):!1},this.setVolume=function(a,b){return W(a)?f.sounds[a].setVolume(b):!1},this.mute=function(a){var b=0;typeof a!="string"&&(a=null);if(a)return W(a)?f.sounds[a].mute():!1;for(b=f.soundIDs.length;b--;)f.sounds[f.soundIDs[b]].mute();f.muted=!0;return!0},this.muteAll=function(){f.mute()},this.unmute=function(a){typeof a!="string"&&(a=null);if(a)return W(a)?f.sounds[a].unmute():!1;for(a=f.soundIDs.length;a--;)f.sounds[f.soundIDs[a]].unmute();f.muted=!1;return!0},this.unmuteAll=function(){f.unmute()},this.toggleMute=function(a){return W(a)?f.sounds[a].toggleMute():!1},this.getMemoryUse=function(){var a=0;f.o&&k!==8&&(a=parseInt(f.o._getMemoryUse(),10));return a},this.disable=function(a){var b;typeof a=="undefined"&&(a=!1);if(s)return!1;s=!0;for(b=f.soundIDs.length;b--;)L(f.sounds[f.soundIDs[b]]);u(a),bh.remove(i,"load",y);return!0},this.canPlayMIME=function(a){var b;f.hasHTML5&&(b=bd({type:a}));return!ba||b?b:a?a.match(f.mimePattern)?!0:!1:null},this.canPlayURL=function(a){var b;f.hasHTML5&&(b=bd({url:a}));return!ba||b?b:a?a.match(f.filePattern)?!0:!1:null},this.canPlayLink=function(a){return typeof a.type!="undefined"&&a.type&&f.canPlayMIME(a.type)?!0:f.canPlayURL(a.href)},this.getSoundById=function(a){if(!a)throw Error("soundManager.getSoundById(): sID is null/undefined");return f.sounds[a]},this.onready=function(a,b){if(a&&a instanceof Function)return b||(b=i),w("onready",a,b),x(),!0;throw Q("needFunction","onready")},this.ontimeout=function(a,b){if(a&&a instanceof Function)return b||(b=i),w("ontimeout",a,b),x({type:"ontimeout"}),!0;throw Q("needFunction","ontimeout")},this._wD=this._writeDebug=function(){return!0},this._debug=function(){},this.reboot=function(){var a,b;for(a=f.soundIDs.length;a--;)f.sounds[f.soundIDs[a]].destruct();try{br&&(P=f.o.innerHTML),O=f.o.parentNode.removeChild(f.o)}catch(c){}P=O=ba=null,f.enabled=F=r=X=Y=p=q=s=f.swfLoaded=!1,f.soundIDs=f.sounds=[],f.o=null;for(a in o)if(o.hasOwnProperty(a))for(b=o[a].length;b--;)o[a][b].fired=!1;i.setTimeout(f.beginDelayedInit,20)},this.getMoviePercent=function(){return f.o&&typeof f.o.PercentLoaded!="undefined"?f.o.PercentLoaded():null},this.beginDelayedInit=function(){t=!0,E(),setTimeout(function(){if(Y)return!1;H(),D();return Y=!0},20),z()},this.destruct=function(){f.disable(!0)},bn={abort:d(function(){}),canplay:d(function(){if(this._t._html5_canplay)return!0;this._t._html5_canplay=!0,this._t._onbufferchange(0);var a=isNaN(this._t.position)?null:this._t.position/1e3;if(this._t.position&&this.currentTime!==a)try{this.currentTime=a}catch(b){}}),load:d(function(){this._t.loaded||(this._t._onbufferchange(0),this._t._whileloading(this._t.bytesTotal,this._t.bytesTotal,this._t._get_html5_duration()),this._t._onload(!0))}),emptied:d(function(){}),ended:d(function(){this._t._onfinish()}),error:d(function(){this._t._onload(!1)}),loadeddata:d(function(){var a=this._t,b=a.bytesTotal||1;!a._loaded&&!bt&&(a.duration=a._get_html5_duration(),a._whileloading(b,b,a._get_html5_duration()),a._onload(!0))}),loadedmetadata:d(function(){}),loadstart:d(function(){this._t._onbufferchange(1)}),play:d(function(){this._t._onbufferchange(0)}),playing:d(function(){this._t._onbufferchange(0)}),progress:d(function(a){if(this._t.loaded)return!1;var b,c=0,d=a.type==="progress",e=a.target.buffered;b=a.loaded||0;var f=a.total||1;if(e&&e.length){for(b=e.length;b--;)c=e.end(b)-e.start(b);b=c/a.target.duration,d&&isNaN(b)}isNaN(b)||(this._t._onbufferchange(0),this._t._whileloading(b,f,this._t._get_html5_duration()),b&&f&&b===f&&bn.load.call(this,a))}),ratechange:d(function(){}),suspend:d(function(a){bn.progress.call(this,a)}),stalled:d(function(){}),timeupdate:d(function(){this._t._onTimer()}),waiting:d(function(){this._t._onbufferchange(1)})},e=function(a){var b=this,c,d,e;this.sID=a.id,this.url=a.url,this._iO=this.instanceOptions=this.options=v(a),this.pan=this.options.pan,this.volume=this.options.volume,this._lastURL=null,this.isHTML5=!1,this._a=null,this.id3={},this._debug=function(){},this.load=function(a){var c=null;if(typeof a!="undefined")b._iO=v(a,b.options),b.instanceOptions=b._iO;else if(a=b.options,b._iO=a,b.instanceOptions=b._iO,b._lastURL&&b._lastURL!==b.url)b._iO.url=b.url,b.url=null;b._iO.url||(b._iO.url=b.url);if(b._iO.url===b.url&&b.readyState!==0&&b.readyState!==2)return b;b._lastURL=b.url,b.loaded=!1,b.readyState=1,b.playState=0;if(bc(b._iO)){if(c=b._setup_html5(b._iO),!c._called_load)b._html5_canplay=!1,c.load(),c._called_load=!0,b._iO.autoPlay&&b.play()}else try{b.isHTML5=!1,b._iO=U(T(b._iO)),k===8?f.o._load(b.sID,b._iO.url,b._iO.stream,b._iO.autoPlay,b._iO.whileloading?1:0,b._iO.loops||1,b._iO.usePolicyFile):f.o._load(b.sID,b._iO.url,b._iO.stream?!0:!1,b._iO.autoPlay?!0:!1,b._iO.loops||1,b._iO.autoLoad?!0:!1,b._iO.usePolicyFile)}catch(d){I({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}return b},this.unload=function(){if(b.readyState!==0){if(b.isHTML5){if(d(),b._a)b._a.pause(),b._a.src=""}else k===8?f.o._unload(b.sID,f.nullURL):f.o._unload(b.sID);c()}return b},this.destruct=function(a){if(b.isHTML5){if(d(),b._a)b._a.pause(),b._a.src="",bj||b._remove_html5_events(),b._a._t=null,b._a=null}else b._iO.onfailure=null,f.o._destroySound(b.sID);a||f.destroySound(b.sID,!0)},this.start=this.play=function(a,c){var d,c=c===void 0?!0:c;a||(a={}),b._iO=v(a,b._iO),b._iO=v(b._iO,b.options),b.instanceOptions=b._iO;if(b._iO.serverURL&&!b.connected)return b.getAutoPlay()||b.setAutoPlay(!0),b;bc(b._iO)&&(b._setup_html5(b._iO),e());if(b.playState===1&&!b.paused&&(d=b._iO.multiShot,!d))return b;if(!b.loaded)if(b.readyState===0)b.isHTML5||(b._iO.autoPlay=!0),b.load(b._iO);else if(b.readyState===2)return b;!b.isHTML5&&k===9&&b.position>0&&b.position===b.duration&&(b._iO.position=0),b.paused&&b.position&&b.position>0?b.resume():(b.playState=1,b.paused=!1,(!b.instanceCount||b._iO.multiShotEvents||!b.isHTML5&&k>8&&!b.getAutoPlay())&&b.instanceCount++,b.position=typeof b._iO.position!="undefined"&&!isNaN(b._iO.position)?b._iO.position:0,b.isHTML5||(b._iO=U(T(b._iO))),b._iO.onplay&&c&&(b._iO.onplay.apply(b),b._onplay_called=!0),b.setVolume(b._iO.volume,!0),b.setPan(b._iO.pan,!0),b.isHTML5?(e(),d=b._setup_html5(),b.setPosition(b._iO.position),d.play()):f.o._start(b.sID,b._iO.loops||1,k===9?b._iO.position:b._iO.position/1e3));return b},this.stop=function(a){b.playState===1&&(b._onbufferchange(0),b.resetOnPosition(0),b.isHTML5||(b.playState=0),b.paused=!1,b._iO.onstop&&b._iO.onstop.apply(b),b.isHTML5?b._a&&(b.setPosition(0),b._a.pause(),b.playState=0,b._onTimer(),d(),b.unload()):(f.o._stop(b.sID,a),b._iO.serverURL&&b.unload()),b.instanceCount=0,b._iO={});return b},this.setAutoPlay=function(a){b._iO.autoPlay=a,b.isHTML5||(f.o._setAutoPlay(b.sID,a),a&&!b.instanceCount&&b.readyState===1&&b.instanceCount++)},this.getAutoPlay=function(){return b._iO.autoPlay},this.setPosition=function(a){a===void 0&&(a=0);var c=b.isHTML5?Math.max(a,0):Math.min(b.duration||b._iO.duration,Math.max(a,0));b.position=c,a=b.position/1e3,b.resetOnPosition(b.position),b._iO.position=c;if(b.isHTML5){if(b._a&&b._html5_canplay&&b._a.currentTime!==a)try{b._a.currentTime=a,(b.playState===0||b.paused)&&b._a.pause()}catch(d){}}else a=k===9?b.position:a,b.readyState&&b.readyState!==2&&f.o._setPosition(b.sID,a,b.paused||!b.playState);b.isHTML5&&b.paused&&b._onTimer(!0);return b},this.pause=function(a){if(b.paused||b.playState===0&&b.readyState!==1)return b;b.paused=!0,b.isHTML5?(b._setup_html5().pause(),d()):(a||a===void 0)&&f.o._pause(b.sID),b._iO.onpause&&b._iO.onpause.apply(b);return b},this.resume=function(){if(!b.paused)return b;b.paused=!1,b.playState=1,b.isHTML5?(b._setup_html5().play(),e()):(b._iO.isMovieStar&&b.setPosition(b.position),f.o._pause(b.sID)),!b._onplay_called&&b._iO.onplay?(b._iO.onplay.apply(b),b._onplay_called=!0):b._iO.onresume&&b._iO.onresume.apply(b);return b},this.togglePause=function(){if(b.playState===0)return b.play({position:k===9&&!b.isHTML5?b.position:b.position/1e3}),b;b.paused?b.resume():b.pause();return b},this.setPan=function(a,c){typeof a=="undefined"&&(a=0),typeof c=="undefined"&&(c=!1),b.isHTML5||f.o._setPan(b.sID,a),b._iO.pan=a,c||(b.pan=a,b.options.pan=a);return b},this.setVolume=function(a,c){typeof a=="undefined"&&(a=100),typeof c=="undefined"&&(c=!1),b.isHTML5?b._a&&(b._a.volume=Math.max(0,Math.min(1,a/100))):f.o._setVolume(b.sID,f.muted&&!b.muted||b.muted?0:a),b._iO.volume=a,c||(b.volume=a,b.options.volume=a);return b},this.mute=function(){b.muted=!0,b.isHTML5?b._a&&(b._a.muted=!0):f.o._setVolume(b.sID,0);return b},this.unmute=function(){b.muted=!1;var a=typeof b._iO.volume!="undefined";b.isHTML5?b._a&&(b._a.muted=!1):f.o._setVolume(b.sID,a?b._iO.volume:b.options.volume);return b},this.toggleMute=function(){return b.muted?b.unmute():b.mute()},this.onposition=function(a,c,d){b._onPositionItems.push({position:a,method:c,scope:typeof d!="undefined"?d:b,fired:!1});return b},this.processOnPosition=function(){var a,c;a=b._onPositionItems.length;if(!a||!b.playState||b._onPositionFired>=a)return!1;for(;a--;)if(c=b._onPositionItems[a],!c.fired&&b.position>=c.position)c.method.apply(c.scope,[c.position]),c.fired=!0,f._onPositionFired++;return!0},this.resetOnPosition=function(a){var c,d;c=b._onPositionItems.length;if(!c)return!1;for(;c--;)if(d=b._onPositionItems[c],d.fired&&a<=d.position)d.fired=!1,f._onPositionFired--;return!0},e=function(){b.isHTML5&&$(b)},d=function(){b.isHTML5&&_(b)},c=function(){b._onPositionItems=[],b._onPositionFired=0,b._hasTimer=null,b._onplay_called=!1,b._a=null,b._html5_canplay=!1,b.bytesLoaded=null,b.bytesTotal=null,b.position=null,b.duration=b._iO&&b._iO.duration?b._iO.duration:null,b.durationEstimate=null,b.failures=0,b.loaded=!1,b.playState=0,b.paused=!1,b.readyState=0,b.muted=!1,b.didBeforeFinish=!1,b.didJustBeforeFinish=!1,b.isBuffering=!1,b.instanceOptions={},b.instanceCount=0,b.peakData={left:0,right:0},b.waveformData={left:[],right:[]},b.eqData=[],b.eqData.left=[],b.eqData.right=[]},c(),this._onTimer=function(a){var c={};if(b._hasTimer||a)return b._a&&(a||(b.playState>0||b.readyState===1)&&!b.paused)?(b.duration=b._get_html5_duration(),b.durationEstimate=b.duration,a=b._a.currentTime?b._a.currentTime*1e3:0,b._whileplaying(a,c,c,c,c),!0):!1},this._get_html5_duration=function(){var a=b._a?b._a.duration*1e3:b._iO?b._iO.duration:void 0;return a&&!isNaN(a)&&a!==Infinity?a:b._iO?b._iO.duration:null},this._setup_html5=function(a){var a=v(b._iO,a),d=bj?f._global_a:b._a;decodeURI(a.url);var e=d&&d._t?d._t.instanceOptions:null;if(d){if(d._t&&e.url===a.url&&(!b._lastURL||b._lastURL===e.url))return d;bj&&d._t&&d._t.playState&&a.url!==e.url&&d._t.stop(),c(),d.src=a.url,b.url=a.url,b._lastURL=a.url,d._called_load=!1}else if(d=new Audio(a.url),d._called_load=!1,bj)f._global_a=d;b.isHTML5=!0,b._a=d,d._t=b,b._add_html5_events(),d.loop=a.loops>1?"loop":"",a.autoLoad||a.autoPlay?(d.autobuffer="auto",d.preload="auto",b.load(),d._called_load=!0):(d.autobuffer=!1,d.preload="none"),d.loop=a.loops>1?"loop":"";return d},this._add_html5_events=function(){if(b._a._added_events)return!1;var a;b._a._added_events=!0;for(a in bn)bn.hasOwnProperty(a)&&b._a&&b._a.addEventListener(a,bn[a],!1);return!0},this._remove_html5_events=function(){var a;b._a._added_events=!1;for(a in bn)bn.hasOwnProperty(a)&&b._a&&b._a.removeEventListener(a,bn[a],!1)},this._onload=function(a){a=a?!0:!1,b.loaded=a,b.readyState=a?3:2,b._onbufferchange(0),b._iO.onload&&b._iO.onload.apply(b,[a]);return!0},this._onbufferchange=function(a){if(b.playState===0)return!1;if(a&&b.isBuffering||!a&&!b.isBuffering)return!1;b.isBuffering=a===1,b._iO.onbufferchange&&b._iO.onbufferchange.apply(b);return!0},this._onfailure=function(a,c,d){b.failures++,b._iO.onfailure&&b.failures===1&&b._iO.onfailure(b,a,c,d)},this._onbeforefinish=function(){b.didBeforeFinish||(b.didBeforeFinish=!0,b._iO.onbeforefinish&&b._iO.onbeforefinish.apply(b))},this._onjustbeforefinish=function(){b.didJustBeforeFinish||(b.didJustBeforeFinish=!0,b._iO.onjustbeforefinish&&b._iO.onjustbeforefinish.apply(b))},this._onfinish=function(){var a=b._iO.onfinish;b._onbufferchange(0),b.resetOnPosition(0),b._iO.onbeforefinishcomplete&&b._iO.onbeforefinishcomplete.apply(b),b.didBeforeFinish=!1,b.didJustBeforeFinish=!1,b.instanceCount&&(b.instanceCount--,b.instanceCount||(b.playState=0,b.paused=!1,b.instanceCount=0,b.instanceOptions={},b._iO={},d()),(!b.instanceCount||b._iO.multiShotEvents)&&a&&a.apply(b))},this._whileloading=function(a,c,d,e){b.bytesLoaded=a,b.bytesTotal=c,b.duration=Math.floor(d),b.bufferLength=e;if(b._iO.isMovieStar)b.durationEstimate=b.duration;else if(b.durationEstimate=b._iO.duration?b.duration>b._iO.duration?b.duration:b._iO.duration:parseInt(b.bytesTotal/b.bytesLoaded*b.duration,10),b.durationEstimate===void 0)b.durationEstimate=b.duration;b.readyState!==3&&b._iO.whileloading&&b._iO.whileloading.apply(b)},this._whileplaying=function(a,c,d,e,g){if(isNaN(a)||a===null)return!1;b.position=a,b.processOnPosition(),!b.isHTML5&&k>8&&(b._iO.usePeakData&&typeof c!="undefined"&&c&&(b.peakData={left:c.leftPeak,right:c.rightPeak}),b._iO.useWaveformData&&typeof d!="undefined"&&d&&(b.waveformData={left:d.split(","),right:e.split(",")}),b._iO.useEQData&&typeof g!="undefined"&&g&&g.leftEQ&&(a=g.leftEQ.split(","),b.eqData=a,b.eqData.left=a,typeof g.rightEQ!="undefined"&&g.rightEQ)&&(b.eqData.right=g.rightEQ.split(","))),b.playState===1&&(!b.isHTML5&&f.flashVersion===8&&!b.position&&b.isBuffering&&b._onbufferchange(0),b._iO.whileplaying&&b._iO.whileplaying.apply(b),(b.loaded||!b.loaded&&b._iO.isMovieStar)&&b._iO.onbeforefinish&&b._iO.onbeforefinishtime&&!b.didBeforeFinish&&b.duration-b.position<=b._iO.onbeforefinishtime&&b._onbeforefinish());return!0},this._onid3=function(a,c){var d=[],e,f;e=0;for(f=a.length;e<f;e++)d[a[e]]=c[e];b.id3=v(b.id3,d),b._iO.onid3&&b._iO.onid3.apply(b)},this._onconnect=function(a){a=a===1;if(b.connected=a)b.failures=0,W(b.sID)&&(b.getAutoPlay()?b.play(void 0,b.getAutoPlay()):b._iO.autoLoad&&b.load()),b._iO.onconnect&&b._iO.onconnect.apply(b,[a])},this._ondataerror=function(){b.playState>0&&b._iO.ondataerror&&b._iO.ondataerror.apply(b)}},G=function(){return l.body||l._docElement||l.getElementsByTagName("div")[0]},g=function(a){return l.getElementById(a)},v=function(a,b){var c={},d,e;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);d=typeof b=="undefined"?f.defaultOptions:b;for(e in d)d.hasOwnProperty(e)&&typeof c[e]=="undefined"&&(c[e]=d[e]);return c},bh=function(){function b(a,b){var e=a.shift(),f=[d[b]];c?e[f](a[0],a[1]):e[f].apply(e,a)}function a(a){var a=bi.call(a),b=a.length;c?(a[1]="on"+a[1],b>3&&a.pop()):b===3&&a.push(!1);return a}var c=i.attachEvent,d={add:c?"attachEvent":"addEventListener",remove:c?"detachEvent":"removeEventListener"};return{add:function(){b(a(arguments),"add")},remove:function(){b(a(arguments),"remove")}}}(),bc=function(a){return!a.serverURL&&(a.type?bd({type:a.type}):bd({url:a.url})||f.html5Only)},bd=function(a){function b(a){return f.preferFlash&&bk&&!f.ignoreFlash&&typeof f.flash[a]!="undefined"&&f.flash[a]}if(!f.useHTML5Audio||!f.hasHTML5)return!1;var c=a.url||null,a=a.type||null,d=f.audioFormats,e;if(a&&f.html5[a]!=="undefined")return f.html5[a]&&!b(a);if(!be){be=[];for(e in d)d.hasOwnProperty(e)&&(be.push(e),d[e].related&&(be=be.concat(d[e].related)));be=RegExp("\\.("+be.join("|")+")(\\?.*)?$","i")}e=c?c.toLowerCase().match(be):null;if(!e||!e.length)if(a)c=a.indexOf(";"),e=(c!==-1?a.substr(0,c):a).substr(6);else return!1;else e=e[1];return e&&typeof f.html5[e]!="undefined"?f.html5[e]&&!b(e):(a="audio/"+e,c=f.html5.canPlayType({type:a}),(f.html5[e]=c)&&f.html5[a]&&!b(a))},bg=function(){function a(a){var c,d,e=!1;if(!b||typeof b.canPlayType!="function")return!1;if(a instanceof Array){c=0;for(d=a.length;c<d&&!e;c++)if(f.html5[a[c]]||b.canPlayType(a[c]).match(f.html5Test))e=!0,f.html5[a[c]]=!0,f.flash[a[c]]=!(!f.preferFlash||!bk||!a[c].match(bz));return e}return a=b&&typeof b.canPlayType=="function"?b.canPlayType(a):!1,!!a&&!!a.match(f.html5Test)}if(!f.useHTML5Audio||typeof Audio=="undefined")return!1;var b=typeof Audio!="undefined"?bu?new Audio(null):new Audio:null,c,d={},e,g;e=f.audioFormats;for(c in e)if(e.hasOwnProperty(c)&&(d[c]=a(e[c].type),d["audio/"+c]=d[c],f.flash[c]=f.preferFlash&&!f.ignoreFlash&&c.match(bz)?!0:!1,e[c]&&e[c].related))for(g=e[c].related.length;g--;)d["audio/"+e[c].related[g]]=d[c],f.html5[e[c].related[g]]=d[c],f.flash[e[c].related[g]]=d[c];d.canPlayType=b?a:null,f.html5=v(f.html5,d);return!0},Q=function(){},T=function(a){k===8&&a.loops>1&&a.stream&&(a.stream=!1);return a},U=function(a){a&&!a.usePolicyFile&&(a.onid3||a.usePeakData||a.useWaveformData||a.useEQData)&&(a.usePolicyFile=!0);return a},V=function(a){typeof console!="undefined"&&typeof console.warn!="undefined"&&console.warn(a)},m=function(){return!1},L=function(a){for(var b in a)a.hasOwnProperty(b)&&typeof a[b]=="function"&&(a[b]=m)},M=function(a){typeof a=="undefined"&&(a=!1),(s||a)&&f.disable(a)},N=function(a){var b=null;if(a)if(a.match(/\.swf(\?.*)?$/i)){if(b=a.substr(a.toLowerCase().lastIndexOf(".swf?")+4))return a}else a.lastIndexOf("/")!==a.length-1&&(a+="/");return(a&&a.lastIndexOf("/")!==-1?a.substr(0,a.lastIndexOf("/")+1):"./")+f.movieURL},B=function(){k!==8&&k!==9&&(f.flashVersion=8);var a=f.debugMode||f.debugFlash?"_debug.swf":".swf";f.useHTML5Audio&&!f.html5Only&&f.audioFormats.mp4.required&&f.flashVersion<9&&(f.flashVersion=9),k=f.flashVersion,f.version=f.versionNumber+(f.html5Only?" (HTML5-only mode)":k===9?" (AS3/Flash 9)":" (AS2/Flash 8)"),k>8&&(f.defaultOptions=v(f.defaultOptions,f.flash9Options),f.features.buffering=!0),k>8&&f.useMovieStar?(f.defaultOptions=v(f.defaultOptions,f.movieStarOptions),f.filePatterns.flash9=RegExp("\\.(mp3|"+f.netStreamTypes.join("|")+")(\\?.*)?$","i"),f.mimePattern=f.netStreamMimeTypes,f.features.movieStar=!0):(f.useMovieStar=!1,f.features.movieStar=!1),f.filePattern=f.filePatterns[k!==8?"flash9":"flash8"],f.movieURL=(k===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",a),f.features.peakData=f.features.waveformData=f.features.eqData=k>8},J=function(a,b){if(!f.o||!f.allowPolling)return!1;f.o._setPolling(a,b)},K=function(){f.debugURLParam.test(j)&&(f.debugMode=!0)},W=this.getSoundById,S=function(){var a=[];f.debugMode&&a.push(f.swfCSS.sm2Debug),f.debugFlash&&a.push(f.swfCSS.flashDebug),f.useHighPerformance&&a.push(f.swfCSS.highPerf);return a.join(" ")},R=function(){Q("fbHandler");var a=f.getMoviePercent(),b=f.swfCSS,c={type:"FLASHBLOCK"};if(f.html5Only)return!1;f.ok()?f.oMC&&(f.oMC.className=[S(),b.swfDefault,b.swfLoaded+(f.didFlashBlock?" "+b.swfUnblocked:"")].join(" ")):(ba&&(f.oMC.className=S()+" "+b.swfDefault+" "+(a===null?b.swfTimedout:b.swfError)),f.didFlashBlock=!0,x({type:"ontimeout",ignoreInit:!0,error:c}),I(c))},w=function(a,b,c){typeof o[a]=="undefined"&&(o[a]=[]),o[a].push({method:b,scope:c||null,fired:!1})},x=function(a){a||(a={type:"onready"});if(!r&&a&&!a.ignoreInit)return!1;if(a.type==="ontimeout"&&f.ok())return!1;var b={success:a&&a.ignoreInit?f.ok():!s},c=a&&a.type?o[a.type]||[]:[],d=[],e,b=[b],g=ba&&f.useFlashBlock&&!f.ok();a.error&&(b[0].error=a.error),a=0;for(e=c.length;a<e;a++)c[a].fired!==!0&&d.push(c[a]);if(d.length){a=0;for(e=d.length;a<e;a++)if(d[a].scope?d[a].method.apply(d[a].scope,b):d[a].method.apply(this,b),!g)d[a].fired=!0}return!0},y=function(){i.setTimeout(function(){f.useFlashBlock&&R(),x(),f.onload instanceof Function&&f.onload.apply(i),f.waitForWindowLoad&&bh.add(i,"load",y)},1)},bl=function(){if(bk!==void 0)return bk;var a=!1,b=navigator,c=b.plugins,d,e=i.ActiveXObject;if(c&&c.length)(b=b.mimeTypes)&&b["application/x-shockwave-flash"]&&b["application/x-shockwave-flash"].enabledPlugin&&b["application/x-shockwave-flash"].enabledPlugin.description&&(a=!0);else if(typeof e!="undefined"){try{d=new e("ShockwaveFlash.ShockwaveFlash")}catch(f){}a=!!d}return bk=a},bb=function(){var a,b;if(h.match(/iphone os (1|2|3_0|3_1)/i)){f.hasHTML5=!1,f.html5Only=!0,f.oMC&&(f.oMC.style.display="none");return!1}if(!f.useHTML5Audio)return!0;if(!f.html5||!f.html5.canPlayType)return f.hasHTML5=!1,!0;f.hasHTML5=!0;if(bv&&bl())return!0;for(b in f.audioFormats)f.audioFormats.hasOwnProperty(b)&&(f.audioFormats[b].required&&!f.html5.canPlayType(f.audioFormats[b].type)||f.flash[b]||f.flash[f.audioFormats[b].type])&&(a=!0);f.ignoreFlash&&(a=!1),f.html5Only=f.hasHTML5&&f.useHTML5Audio&&!a;return!f.html5Only},$=function(a){a._hasTimer||(a._hasTimer=!0)},_=function(a){a._hasTimer&&(a._hasTimer=!1)},I=function(a){a=typeof a!="undefined"?a:{},f.onerror instanceof Function&&f.onerror.apply(i,[{type:typeof a.type!="undefined"?a.type:null}]),typeof a.fatal!="undefined"&&a.fatal&&f.disable()},bm=function(){if(!bv||!bl())return!1;var a=f.audioFormats,b,c;for(c in a)if(a.hasOwnProperty(c)&&(c==="mp3"||c==="mp4"))if(f.html5[c]=!1,a[c]&&a[c].related)for(b=a[c].related.length;b--;)f.html5[a[c].related[b]]=!1},this._setSandboxType=function(){},this._externalInterfaceOK=function(){if(f.swfLoaded)return!1;(new Date).getTime(),f.swfLoaded=!0,bx=!1,bv&&bm(),br?setTimeout(n,100):n()},H=function(a,b){function c(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(p&&q)return!1;if(f.html5Only)return B(),f.oMC=g(f.movieID),n(),q=p=!0,!1;var d=b||f.url,e=f.altURL||d,i;i=G();var j,k,m=S(),o,r=null,r=(r=l.getElementsByTagName("html")[0])&&r.dir&&r.dir.match(/rtl/i),a=typeof a=="undefined"?f.id:a;B(),f.url=N(bA?d:e),b=f.url,f.wmode=!f.wmode&&f.useHighPerformance&&!f.useMovieStar?"transparent":f.wmode,f.wmode!==null&&(h.match(/msie 8/i)||!br&&!f.useHighPerformance)&&navigator.platform.match(/win32|win64/i)&&(f.specialWmodeCase=!0,f.wmode=null),i={name:a,id:a,src:b,width:"auto",height:"auto",quality:"high",allowScriptAccess:f.allowScriptAccess,bgcolor:f.bgColor,pluginspage:bB+"//www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:f.wmode,hasPriority:"true"},f.debugFlash&&(i.FlashVars="debug=1"),f.wmode||delete i.wmode;if(br)d=l.createElement("div"),k=['<object id="'+a+'" data="'+b+'" type="'+i.type+'" title="'+i.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+bB+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="'+i.width+'" height="'+i.height+'">',c("movie",b),c("AllowScriptAccess",f.allowScriptAccess),c("quality",i.quality),f.wmode?c("wmode",f.wmode):"",c("bgcolor",f.bgColor),c("hasPriority","true"),f.debugFlash?c("FlashVars",i.FlashVars):"","</object>"].join("");else for(j in d=l.createElement("embed"),i)i.hasOwnProperty(j)&&d.setAttribute(j,i[j]);K(),m=S();if(i=G())if(f.oMC=g(f.movieID)||l.createElement("div"),f.oMC.id)o=f.oMC.className,f.oMC.className=(o?o+" ":f.swfCSS.swfDefault)+(m?" "+m:""),f.oMC.appendChild(d),br&&(j=f.oMC.appendChild(l.createElement("div")),j.className=f.swfCSS.swfBox,j.innerHTML=k),q=!0;else{f.oMC.id=f.movieID,f.oMC.className=f.swfCSS.swfDefault+" "+m,j=m=null;if(!f.useFlashBlock)if(f.useHighPerformance)m={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else if(m={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},r)m.left=Math.abs(parseInt(m.left,10))+"px";bs&&(f.oMC.style.zIndex=1e4);if(!f.debugFlash)for(o in m)m.hasOwnProperty(o)&&(f.oMC.style[o]=m[o]);try{br||f.oMC.appendChild(d),i.appendChild(f.oMC),br&&(j=f.oMC.appendChild(l.createElement("div")),j.className=f.swfCSS.swfBox,j.innerHTML=k),q=!0}catch(s){throw Error(Q("domError")+" \n"+s.toString())}}return p=!0},D=function(){if(f.html5Only)return H(),!1;if(f.o)return!1;f.o=f.getMovie(f.id),f.o||(O?(br?f.oMC.innerHTML=P:f.oMC.appendChild(O),O=null,p=!0):H(f.id,f.url),f.o=f.getMovie(f.id)),f.oninitmovie instanceof Function&&setTimeout(f.oninitmovie,1);return!0},z=function(){setTimeout(A,1e3)},A=function(){if(X)return!1;X=!0,bh.remove(i,"load",z);if(bx&&!bw)return!1;var a;r||(a=f.getMoviePercent()),setTimeout(function(){a=f.getMoviePercent(),!r&&by&&(a===null?f.useFlashBlock||f.flashLoadTimeout===0?f.useFlashBlock&&R():M(!0):f.flashLoadTimeout!==0&&M(!0))},f.flashLoadTimeout)},C=function(){function a(){bh.remove(i,"focus",C),bh.remove(i,"load",C)}if(bw||!bx)return a(),!0;bw=by=!0,bt&&bx&&bh.remove(i,"mousemove",C),X=!1,a();return!0},u=function(a){if(r)return!1;if(f.html5Only)return r=!0,y(),!0;var b;if(!f.useFlashBlock||!f.flashLoadTimeout||f.getMoviePercent())r=!0,s&&(b={type:!bk&&ba?"NO_FLASH":"INIT_TIMEOUT"});if(s||a){f.useFlashBlock&&f.oMC&&(f.oMC.className=S()+" "+(f.getMoviePercent()===null?f.swfCSS.swfTimedout:f.swfCSS.swfError)),x({type:"ontimeout",error:b}),I(b);return!1}bh.add(i,"unload",m);if(f.waitForWindowLoad&&!t)return bh.add(i,"load",y),!1;y();return!0},bo=function(){var a,b=[];if(f.useHTML5Audio&&f.hasHTML5)for(a in f.audioFormats)f.audioFormats.hasOwnProperty(a)&&b.push(a+": "+f.html5[a]+(!f.html5[a]&&bk&&f.flash[a]?" (using flash)":f.preferFlash&&f.flash[a]&&bk?" (preferring flash)":f.html5[a]?"":" ("+(f.audioFormats[a].required?"required, ":"")+"and no flash support)"))},n=function(){if(r)return!1;if(f.html5Only){r||(bh.remove(i,"load",f.beginDelayedInit),f.enabled=!0,u());return!0}D();try{f.o._externalInterfaceTest(!1),f.allowPolling&&J(!0,f.flashPollingInterval||(f.useFastPolling?10:50)),f.debugMode||f.o._disableDebug(),f.enabled=!0}catch(a){return I({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),M(!0),u(),!1}u(),bh.remove(i,"load",f.beginDelayedInit);return!0},E=function(){if(F)return!1;F=!0,K(),!bk&&f.hasHTML5&&(f.useHTML5Audio=!0,f.preferFlash=!1),bg(),f.html5.usingFlash=bb(),ba=f.html5.usingFlash,bo(),!bk&&ba&&(f.flashLoadTimeout=1),l.removeEventListener&&l.removeEventListener("DOMContentLoaded",E,!1),D();return!0},bf=function(){l.readyState==="complete"&&(E(),l.detachEvent("onreadystatechange",bf));return!0},bl(),bh.add(i,"focus",C),bh.add(i,"load",C),bh.add(i,"load",z),bt&&bx&&bh.add(i,"mousemove",C),l.addEventListener?l.addEventListener("DOMContentLoaded",E,!1):l.attachEvent?l.attachEvent("onreadystatechange",bf):I({type:"NO_DOM2_EVENTS",fatal:!0}),l.readyState==="complete"&&setTimeout(E,100)}var c=null;if(typeof SM2_DEFER=="undefined"||!SM2_DEFER)c=new b;a.SoundManager=b,a.soundManager=c})(window)