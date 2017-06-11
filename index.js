// array of colors. later it will be random
var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(255, 0, 255)",
];

// select all divs with class colors and iterate through them to assign one color from the above array
var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

var message = document.getElementById("message");

for(var i = 0; i<squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab the color of the clicked square
		var clickedColor = this.style.backgroundColor;

		// compare the color with the pickedColor
		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			changeColorOfAll(clickedColor);
		}else{
			// when wrong then we want to square to fade out to background color
			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	})
}


function changeColorOfAll(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}