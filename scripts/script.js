// ------------variables------------
var timeInterval;
var timeLeft = 90;
var roundScore = 0;
var currentQuestion = 0;

var resultTimeout;

var highScoreBtn = document.getElementById('high-scores');
var startBtn = document.getElementById('start');

var mainEl = document.getElementById("main")
var timerEl = document.getElementById("countdown");
var headerEl = document.getElementById("header")
var contentContainerEl = document.getElementById("content-container");
var contentEl = document.getElementById("content");

var highScores;

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
var shuffledQuestions;


// ---------------functions--------------------


//     ------page layout functions------

// creates container that other elements are put into
// this is also what is removed by deleteContent
function newContainer(newClass) {

    contentEl = document.createElement("div");
    contentEl.className = newClass;
    contentEl.id = "content";

    contentContainerEl.appendChild(contentEl);

}

// create quiz elements
function createQuizElements(taskId) {

    // clear contents of the main container
    deleteContent();

    // make new 'container'
    newContainer("quiz-container");

    // create question object
    var questionEl = document.createElement("h1");
    questionEl.id = "question-text";
    questionEl.textContent = "If you see this there has been an error. Build better code than this.";

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


    clearInterval(timeInterval);

    if (score < 0) { score = 0 };

    printTimeLeft(score);

    roundScore = score;

    // clear contents of the main container
    deleteContent();

    // make new 'container'
    newContainer("game-over");

    var allDoneEl = document.createElement("h1");
    allDoneEl.textContent = "All done!";

    contentEl.appendChild(allDoneEl);

    var finalScoreEl = document.createElement("p");
    finalScoreEl.id = "final-score";
    finalScoreEl.textContent = "Your final score is " + score + ".";

    contentEl.appendChild(finalScoreEl)

    var initialsFormEl = document.createElement("form");
    // initialsFormEl.className = "flex-container";
    initialsFormEl.innerHTML = "<label for='initials'>Enter initials: </label><input type='text' id='initials-field' name='initials'><button id='submit'>Submit</button>";

    contentEl.appendChild(initialsFormEl)

    var submitBtn = document.getElementById('submit');

    submitBtn.onclick = saveHighScores;



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
    scoresContainerEl.id = "scores-container";

    contentEl.appendChild(scoresContainerEl)

    createHighScoreList();


    var buttonsEl = document.createElement("div");
    buttonsEl.className = "hsButton-container"
    // initialsFormEl.className = "flex-container";
    buttonsEl.innerHTML = "<button class='hsButton' id='go-back'>Go back</button><button class='hsButton' id='clear-high-scores'>Clear high scores</button>";

    contentEl.appendChild(buttonsEl)

    var goBackBtn = document.getElementById('go-back');
    var clearHighScoresBtn = document.getElementById('clear-high-scores');

    goBackBtn.onclick = goToIndex;
    clearHighScoresBtn.onclick = clearHighScores;

}

function createHighScoreList() {
    getHighScores();

    if (highScores !== null) {
        highScores.sort((a, b) => {
            return b.score - a.score;
        });


        var scoresContainerEl = document.getElementById("scores-container");
        // scoresContainerEl.textContent = "test";
        var scoreElstring = "";

        for (var i = 0; i < highScores.length; i++) {
            scoreElstring += "<p class='score'>" + (i + 1) + ". " + highScores[i].initials + " - " + highScores[i].score + "</p>";
        }

        scoresContainerEl.innerHTML = scoreElstring;
    }
}

// removes content from within main to allow change of page elements
function deleteContent() {
    contentEl.remove();
}

// go to index.html when go back button is clicked in high score page
function goToIndex() {
    window.location.href = "./index.html"
};


//      ------ timer functions ------

// Starts and increments the timer
function startTimer() {


    printTimeLeft(timeLeft);
    timeLeft--;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {

        if (timeLeft > 0) {

            printTimeLeft(timeLeft);
            // console.log(timeLeft);
            timeLeft--;
        }
        else if (timeLeft <= 0) {
            printTimeLeft("");
            clearInterval(timeInterval);
            createGameOverScreen(0);
        }

    }, 1000);
}

// prints the time on the screen
function printTimeLeft(time) {
    timerEl.textContent = "Time: " + time;
}


//      ------save/get/clear score data------

function getHighScores() {
    highScores = localStorage.getItem('high-scores');
    highScores = JSON.parse(highScores);
    // console.log(highScores);
}

function saveHighScores(event) {
    event.preventDefault();

    getHighScores();
    var initialsValue = document.getElementById("initials-field").value;
    var newHighScore = { initials: initialsValue, score: roundScore }
    if (highScores === null) {
        highScores = [newHighScore];
    }
    else {
        highScores[highScores.length] = newHighScore;
    }

    localStorage.setItem("high-scores", JSON.stringify(highScores));


    // console.log(initialsValue);
    // console.log(roundScore);
    // console.log(highScores);
    // alert("it worked!");

    createHighScoreScreen();
}

function clearHighScores() {
    localStorage.removeItem("high-scores");
    createHighScoreScreen();
}


//      ------quiz functions------

// shuffle questions for quiz
function shuffle(a) {
    // I found and am using Fisher-Yates shuffle algorithm as it is far better than my method
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// handles placing relevent text for questions and buttons
// also sets up button handlers for calling answerQuestion()
function nextQuestion(questionNumber) {

    questionEl = document.getElementById("question-text")
    questionButton1El = document.getElementById("button1")
    questionButton2El = document.getElementById("button2")
    questionButton3El = document.getElementById("button3")
    questionButton4El = document.getElementById("button4")


    if (questionNumber < shuffledQuestions.length && timeLeft > 0) {

        questionEl.textContent = shuffledQuestions[questionNumber].q;
        questionButton1El.textContent = shuffledQuestions[questionNumber].a1;
        questionButton2El.textContent = shuffledQuestions[questionNumber].a2;
        questionButton3El.textContent = shuffledQuestions[questionNumber].a3;
        questionButton4El.textContent = shuffledQuestions[questionNumber].a4;

        questionButton1El.onclick = answerQuestion;
        questionButton2El.onclick = answerQuestion;
        questionButton3El.onclick = answerQuestion;
        questionButton4El.onclick = answerQuestion;


    }
    else {
        createGameOverScreen(timeLeft);
    }
}

// handles button inputs and decides if answers are correct or not
// calls displayAnswerResult() to put feedback on screen
// then calls nextQuestion() to continue quiz
function answerQuestion() {
    if (event.srcElement.id === shuffledQuestions[currentQuestion].c) {
        displayAnswerResult("Correct!");
    }
    else {
        timeLeft -= 10
        displayAnswerResult("Incorrect.");
    }

    currentQuestion++
    nextQuestion(currentQuestion)

}

// displays correct or incorrect at bottom of screen for 4 seconds
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



// starts the quiz and sets variables when startBtn is clicked
function startQuiz() {
    timeLeft = 90;
    shuffledQuestions = questions.slice(0)
    shuffledQuestions = shuffle(shuffledQuestions)

    console.log(shuffledQuestions);

    createQuizElements();
    nextQuestion(0)
    startTimer();

}


highScoreBtn.onclick = createHighScoreScreen;
startBtn.onclick = startQuiz;