
function callQuiz() {
	let savedQuiz = localStorage.getItem('quiz');
	let parsedQuiz = JSON.parse(savedQuiz);

	if (Array.isArray(parsedQuiz)) {
		return parsedQuiz;
	} else {
		alert("Error");
		return;
	}

	
}

function displayQuiz() {
	let quiz = callQuiz();
	let display = document.createElement('form');
	let br = document.createElement('br');

	display.setAttribute('id', 'quiz');

	for (let x =0; x< quiz.length; x++) {

		let br = document.createElement('br');
		let q = document.createElement('p');
		q.setAttribute('id', 'q' + x);
		let question =  document.createTextNode("Q" + x + ") " + quiz[x].questions);
		
		q.appendChild(question);
		q.appendChild(br);

		display.appendChild(q);

		for (y=0; y< 4; y++) {
			let br = document.createElement('br');
			let a = document.createElement('input');
			a.setAttribute('type', 'radio');
			a.setAttribute('name', x);
			a.setAttribute('id', 'radio' + x + y);
			a.value = quiz[x].choices[y];
			
			let b = document.createElement('label');
			let answer = document.createTextNode(quiz[x].choices[y]);
			b.appendChild(answer);
			b.setAttribute('id', "choice" + x + y);
			

			display.appendChild(a);
			display.appendChild(b);
			display.appendChild(br);
		}
	}
	document.getElementById('quizDisplay').appendChild(display);
}

function validate() {
	let key = answerKey()
	let score = 0
	let q = callQuiz()
	
	for (let i =0; i < q.length; i++) {
		for (let j =0; j < 4; j++) {
			if(q[i].answer == j) {
				let a = document.getElementById('choice'+ i + j);
				let highlight = document.createElement('span');
				highlight.innerHTML = a.innerHTML;

				a.innerHTML = "";
				a.appendChild(highlight);
			}

			let selRadio = document.getElementById('radio' + i + j);
			if (selRadio.checked) {
				let rb = document.getElementById('choice'+ i + j);
				let selectHighlight = document.createElement('span');
				selectHighlight.innerHTML = rb.innerHTML;
				

				rb.innerHTML = "";
				rb.appendChild(selectHighlight);
			}
		}
	}

	for (let x = 0; x < key.length; x++) {
		let check = document.getElementsByName(x);
		if (check[key[x]].checked) {
			score++;
		}
	}

	alert("Your Score is: " + score + '/' + answerKey().length);
}

function answerKey() {
	let quiz = callQuiz();
	let key = [];
	for (let u =0; u <quiz.length; u++) {
		key.push(quiz[u].answer);
	}
	return key;
}

answerKey();
displayQuiz();

