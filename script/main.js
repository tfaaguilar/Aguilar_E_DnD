// variables always go to the top
//these are the conections tht youre making to elemnetos on the page using CSS to select elements with JavaScript
//using CSS to select with JS

// create a one to one conection with a variable
// let theButton = document.queryselector ("#buttonOne")

//create a 1 to many conection with a variable

let theButtons = document.querySelectorAll ("#buttonHolder img"), 		
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	// store the dragged piece in a global variable because we need it in the handleDrop function
	draggedPiece;

//functionality always goes in the middle --> app behavior
function changeBGImage() {
	// the ` is a js template string. It tells de js engine to evaluate the expression inside the braces - run that little bit of code. in this case it is just pulling the button we clicked on and putting it at the end

	//bug fix 2
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
	console.log('started dragging this piece:', this);

	//stor reference to the puzzle piece image that we are dragging so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault();
	console.log('dragged over me:');}

	function handleDrop(e) {
		e.preventDefault();
		console.log('drop something on me:');
		//bug fix 1
	
		//this line is going to move the dragged piece from the left side of the board into whatever drop zone we chooce. appendChild means "add element to the container"

		this.appendChild(draggedPiece);

	}

//event handling always goes at the bottom -->
//How do we want users to interact with our app

//1 to 1 event handling
// theButton.addEventListener("click", changeBGImage);



// 1 to many event handling
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

//ad drag and drop event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

// add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener("dragover", handleDrop));