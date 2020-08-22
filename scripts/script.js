
var timeLeft = 90;
var currentQuestion = 0;

var resultTimeout;

var highScoreBtn = document.getElementById('high-scores');
var startBtn = document.getElementById('start');

var timerEl = document.getElementById('countdown');

var headerEl = document.getElementById("header")
var contentContainerEl = document.getElementById("content-container");
var contentEl = document.getElementById("content");

var questions = [
    { q: "Arrays in JavaScript can be used to store __________.", a1: "numbers and strings", a2: "other arrays", a3: "booleans", a4: "all of the above", c: "button4", },
    { q: "String values must be enclosed within __________ when being assigned to variables.", a1: "commas", a2: "curly brackets", a3: "quotes", a4: "parenthesis", c: "button3", },
    { q: "Commonly used data types DO NOT include:", a1: "strings", a2: "booleans", a3: "alerts", a4: "numbers", c: "button3", },
    { q: "A very useful tool used during development and debugging for printing content to the debugger is:", a1: "JavaScript", a2: "terminal/bash", a3: "for loops", a4: "console.log", c: "button4", },
    { q: "The condition in an if / else statement is enclosed with __________.", a1: "quotes", a2: "curly brackets", a3: "parenthesis", a4: "square brackets", c: "button3", },
    { q: "Arrays must be enclosed within __________ when being assigned to variables.", a1: "square brackets", a2: "quotes", a3: "curly brackets", a4: "parenthesis", c: "button1", },
    { q: "Which of these evaluates to a falsy value?", a1: "0", a2: "null", a3: "undefined", a4: "all of the above", c: "button4", },
    { q: "In JavaScript, the code that is to be run in a function must be enclosed with __________.", a1: "single quotes", a2: "curly brackets", a3: "parenthesis", a4: "semicolons", c: "button2", },
];

function printTimeLeft(time) {
    timerEl.textContent = "Time: " + time;
}


// Timer that counts down from 5
function startTimer() {


    printTimeLeft(timeLeft);
    timeLeft--;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

        if (timeLeft > 0) {

            printTimeLeft(timeLeft);
            console.log(timeLeft);
            timeLeft--;
        }
        else if (timeLeft <= 0) {
            printTimeLeft("");
            clearInterval(timeInterval);
            createGameOverScreen(0);
        }

    }, 1000);
}

function getHighScores() {

}

function saveHighScores() {

}

function deleteContent() {
    contentEl.remove();
}

function newContainer(newClass) {

    contentEl = document.createElement("div");
    contentEl.className = newClass;
    contentEl.id = "content";

    contentContainerEl.appendChild(contentEl);

}


// create start screen

function createStartScreen() {

    // make header visable
    headerEl.style.visibility = "visible";

    // clear contents of the main container
    deleteContent();

    // make new 'container'
    newContainer("welcome");

    // create title element
    var mainTitleEl = document.createElement("h1");
    mainTitleEl.className = "welcome";
    mainTitleEl.textContent = "Coding Quiz Challenge";

    contentEl.appendChild(mainTitleEl);

    // create description

    var descriptionEl = document.createElement("p");
    descriptionEl.className = "welcome description";
    descriptionEl.innerHTML = "Try to answer the following code related questions within the time limit.<br>Keep in mind that incorrect answers will result in a 10 second time/score penalty.";

    contentEl.appendChild(descriptionEl);

    // create start button

    var startBtnEl = document.createElement("button");
    startBtnEl.className = "welcome";
    startBtnEl.id = "start";
    startBtnEl.textContent = "Start";


    contentEl.appendChild(startBtnEl);

    startBtn = document.getElementById('start');
    startBtn.onclick = createQuizElements;

};



// create quiz elements

var createQuizElements = function (taskId) {

    // clear contents of the main container
    deleteContent();

    // make new 'container'
    newContainer("quiz-container");

    // create question object
    var questionEl = document.createElement("h1");
    questionEl.id = "question-text";
    questionEl.textContent = "placeholder for a long string of text to test how this looks on the screen... euaowieu faiwufabvekaufaeaefakueyg auwe a ie alew uflaief ailuweg f";

    contentEl.appendChild(questionEl);

    // create answer buttons and containing div

    var buttonContainerEl = document.createElement("div");
    buttonContainerEl.className = "button-container";

    contentEl.appendChild(buttonContainerEl);

    var questionButton1El = document.createElement("button");
    questionButton1El.className = "answer-button";
    questionButton1El.id = "button1";

    var questionButton2El = document.createElement("button");
    questionButton2El.className = "answer-button";
    questionButton2El.id = "button2";

    var questionButton3El = document.createElement("button");
    questionButton3El.className = "answer-button";
    questionButton3El.id = "button3";

    var questionButton4El = document.createElement("button");
    questionButton4El.className = "answer-button";
    questionButton4El.id = "button4";


    buttonContainerEl.appendChild(questionButton1El);
    buttonContainerEl.appendChild(questionButton2El);
    buttonContainerEl.appendChild(questionButton3El);
    buttonContainerEl.appendChild(questionButton4El);

};

function createGameOverScreen(score) {

    if (score < 0) {score = 0};

    // clear contents of the main container
    deleteContent();

    // make new 'container'
    newContainer("game-over");

    var allDoneEl = document.createElement("h1");
    allDoneEl.textContent = "All done!";

    contentEl.appendChild(allDoneEl);

    var finalScoreEl = document.createElement("p");
    finalScoreEl.textContent = "Your final score is " + score + ".";

    contentEl.appendChild(finalScoreEl)

    var initialsFormEl = document.createElement("form");
    // initialsFormEl.className = "flex-container";
    initialsFormEl.innerHTML = "<label for='initials'>Enter initials: </label><input type='text' id='initials-field' name='initials'><button id='submit'>Submit</button>";

    contentEl.appendChild(initialsFormEl)




}

function displayAnswerResult(answerResult) {

    var answerResultEl = document.getElementById('answer-result');
    if (answerResultEl) {
        answerResultEl.textContent = answerResult;
    }
    else {
        answerResultEl = document.createElement("p");
        answerResultEl.id = "answer-result";
        answerResultEl.textContent = answerResult;

        mainEl.appendChild(answerResultEl);
    }

    clearTimeout(resultTimeout);

    resultTimeout = window.setTimeout(function () {
        answerResultEl.remove();
    }, 4000);

    




}


function createHighScoreScreen() {

    //hide header

    headerEl.style.visibility = "hidden";




    // clear contents of the main container
    deleteContent();

    // make new 'container'
    newContainer("high-scores");

    var highScoreTitleEl = document.createElement("h1");
    highScoreTitleEl.textContent = "High scores";

    contentEl.appendChild(highScoreTitleEl);

    var scoresContainerEl = document.createElement("div");
    scoresContainerEl.className = "scores-container";

    contentEl.appendChild(scoresContainerEl)




    var buttonsEl = document.createElement("div");
    // initialsFormEl.className = "flex-container";
    buttonsEl.innerHTML = "<button class='hsButton' id='go-back'>Go back</button><button class='hsButton' id='clear-high-scores'>Clear high scores</button>";

    contentEl.appendChild(buttonsEl)

    var goBackBtn = document.getElementById('go-back');
    var clearHighScoresBtn = document.getElementById('clear-high-scores');

    goBackBtn.onclick = createStartScreen;
    clearHighScoresBtn.onclick = createQuizElements;

}

function answerQuestion() {
    if (event.srcElement.id === questions[currentQuestion].c) {
        displayAnswerResult("Correct!");
    }
    else {
        timeLeft -= 10
        displayAnswerResult("Incorrect.");
    }

    currentQuestion++
    nextQuestion(currentQuestion)

}

function nextQuestion(questionNumber) {

    questionEl = document.getElementById("question-text")
    questionButton1El = document.getElementById("button1")
    questionButton2El = document.getElementById("button2")
    questionButton3El = document.getElementById("button3")
    questionButton4El = document.getElementById("button4")


    if (questionNumber < questions.length && timeLeft > 0) {

        questionEl.textContent = questions[questionNumber].q;
        questionButton1El.textContent = questions[questionNumber].a1;
        questionButton2El.textContent = questions[questionNumber].a2;
        questionButton3El.textContent = questions[questionNumber].a3;
        questionButton4El.textContent = questions[questionNumber].a4;

        questionButton1El.onclick = answerQuestion;
        questionButton2El.onclick = answerQuestion;
        questionButton3El.onclick = answerQuestion;
        questionButton4El.onclick = answerQuestion;


    }
    else {
        createGameOverScreen(timeLeft);
    }
}

function startQuiz() {
    createQuizElements();

    nextQuestion(0)

    startTimer();

}



highScoreBtn.onclick = createHighScoreScreen;
startBtn.onclick = startQuiz;


































// timer javascript


var mainEl = document.getElementById('main');


var message =
    'Congratulations! Now you are prepared to tackle the Challenge this week! Good luck!';
var words = message.split(' ');










// // create answer buttons
// var editButtonEl = document.createElement("button");
// editButtonEl.textContent = "Edit";
// editButtonEl.className = "btn edit-btn";
// editButtonEl.setAttribute("data-task-id", taskId);

// actionContainerEl.appendChild(editButtonEl);

// // create delete button
// var deleteButtonEl = document.createElement("button");
// deleteButtonEl.textContent = "Delete";
// deleteButtonEl.className = "btn delete-btn";
// deleteButtonEl.setAttribute("data-task-id", taskId);

// actionContainerEl.appendChild(deleteButtonEl);

// var statusSelectEl = document.createElement("select");
// statusSelectEl.className = "select-status";
// statusSelectEl.setAttribute("name", "status-change");
// statusSelectEl.setAttribute("data-task-id", taskId);

// actionContainerEl.appendChild(statusSelectEl);

// var statusChoices = ["To Do", "In Progress", "Completed"];

// for (var i = 0; i < statusChoices.length; i++) {
//     // create option element
//     var statusOptionEl = document.createElement("option");
//     statusOptionEl.textContent = statusChoices[i];
//     statusOptionEl.setAttribute("value", statusChoices[i]);

//     // append to select
//     statusSelectEl.appendChild(statusOptionEl);
// }

// return actionContainerEl;








// // storage javascript

// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");
// var msgDiv = document.querySelector("#msg");
// var userEmailSpan = document.querySelector("#user-email");
// var userPasswordSpan = document.querySelector("#user-password");

// renderLastRegistered();

// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
//     // Fill in code here to retrieve the last email and password.
//     // If they are null, return early from this function
//     // Else set the text of the userEmailSpan and userPasswordSpan 
//     // to the corresponding values form local storgage
//     if (localStorage.getItem("email") === null ||
//         localStorage.getItem("password") === null) {
//         console.log("returned 'NULL'")
//         return;
//     }
//     else {
//         userEmailSpan.textContent = localStorage.getItem("email");
//         userPasswordSpan.textContent = localStorage.getItem("password");
//     }
// };

// signUpButton.addEventListener("click", function (event) {
//     event.preventDefault();

//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;

//     if (email === "") {
//         displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//         displayMessage("error", "Password cannot be blank");
//     } else {
//         displayMessage("success", "Registered successfully");

//         // Save email and password to localStorage and render the last registered.
//         localStorage.setItem("email", email);
//         localStorage.setItem("password", password);

//         renderLastRegistered()
//     }
// });