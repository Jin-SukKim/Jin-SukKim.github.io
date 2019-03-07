let tiles = [];
let answer = [];
let col = 3;
let row = 3;
let asnNum = 3;
let count = 0;
let timer = 1000;
let score = 1;
let degree = 90;
let wrong = false;
let initN = false;
let sec = 1.2;
function game(col, row) {
	let board = document.getElementById("game");
	for(let i=0; i< col; i++) {
		let br = document.createElement('br');
		board.appendChild(br);
		
		tiles[i] = [];
		for(let j=0; j<row; j++) {
			let x = document.createElement('div');
			x.className = 'tile';
			x.setAttribute("onclick", "flip(this)");
			tiles[i][j] = x;
			
			board.appendChild(tiles[i][j]);
		}	
	}
	setTimeout(function () {
			randomTile(col, row);
	}, 700);
}

function randomTile(col, row) {
	for(let i =0; i<col; i++) {
		answer[i] = [];
		for(let j=0; j<row; j++) {
			answer[i][j] = 0;
		}
	}
	
	let temp = asnNum;
	while(temp!=0) {
		let x = randomNum(col);
		let y = randomNum(row);
		if(answer[x][y]==0) {
			answer[x][y] = 1;
			--temp;
		}
	}
	Qflip(col,row);
}

function randomNum(max) {
    return Math.floor(Math.random() * (max));
}

function Qflip(col, row) {
	count = 0;
	for(let i=0; i<col; i++) {
		for(let j=0; j<row; j++) {
			if(answer[i][j]==1) {
				count++;
				// tiles[i][j].style.transform = "rotateY(180deg)";
				tiles[i][j].style.transition = "0.5s";
				tiles[i][j].style.background = 'blue';
				tiles[i][j].id =  count;
			}
		}
	}
	
	setTimeout(function () {
		hide(col, row);
		rotate();
	}, timer);	
}

function hide(col, row) {
	for(let i=0; i<col; i++) {
		for(let j=0; j<row; j++) {
			if(answer[i][j]) {
				// tiles[i][j].style.transform = "rotateY(180deg)";
				tiles[i][j].style.transition = "0.2s";
				tiles[i][j].style.background = '#A0522D';
			}
		}
	}
}

function flip(obj) {
	obj.style.transform = "rotateY(180deg)";
	obj.style.transition = "1s";
	if(!obj.id) {
		obj.style.background = 'red';
		setTimeout(function () {
			clear();
			levelDown();
		}, 1200);
		wrong = true;
	} else {
		if(obj.id != "clicked") {
			if(count==1) {
				obj.style.background = '#00FF00';
				setTimeout(function () {
					clear();
					nextLevel();
				}, 1200);
			}
			else
				obj.style.background = 'blue';
			obj.id = "clicked";
			count--;
		}
	}
}

function rotate() {
	document.getElementById('game').style.transitionDuration = "1.2s";
	document.getElementById('game').style.transform = "rotate(" + degree +"deg)";
	degree += 90;
}

function nextLevel() {
	if(row==col) 
		col++;
	else 
		row++;
	
	if(col>7 || row>7) {
		col = 7;
		row = 7;
	}
	
	if(!initN) {
		++score;
		initN = true;
	} else if(initN && score >1)
		score++;
	asnNum++;
	if(asnNum>12) {
		asnNum = 12;
	}
	document.getElementById("scoreText").innerHTML = "Score: " + score;
	game(col, row);
}

function levelDown() {
	if(!initN && score == 1)
		endGame();
	else if(initN && score == 0)
		endGame();
	if(row==col) 
		row--;
	else 
		col--;
	
	if(col<3 || row<3) {
		col = 3;
		row = 3;
		asnNum = 4;
		score = 1;
	}
	asnNum--;
	--score;
	document.getElementById("scoreText").innerHTML = "Score: " + score;
	game(col, row);
}

function harder() {
	
	
}
function clear() {
	let board = document.getElementById('game');
    while(board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }
}

function terminate() {
    if (confirm('Terminating game, quit?')) {
        window.location = '../../COMP4711.html';
    }
}

function endGame() {
    if (confirm('You Died, quit?')) {
        window.location = '../../COMP4711.html';
    }
}

function start() {
	clear();
	game(3,3);
}
