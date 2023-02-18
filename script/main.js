// variables always go to the top
//these are the conections tht youre making to elemnetos on the page using CSS to select elements with JavaScript
//using CSS to select with JS

// create a one to one conection with a variable
// let theButton = document.queryselector ("#buttonOne")

//create a 1 to many conection with a variable

let theButtons = document.querySelectorAll("#buttonHolder img"),
    theHeading = document.querySelector("#headLine h1"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll('.drop-zone'),
    mainBoard = document.querySelector('.puzzle-pieces'),

    draggedPiece = null;

//functionality always goes in the middle --> app behavior

//bug fix 2
function changeBGImage() {
    dropZones.forEach(zone => {
        while (zone.firstChild) {
            zone.removeChild(zone.firstChild);
        }
    });

    puzzlePieces.forEach(piece => {
        piece.classList.remove("dropped");
        mainBoard.appendChild(piece);
    });

    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
	console.log('started dragging this piece:', this);
	draggedPiece = this;
}

function handleDragOver(e) {
	e.preventDefault();
	console.log('dragged over me:');
}

function handleDrop(e) {
	e.preventDefault();
	console.log('drop something on me:');

	//bug fix 1
	
	const dropZone = this;

	// check if the drop zone has a piece already
	const existingPiece = dropZone.querySelector('img');
	if (existingPiece) {
		puzzleBoard.insertBefore(draggedPiece, existingPiece);
		dropZone.removeChild(existingPiece);
		mainBoard.appendChild(existingPiece);
	}
	
		// add the dropped piece to the drop zone
		dropZone.appendChild(draggedPiece);

		// mark the piece as dropped
		draggedPiece.classList.add("dropped");
	
		// clear the draggedPiece reference
		draggedPiece = null;
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