var summerScore = 0; // store summer score
var winterScore = 0; // store winter score
var questionCount = 0; // store total score

var result = document.getElementById("result");



var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

//Listen for click on answer button and call function if clicked
q1a1.addEventListener("click", summer);
q1a2.addEventListener("click", winter);

q2a1.addEventListener("click", winter);
q2a2.addEventListener("click", summer);

q3a1.addEventListener("click", summer);
q3a2.addEventListener("click", winter);

q4a1.addEventListener("click", summer);
q4a2.addEventListener("click", winter);

q5a1.addEventListener("click", winter);
q5a2.addEventListener("click", summer);

function summer() {
  summerScore += 1;
  questionCount += 1;
  console.log("question count = " + questionCount + ", summer count = " + summerScore);

  if (questionCount == 5) {
    console.log("The quiz is done!");

    updateResult();
  }
}

function winter() {
  winterScore += 1;
  questionCount += 1;
  console.log("question count = " + questionCount + ", winter count = " + winterScore);

  if (questionCount == 5) {
    console.log("The quiz is done!");

    updateResult();
  }
}

  function updateResult() {
    if (summerScore >= 3) {
      result.innerHTML = "You are a summer person!";
      console.log("You are a summer person!");
    }
    else if (winterScore >= 3) {
      result.innerHTML = "You are a winter person!";
      console.log("You are a winter person!");
    }
  }
