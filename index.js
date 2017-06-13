// array of colors. later it will be random selection of colors.
// want more colors not just 6 colors. 
// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(255, 0, 255)",
// ];

var numSquares = 6;
var colors = generateRandomColors(numSquares);

// select all divs with class colors and iterate through them to assign one color from the above array
var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

var message = document.getElementById("message");

var resetBtn = document.getElementById("reset");

var easyBtn = document.getElementById("easyBtn");

var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	this.classList.add("selected");

	// when we click easy btn colors to be generated are 3
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	// change colors of only top 3 by looping on squares.length
	for(var i = 0; i<squares.length; i++){
		// given only 3 colors generated in colors array, therefore only top 2 squares change color
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	this.classList.add("selected");

	// when we click easy btn colors to be generated are 3
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	// change colors of only top 3 by looping on squares.length
	for(var i = 0; i<squares.length; i++){		
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
})
resetBtn.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from the array
	pickedColor = pickColor();
	// change colorDisplay to picked color
	colorDisplay.textContent = pickedColor;
	// change colors of the squares
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	// change background color of h1 
	h1.style.background = "#232323";
})

var h1 = document.querySelector("h1");

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
			h1.style.background = clickedColor;
			reset.textContent = "Play Again?";
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

function generateRandomColors(num){
	var newArr = [];

	// repeat num times, to push a color in newArr
	for(var i = 0; i<num; i++){
		newArr.push(randomColor());
	}
	return newArr;
}

function randomColor(){
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +  ")";
}