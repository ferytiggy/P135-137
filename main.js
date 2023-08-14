objects="";
status="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
     video=createCapture(VIDEO);
     video.size(480,380);
     video.hide();
}

function start(){
    CoCossd=ml5.objectDetector("cocossd",modelloaded);
    
}

function modelloaded(){
 console.log("Modelo Cargado :D:D:D:D")
 status=true;
 document.getElementById("Estatus").innerHTML="Estatus: Modelo Cargado:D:D:D";
 objeto=document.getElementById("input").value;
}