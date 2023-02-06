// variables always go to the top
//these are the conections tht youre making to elemnetos on the page using CSS to select elements with JavaScript
//using CSS to select with JS

// create a one to one conection with a variable
// let theButton = document.queryselector ("#buttonOne")

//create a 1 to many conection with a variable

let theButtons = document.querySelectorAll ("#buttonHolder img"), 		
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board");

//functionality always goes in the middle --> app behavior
function changeBGImage() {
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

//event handling always goes at the bottom -->
//How do we want users to interact with our app

//1 to 1 event handling
// theButton.addEventListener("click", changeBGImage);

// 1 to many event handling
theButtons.forEach(button => button.addEventListener("click", changeBGImage));
