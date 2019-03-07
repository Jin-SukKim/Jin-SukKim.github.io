
let jsonData = []
let count = 0;
let rowIndex, table = document.getElementById("table");

function addQ(){
	
	let nameInput = document.getElementById("question").value
	let answers =[]
	let radios = document.getElementsByName("mc")
	let answer
	jsonElement = {}

	
	for (let i = 0; i < 4; i++) {
		answers[i] = document.getElementById(i).value
		if (radios[i].checked) {
			// alert("choice " + i)
			answer = i
		}
	}
	
	jsonElement.id = count;
	jsonElement.questions = nameInput
	jsonElement.choices = answers
	jsonElement.answer = answer

	jsonData.push(jsonElement)
	count++;
	
	newForm();
	
	let clearInput = document.getElementById("quiz");
	clearInput.reset();
	
}


function newForm() {
	let before = document.getElementById("list")
	before.innerHTML = ''

	for (let x = 0; x < jsonData.length; x++) {
		let br = document.createElement('br')
		
		let formQ = document.createElement("form");
		formQ.setAttribute("id", "addedQ");
		
		let q = document.createElement('input');
		
		q.setAttribute('type', 'text')
		q.setAttribute('id', 'editQ' + x)
		q.value = jsonData[x].questions


		formQ.appendChild(q)
		formQ.appendChild(br)
		formQ.appendChild(br)

		for (let y = 0; y < 4; y++) {
			let a = document.createElement("input");
			a.setAttribute('type', 'radio');
			a.setAttribute('name', 'mc');
			a.setAttribute('id', 'editR' + x + y)

			let choice = jsonData[x].choices[y]

			let b = document.createElement('input')
			b.setAttribute('type', 'text')
			b.setAttribute('id', 'editI' + x + y)
			b.value = choice


			formQ.appendChild(a)
			formQ.appendChild(b)
			let space = document.createElement('br')
			formQ.appendChild(space)

			if (jsonData[x].answer == y) {
				a.checked = true;
			}
			
		}

		let update = document.createElement('button')
		update.setAttribute('type', 'button')
		update.setAttribute('onclick', 'editQ(' + x + ')')
		let updateText = document.createTextNode("edit")
		update.appendChild(updateText)


		let del = document.createElement('button')
		del.setAttribute('type', 'button')
		del.setAttribute("onclick", "deleteQ(" + x + ")")
		let delText = document.createTextNode("delete")
		del.appendChild(delText)


		formQ.appendChild(del)
		formQ.appendChild(update)

		
		let br2 = document.createElement('br')
		document.getElementById('list').appendChild(formQ);
		document.getElementById('list').appendChild(br2);

	}
}

function deleteQ(index) {
	jsonData.splice(index, 1)
	newForm()
}

function editQ(index) {
	jsonData[index].questions = document.getElementById('editQ' + index).value

	for (let x = 0; x < 4; x++) {
		jsonData[index].choices[x] = document.getElementById('editI' + index + x).value

		if(document.getElementById('editR' + index + x).checked) {
			jsonData[index].answer = x;
		}
	}

	newForm()
}


function save() {
	let jsonQuiz = JSON.stringify(jsonData)
	localStorage.setItem('quiz', jsonQuiz)
}

function clearStorage() {
	localStorage.clear()
}





