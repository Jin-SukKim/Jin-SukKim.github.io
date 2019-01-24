let questions = [
					{
						questionId: "1) What would be the output of this script?" + 
						   "<div>" + '<span style="color: #ff0000;">let</span>' + " mul = 2;" + "</div>" +
						   "<div>" + '<span style="color: #3366ff;">for</span>' + "(" + '<span style="color: #ff0000;"> let</span>' + " i = 3; i < 5; i++) {" +
						   "<div>" + "&nbsp; &nbsp;mul = mul * i;" + "</div>" +
						   "<div>" + "}" + "</div>" +
						   "<div>" + "&nbsp;" + "</div>" +
						   "<div>" +
						   "<div>" +
						   		"<div>" + '<span style="color: #3366ff;">console</span>' + ".log(mul);" + "</div>" +
						   "</div>" +
						   "</div>" +
						   "</div>", 
						formName:"form1", 
						radioName:"q1", 
						values:["a) 22", "b) 33", "c) 44", "d) 24"]
					}, 
					{
						questionId: "2) Which of the following is the correct type of functions in JavaScript?" + 
							"<div>" + "<div>" +
							'<span style="color: #ff0000;">var</span>' + " a = 5/7;" +  "<br>" +
							'<span style="color: #ff0000;">var</span>' + " b = 13/14;"  + "<br>" +
							'<span style="color: #ff0000;">var</span>' + " theBiggest = function() { " + "<br>" +
							"&nbsp;&nbsp;&nbsp;&nbsp;" +	'<span style="color: #ff0000;">var</span>' + " result;" + "<br>" +
							"&nbsp;&nbsp;&nbsp;&nbsp;" +	"a>b ? result = [\"a\",a] : result = [\"b\",b]; " +"<br>" +
							"&nbsp;&nbsp;&nbsp;&nbsp;" +	"console.log(result); " + "<br>" +
							"	}" +
							"</div>" + "</div>", 
						formName:"form2", 
						radioName:"q2", 
						values:["a) Named functions", "b) Anonymous functions", "c) Immediately invoked function expressions", "d) Standard library functions"]
					},
					{
						questionId: "3)  Will following function cause error?" +
						"<div>" + "<div>" +
						'<span style="color: #ff0000;">var</span>' + " pens;" + "<br>" + 
						"pens = [\"red\", \"blue\", \"green\", \"orange\"];" + "<br>" + "<br>" +
						"pens[3] = \"purple\";" + "<br>" +
						'<span style="color: #ff0000;">var</span>' + " fourthPen = pens[3];" + "<br>" + "<br>" +
						"console.log(fourthPen);" +
						"</div>" + "</div>", 
						
						formName:"form3", 
						radioName:"q3", 
						values:["a) Yes", "b) No"]
					},
					{
						questionId: "4) Inside which HTML element do we put the JavaScript?", 
						formName:"form4", 
						radioName:"q4", 
						values:["a) scripting", "b) script", "c) javascript", "d) js"]
					},
					{
						questionId: "5) is Javascript case sensitive?", 
						formName:"form5", 
						radioName:"q5", 
						values:["a) Yes", "b) No"]
					}
				];

let userInput = prompt("How many questions? (1 to 5 only)");
  
if(userInput > 0 && userInput < 6) {
	for (let i = 0; i < userInput; i++) {
		let Q = questions[i];	  
		let theValues = Q.values;
		let num;
		let label = document.createElement("label");
		let theForm = document.createElement("form");
		
		theForm.setAttribute('name', Q.formName);
			
		for (let j = 0; j < theValues.length; j++) { 
			num = document.createElement("input");
			num.setAttribute('type', "radio");
			num.setAttribute('name', Q.radioName);
			num.setAttribute('value', theValues[j]);

			console.log(Q);
			
			label.appendChild(num);
			label.innerHTML += "<span>" + theValues[j] + "</span><br/>";
			theForm.appendChild(label);
		}
		
		document.body.innerHTML += Q.questionId;
		document.body.appendChild(theForm);
	}
} else {
	alert("Must be a number between 1 - 5")
}

