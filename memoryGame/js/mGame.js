let current = 0;
let wrong = false;
let total = 0;
let isExit = false;
let col = 3;
let row = 3;
let matrix = [];
let count = 0;
let correct = [];
let checking = false;
let isCorrect = false;
let clear = false;
let score = 1;
for(let i =0; i<col+row; i++) {
	matrix[i] = "assets/default.png";
}
function game() {
	let board = document.createElement('div');
	board.id = 'game';
	document.body.appendChild(board);
	
	for (let i=0; i<col; i++) {
		let br = document.createElement('br');
		board.appendChild(br);
		
		for(let j = 0; j<row; j++) {
			console.log('1');
			matrix[i+j] = document.createElement('img');
			matrix[i+j].src = "assets/default.png";
			matrix[i+j].id = count;
			matrix[i+j].setAttribute("onclick", "flip(this)");
			count++;
			
			matrix[i+j].style.visibility = 'visible';
			board.appendChild(matrix[i+j]);
			
			matrix.className = 'board';
			matrix.alt = '';
		}
	}
	
}




function randomTile(max) {
    return Math.floor(Math.random() * max);
}

function checkA() {
	return row>col ? row : col;
	
}

function rotate() {
	console.log("3");
    document.getElementById("game").classList.remove('containerrotate');
    document.getElementById("game").classList.add("spinBoard")
}

function Qflip() {
	for(let i=0; i<checkA(); i++) {
		let check = randomTile(row+col);
		if(correct) {
			for(let j=0;j<correct.length; j++) {
				
				while(correct[j] == check) {
					console.log("2");
					check = randomTile(row+col);
					checking = true;
				}
				if(checking)
					break;
			}
			checking = false;
		}
		correct[i] = check;
		matrix[check].src = "assets/blue.png";
		total++;
	}
	
	setTimeout(function () {
		hide();
		rotate();
	}, 1500);
}

function nextLevel() {
	if(clear) {
		if(row==col) {
			col++;
		} else {
			row++;
		}
		game();
		Qflip();
	}
}
function hide() {
	for(let i=0; i<checkA(); i++) {
		matrix[correct[i]].src = "assets/default.png";
	}
}
function flip(obj) {
	for (let i=0; i<checkA(); i++) {
		if(obj.id == correct[i]) {
			if(total==1) {
				obj.src ="assets/correct.png";
				scoring();
				score++;
				nextLevel();
			}
			obj.src = "assets/blue.png";
			total--;
			isCorrect = true;
		}
	}
	if(!isCorrect) {
		obj.src = "assets/error.png";
		playSound();
		score--;
		if(score==0)
			terminate();
		scoring();
		
		hide();
		Qflip();
	}
	isCorrect = false;
	
}

function start() {
	console.log("1");
	Qflip();
}

function terminate() {
	score = 1;
    if (confirm('Terminating game, quit?')) {
        window.location.reload(true);
    }
}

function playSound() {
    let playSound = document.getElementById('soundFile');
    playSound.play();
}


function lose() {
	if (confirm('You lose')) {
        window.location.reload(true);
    }
}
function scoring() {
	document.getElementById("scoreText").innerHTML = "Score: " + score;
	
}
// load the board and correct tiles
window.addEventListener('load', function() {
    game();

});