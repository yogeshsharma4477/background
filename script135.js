var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.getElementById("gradient");
var h3=document.querySelector("h3");
var random=document.getElementById("random");

 function gradient(){
 	body.style.background = "linear-gradient(to right, "
 	+color1.value+", "+color2.value+")";

 	h3.textContent = body.style.background;
 }

function getRandomColor() {
 var letter='0123456789ABCDEF';
 var color='#';
 for(var i=0;i<6;i++){
 	color += letter[Math.floor(Math.random() * 16)];
 }
 return color;
}

function randomcolor(){
	body.style.background = "linear-gradient(to right, "
 	+getRandomColor()+", "+getRandomColor()+")";

 	h3.textContent = body.style.background;
}

 if (random) {
random.addEventListener("click",randomcolor,false);
 }
 if (color1) {
color1.addEventListener("input",gradient);
 }
if (color2) {
color2.addEventListener("input",gradient);
}

//The JavaScript Math object allows you to perform mathematical tasks on numbers.
//Math.PI;       //3.14159

//Math.round(x) returns the value of x rounded to its nearest integer:
//Math.round(4.7);    // returns 5
//Math.round(4.4);    // returns 4

//Math.pow(8, 2);      // returns 64

//Math.sqrt(64);      // returns 8

//Math.abs(-4.7);     // returns 4.7 returns positive value

//Math.ceil(4.4);     // returns 5

//Math.floor(4.7);    // returns 4

//Math.min(0, 150, 30, 20, -8, -200);  // returns -200
//Math.max(0, 150, 30, 20, -8, -200);  // returns 150

//Math.random();     // returns a random number



//                      Advanced javascript(Scope)


//parent node(window)
var fun=5;

function funfunction(){
	//child scope
	var fun="hello";
	console.log(fun); 
}

function fun1function(){
	//child scope
	var fun="bye";
	console.log(fun); 
}

function fun2function(){
	//child scope
  	fun="Ahhhhhh";
	console.log(fun); 
}
//console.log(fun);
