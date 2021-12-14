var canvasW = window.innerWidth;
var canvasH = window.innerHeight;
var cxt;





setUpCanvas();


function setUpCanvas(){
	canvas = document.querySelector("#myCanvas"); 
	cxt = canvas.getContext("2d"); 
	canvas.width = canvasW; 
	canvas.height = canvasH; 
	canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";
}


function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function tree (x, y, s, c){
	cxt.beginPath();
	cxt.moveTo( x+2*s   , y     );
	cxt.lineTo( x+3.5*s , y+2*s );
	cxt.lineTo( x+3*s   , y+2*s );
	cxt.lineTo( x+4*s   , y+4*s );
	cxt.lineTo( x+3.5*s , y+4*s );
	cxt.lineTo( x+4.5*s , y+6*s );
	cxt.lineTo( x-0.5*s , y+6*s );
	cxt.lineTo( x+0.5*s , y+4*s );
	cxt.lineTo( x       , y+4*s );
	cxt.lineTo( x+1*s   , y+2*s );
	cxt.lineTo( x+0.5*s , y+2*s );
	cxt.lineTo( x+2*s   , y     );
	cxt.fillStyle = c;
	cxt.fill();
}

function ornamentBox (x, y, s, c){
	cxt.beginPath();
	cxt.moveTo( x   	, y+2*s );
	cxt.lineTo( x+2*s 	, y+2*s );
	cxt.lineTo( x+2*s 	, y 	);
	cxt.lineTo( x 		, y 	);
	cxt.fillStyle = c;
	cxt.fill();
}





tree(vw(30),vh(19),vw(7),"green");

ornamentBox(vw(10),vh(60),vw(7),"brown");
ornamentBox(vw(62),vh(55),vw(7),"brown");
ornamentBox(vw(79),vh(60),vw(7),"brown");










