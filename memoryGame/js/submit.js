let userScore = localStorage.getItem(setScore);
document.getElementById(getScore).value = userScore;
document.getElementById(getScore).innerHTML = scoreT + userScore;

function setName() {
    let name = document.getElementById("name").value;
    localStorage.setItem("Name", name);
}