function elspeak(mvj){
let miutm=mvj.length
function soundClick(audiofile) {
  let audio = new Audio(); 
  audio.preload = 'auto';
  audio.src = audiofile;
  audio.play()
}
let ry=mvj.split("")
for (i=0; i<=miutm-1; i++) {
let n=i
if(ry[n]=="a"){
soundClick('')
continue;
}
else if(ry[n]=="б"){
soundClick('')
continue;
}
else if(ry[n]=="в"){
soundClick('')
continue;
}
else if(ry[n]=="г"){
soundClick('')
continue;
}
else if(ry[n]=="д"){
soundClick('')
continue;
}
else if(ry[n]=="е"){
soundClick('')
continue;
}
else if(ry[n]=="ё"){
soundClick('')
continue;
}
else if(ry[n]=="ж"){
soundClick('gen-13.mp3')
continue;
}
else if(ry[n]=="з"){
soundClick('')
continue;
}
else if(ry[n]=="и"){
soundClick('')
continue;
}
else if(ry[n]=="й"){
soundClick('')
continue;
}
else if(ry[n]=="к"){
soundClick('')
continue;
}
else if(ry[n]=="л"){
soundClick('')
continue;
}
else if(ry[n]=="м"){
soundClick('')
}
else if(ry[n]=="н"){
soundClick('')
continue;
}
else if(ry[n]=="о"){
soundClick('')
continue;
}
else if(ry[n]=="п"){
soundClick('')
continue;
}
else if(ry[n]=="р"){
soundClick('')
continue;
}
else if(ry[n]=="с"){
soundClick('')
continue;
}
else if(ry[n]=="т"){
soundClick('gen-25.mp3')
continue;
}
else if(ry[n]=="у"){
soundClick('gen-26.mp3')
continue;
}
else if(ry[n]=="ф"){
soundClick('')
continue;
}
else if(ry[n]=="х"){
soundClick('')
continue;
}
else if(ry[n]=="ц"){
soundClick('')
continue;
}
else if(ry[n]=="ч"){
soundClick('')
continue;
}
else if(ry[n]=="ш"){
soundClick('')	
continue; 
}
else if(ry[n]=="щ"){
soundClick('')
continue;
}
else if(ry[n]=="ъ"){
soundClick('')
continue;
}
else if(ry[n]=="ы"){
soundClick('')
continue;
}
else if(ry[n]=="ь"){
soundClick('')
continue;
}
else if(ry[n]=="э"){
soundClick('')
continue;
}
else if(ry[n]=="ю"){
soundClick('')
continue;  
}
else if(ry[n]=="я"){
soundClick('')
continue;
}
else{
console.log("неизвестный символ")	
}
}
}
//мой код el_js
