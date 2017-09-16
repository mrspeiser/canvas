(function(){

// var canvas = $('canvas');

// Initializing

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');



// Rectangle / Square

// c.fillRect(x, y, width, height);

c.fillStyle = 'rgba(255, 0,0, 0.5';
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'rgba(2, 0,244, 0.5';
c.fillRect(200, 200, 100, 100)
c.fillStyle = 'rgba(2, 100,204, 0.5';
c.fillRect(300, 400, 10, 200)

// lines

c.beginPath();

// c.moveTo(x, y)
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(500, 300);
c.strokeStyle = "#ac4490";
c.stroke();



// Arc / Circle

// c.arc(x: Int, y: Int, r: Int, startAngle:
// 	Float, endAngle: Float,
// 	drawCounterClockwise: Bool(false));
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();



//Create 200 circles with random colors:

// for (var i = 0; i < 200; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	var r = Math.floor(Math.random() * 255);
// 	var g = Math.floor(Math.random() * 255);
// 	var b = Math.floor(Math.random() * 255);
// 	c.beginPath();
// 	rand_color = 'rgba('+r+','+g+','+b+',0.6)';
// 	// console.log(rand_color);
	
// 	c.arc(x, y, 30, 0, Math.PI * 2, false);
// 	c.strokeStyle = rand_color;
// 	c.stroke();
// }

//end for loop


function Circle(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.draw = function() {
	  c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = 'black';
      c.fillStyle = 'black';
      c.stroke();
      c.fill();
	}
	this.update = function() {
	  if (this.x+this.radius > innerWidth || 
	  	this.x - this.radius < 0) {
  	    this.dx = -this.dx;
      }

      if (this.y+this.radius > innerHeight || 
      	this.y - this.radius < 0) {
  	    this.dy = -this.dy;
      }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
	}
}






var circle_arr = [];

for(var i = 0; i < 100; i++) {
  var radius = 50;
  var x = Math.random() * (innerWidth - radius*2)+radius;
  var y = Math.random() * (innerHeight - radius*2)+radius;
  var dx = (Math.random() - 0.5)*5;
  var dy = (Math.random() - 0.5)*5;
  
  circle_arr.push(new Circle(x, y, dx, dy, radius));
}


function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for(var i = 0; i < circle_arr.length; i++){
  	circle_arr[i].update();
  }

}

animate();










})();
