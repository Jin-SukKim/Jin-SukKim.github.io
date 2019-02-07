let quiz = [
					{
						questionId: "1) When does \"this\" refer to the owner object?", 
						quizNum:"q1", 
						values:["a) in a method", "b) alone", "c) in a function", "d) in an event"] // a
					},
					{
						questionId: "<br>2) In a function, in strict mode, \"this\" is undefined", 
						quizNum:"q2", 
						values:["a) true", "b) false"] // a
					},
					{
						questionId: "<br>3) What does \"this\" refer to when used alone?", 
						quizNum:"q3", 
						values:["a) owner object", "b) global object", "c) undefined"] // b
					},
					{
						questionId: "<br>4)Does \"this\" refer to the global object? <br>" 
						+ "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style=\"color:#3366ff;\">var</span> x = <span style=\"color:#3366ff;\">this</this>", 
						quizNum:"q4", 
						values:["a) true", "b) false"] // a
					},
					{
						questionId: "<br>5) what is this code return? <br>"
						+ "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style=\"color:#3366ff;\">function</span> myFunction() { <br>" 
						+ "nbsp; &nbsp; &nbsp; &nbsp; &nbsp;nbsp; &nbsp; <span style=\"color:#3366ff;\">return this;</span> <br>"
						+ "}",
						quizNum:"q5", 
						values:["a) defined", "b) undefined", "c) use strict", "d) not found"] // b
					},
					{
						questionId: "<br>6) What is the valid word to use for calling CSS Style Declaration of class named \"colour\"?" 
						+ "<br> <span style=\"color:#3366ff;\">document</span>.<span style=\"color:#3366ff;\">querySelector</span><span style=\"color:#FF0000;\">(\".colour\")</span>._______", 
						quizNum:"q6", 
						values:["a) color", "b) css", "c) script", "d) style"] // d
					},
					{
						questionId: "<br>7) Is it correct to create methods in DOM? <br>" + ".createTextNode()", 
						quizNum:"q7", 
						values:["a) True", "b) false"] // a
					},
					{
						questionId: "<br>8) Is outerHTML able to access to HTML?", 
						quizNum:"q8", 
						values:["a) Yes", "b) No"] // a
					},
					{
						questionId: "<br>9) Which of the following is not typical DOM events?", 
						quizNum:"q9", 
						values:["a) Media events", "b) Progress events", "c) CSS transition events", "d) Valentine's events"] // d
					},
					{
						questionId: "<br>10) What is the keyword that makes loop stop and skips to the next statement?", 
						quizNum:"q10", 
						values:["a) break", "b) stop", "c) out", "d) go"] // a
					}
				];

let userPrompt = prompt("How many questions? (0 to 10 only)");
  
if(userPrompt >= 0 && userPrompt < 11) {
	for (let i = 0; i < userPrompt; i++) {
		let qNum = quiz[i];	  
		let userQ = qNum.values;
		let userInput;
		let label = document.createElement("label");
		let quizFrom = document.createElement("form");
		
		quizFrom.setAttribute('name', qNum.quizNum);
			
		for (let j = 0; j < userQ.length; j++) { 
			userInput = document.createElement("input");
			userInput.setAttribute("type", "radio");
			userInput.setAttribute("name", qNum.quizNum);
			userInput.setAttribute("value", userQ[j]);
			
			console.log(qNum);
			
			label.appendChild(userInput);
			label.innerHTML += "<span>" + userQ[j] + "</span><br/>";
			quizFrom.appendChild(label);
		}
		document.body.innerHTML += qNum.questionId;
		document.body.appendChild(quizFrom);
	}
} else {
	alert("Must be a number between 0 - 10")
	displayQuestions();
}

