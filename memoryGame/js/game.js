let tiles = [];
let answer = [];
let col = 3;
let row = 3;
let asnNum = 3;
let count = 0;
let score = 1;
let degree = 90;
let pass = false;
function game(col, row) {
	let board = document.getElementById(boardName);
	for(let i=0; i< col; i++) {
		let br = document.createElement(brElement);
		board.appendChild(br);
		
		tiles[i] = [];
		for(let j=0; j<row; j++) {
			let x = document.createElement(divElement);
			x.className = tileClass;
			x.setAttribute(click, flipMethod);
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
				tiles[i][j].style.transition = tTime2;
				tiles[i][j].style.background = Qback;
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
				tiles[i][j].style.transition = tTime1;
				tiles[i][j].style.background = front;
			}
		}
	}
}

function flip(obj) {
	obj.style.transform = flipCss;
	obj.style.transition = tTime3;
	if(!obj.id) {
		obj.style.background = wrongBack;
		setTimeout(function () {
			clear();
			levelDown();
		}, 1200);
	} else {
		if(obj.id != flipId) {
			if(count==1) {
				obj.style.background = correctBack;
				pass = true;
				setTimeout(function () {
					clear();
					nextLevel();
				}, 1200);
			}
			else
				obj.style.background = cFlip;
			obj.id = flipId;
			score++;
			document.getElementById(scoreText).innerHTML = scoreT + score;
			count--;
		}
	}
}

function rotate() {
	document.getElementById(boardName).style.transitionDuration = tTIme4;
	document.getElementById(boardName).style.transform = rot + degree +"deg)";
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

	score++;
	asnNum++;
	if(asnNum>12) {
		asnNum = 12;
	}
	document.getElementById(scoreText).innerHTML = scoreT + score;
	upSound
	game(col, row);
}

function levelDown() {
	if(pass) {
		if(row==col) 
			row--;
		else 
			col--;
	} else {
		asnNum++;
	}
	if(col<3 || row<3) {
		col = 3;
		row = 3;
		asnNum = 4;
		score = 1;
	}
	asnNum--;
	--score;
	if(score<1)
		endGame();
	document.getElementById(scoreText).innerHTML = scoreT + score;
	downSound();
	game(col, row);
}

function harder() {
	
	
}
function clear() {
	let board = document.getElementById(boardName);
    while(board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }
}


function terminate() {
	alert(terminating);
	localStorage.setItem(setScore, score);
	window.location = submitPage;
}

function endGame() {
	alert(ending);
	localStorage.setItem(setScore, score);
	window.location = submitPage;
}

function start() {
	clear();
	score = 1;
	asnNum = 3;
	pass = false;
	document.getElementById(scoreText).innerHTML = scoreT + score;
	game(3,3);
}

function downSound() {
    let playSound = document.getElementById(down);
    // playSound.play();
}

function upSound() {
    let playSound = document.getElementById(up);
    // playSound.play();
}
