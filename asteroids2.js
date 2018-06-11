var canv = document.getElementById('canvas');
var triangle=$(".triangle");
var ctx = canv.getContext('2d');
var asteroidRadius = 20;
var triangleStyle = document.getElementById('triangle');
var bulletWidth = 4;
var bulletX = canvas.width/2 + 3;
var bulletY = canvas.height/2 + 5;

triangleStyle.style.left = canvas.width/2;
triangleStyle.style.top = canvas.height/2;

var triangleCenter=[triangle.offset().left+triangle.width()/2, triangle.offset().top+triangle.height()/2];

$(document).mousemove(function(e){


	var angle = Math.atan2(e.pageX- triangleCenter[0],- (e.pageY- triangleCenter[1]) )*(180/Math.PI);

    triangle.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});
    triangle.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
    triangle.css({ 'transform': 'rotate(' + angle + 'deg)'});


	document.addEventListener('click',shoot);

		function shoot(){
			ctx.clearRect(0,0,1900,950);
			ctx.beginPath();
			ctx.fillstyle = "white";
			ctx.arc(bulletX + 3,bulletY,bulletWidth,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();

			var xy = [e.pageX , e.pageY];

			if(bulletX>1900 || bulletX<1 || bulletY>950 || bulletY<1){
				window.cancelAnimationFrame(shoot);
				bulletY = canvas.height/2-7;
				bulletX = canvas.width/2 + 3;
			}

			drawAsteroids();
			if(e.pageX>1900/2 && e.pageY>950/2){
				bulletX = bulletX + 1;
				bulletY = bulletY + 1;
			}

			if(e.pageX<1900/2 && e.pageY<950/2){
				bulletX = bulletX - 1;
				bulletY = bulletY - 1;
			}

			if(e.pageX>1900/2 && e.pageY<950/2){
				bulletX = bulletX + 1;
				bulletY = bulletY - 1;
			}

			if(e.pageX<1900/2 && e.pageY>950/2){
				bulletX = bulletX - 1;
				bulletY = bulletY + 1;
			}

			if(bulletX > 520-asteroidRadius   && bulletX < 520 + asteroidRadius && bulletY>30-asteroidRadius &&bulletY<30+asteroidRadius){
				score();
				bulletX = canvas.width/2 + 3;
				bulletY = canvas.height/2;
				window.cancelAnimationFrame(shoot);
			}

			if(bulletX > 520+800-asteroidRadius   && bulletX < 520+800 + asteroidRadius && bulletY>30-asteroidRadius &&bulletY<30+asteroidRadius){
				score();
				bulletX = canvas.width/2 + 3;
				bulletY = canvas.height/2;
				window.cancelAnimationFrame(shoot);
			}

			if(bulletX > 520+800-asteroidRadius   && bulletX < 520+800 + asteroidRadius && bulletY>900-asteroidRadius &&bulletY<900+asteroidRadius){
				score();
				bulletX = canvas.width/2 + 3;
				bulletY = canvas.height/2;
				window.cancelAnimationFrame(shoot);
			}

			if(bulletX > 520-asteroidRadius   && bulletX < 520 + asteroidRadius && bulletY>900-asteroidRadius &&bulletY<900+asteroidRadius){
				score();
				bulletX = canvas.width/2 + 3;
				bulletY = canvas.height/2;
				window.cancelAnimationFrame(shoot);
			}



			function score(){
				var score = 0;
			score = score +1;
			document.getElementById("score").innerHTML = score;

			}


window.requestAnimationFrame(shoot);

		};


});

function drawAsteroids(){
for (i=520;i<1880;i=i+800){
  ctx.beginPath();
	ctx.fillStyle = "white";
  ctx.arc(i , 30 , asteroidRadius , 7 , 2*Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(i,900,asteroidRadius,7,2*Math.PI);
  ctx.fill();
  ctx.closePath();
}
}








drawAsteroids();
