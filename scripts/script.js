
var timeLeft = 90;

var highScoreBtn = document.getElementById('high-scores');
var startBtn = document.getElementById('start');

var timerEl = document.getElementById('countdown');

var headerEl = document.getElementById("header")
var contentContainerEl = document.getElementById("content-container");
var contentEl = document.getElementById("content");



function printTimeLeft(time) {
    timerEl.textContent = "Time: " + time;
}


// Timer that counts down from 5
function countdown() {


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
    questionEl.className = "question-text";
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
    questionButton4El.id = "button3";


    buttonContainerEl.appendChild(questionButton1El);
    buttonContainerEl.appendChild(questionButton2El);
    buttonContainerEl.appendChild(questionButton3El);
    buttonContainerEl.appendChild(questionButton4El);

};

function createGameOverScreen(score) {

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



highScoreBtn.onclick = createHighScoreScreen;
startBtn.onclick = createQuizElements;


































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