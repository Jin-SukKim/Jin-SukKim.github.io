let row = 3;
let col = 3;
let userFlip = [];
let correct = [];
let score = 0;
let start = false;

var tiles = [];

function matrix() {
	let board = document.getElementById("container");
	board.innerHTML = '';
	
	for(let i=0; i<col; i++) {
		let br = document.createElement('br');
		board.appendChild(br);
		
		let x = document.createElement('div');
		x.className = 'tile';
		for(let j=0; j<row; j++) {
			let y = document.createElement('div');
			y.className = 'tile';
			
			board.appendChild(x);
			board.appendChild(y);
		}
	}
}

matrix();
	