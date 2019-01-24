var html = '';
var c;

for (var i = 65; i <= 90; i++) {
	if ( i == 78){
		 html += '<br />';
	}
	c = String.fromCharCode(i);
	html += '<button onclick="set(\'' + c + '\');">' + c + '</button>';
}

document.getElementById('but').innerHTML = html;

function set(e) {
  alert(e);
}