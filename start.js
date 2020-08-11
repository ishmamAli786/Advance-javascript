window.onload = function () {
    show(0);
}
let questions = [
    {
        id: 1,
        question: "What is the Full Form Of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomly Access Memory",
            "Run Accept Memory",
            "None Of These"
        ]
    },
    {
        id: 2,
        question: "What is the Full Form of CPU ?",
        answer: "Central Processing Unit",
        options: [
            "Central Programming Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None Of These"
        ]
    }, {
        id: 3,
        question: "What is the Full Form of E-mail ?",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None Of These"

        ]
    }
]
function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome-form"]["name"].value;
    // store player name in session storage
    sessionStorage.setItem('username', name)
    location.href = "quiz.html";
}
let question_count = 0;
let quiz_point = 0;
function nexts() {
    if(question_count==questions.length-1){
        location.href="end.html";
        return;
    }
    let answer = document.querySelector("li.option.active").innerHTML;
    //check either useranswer is right or wrong
    if (answer == questions[question_count].answer) {
        quiz_point += 10;
        sessionStorage.setItem("points : ",quiz_point);
    }
    question_count++
    show(question_count);
}
function show(count) {
    let question = document.getElementById('questions');
    // question.innerHTML="<h2>"+questions[count].question+"</h2>";
    question.innerHTML = `<h2>${questions[count].question}</h2> 
  <ul class="option-group">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul>`;
    toggleActive();

}
function toggleActive() {
    let option = document.querySelectorAll('li.option');
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}