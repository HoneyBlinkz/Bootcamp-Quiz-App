//store question text, options and answers in an array
const questions = [
  {
    questionText: "1. Commonly used data types DO NOT include:",
    options: [
      "1. strings", 
      "2. booleans", 
      "3. alerts", 
      "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "2. Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "3. String values must be enclosed within _____ when being assigned to variables.",
    options: [
      "1. commas", 
      "2. curly brackets", 
      "3. quotes", 
      "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "4. A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "5. Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: [
      "1. break", 
      "2. stop", 
      "3. halt", 
      "4. exit"],
    answer: "1. break",
  },
  {
    questionText: "6. What does HTML stand for?",
    options: [
      "1. Hyper Text Preprocessor",
      "2. Hyper Text Markup Language",
      "3. Hyper Text Multiple Language",
      "4. Hyper Tool Multi Language"],
    answer: "2. Hyper Text Markup Language",
  },
  {
    questionText: "7. What does CSS stand for?",
    options: [
      "1. Common Style Sheet",
      "2. Colorful Style Sheet",
      "3. Computer Style Sheet",
      "4. Cascading Style Sheet"],
    answer: "4. Cascading Style Sheet",
  },
  {
    questionText: "8. What does PHP stand for?",
    options: [
      "1. Hypertext Preprocessor",
      "2. Hypertext Programming",
      "3. Hypertext Preprogramming",
      "4. Hometext Preprocessor"],
    answer: "1. Hypertext Preprocessor",
  },
  {
    questionText: "9.  What does SQL stand for?",
    options: [
      "1. Stylish Question Language",
      "2. Stylesheet Query Language",
      "3. Statement Question Language",
      "4. Structured Query Language"],
    answer: "4. Structured Query Language",  
  },
  {
    questionText: "10. The product plan is regularly updated to reflect:",
    options: [
      "1. A competitive environment",
      "2. Changes in technology",
      "3. Information on the success of existing products",
      "4. All of the above"],
    answer: "4. All of the above",
  },
  {
    questionText: "11. Product planning decisions are generally made by?",
    options: [
      "1. New recruits",
      "2. Mid-level management",
      "3. Senior management",
      "4. Sales managers"],
    answer: "3. Senior management",
  },
  {
    questionText: "12. Poor timing of market introductions of products may occur due to:",
    options: [
      "1. Inefficiencies of competitors in the market",
      "2. Inefficiencies of the product planning process of the organization",
      "3. Inadequate budget approval",
      "4. No particular reason"],
    answer: "2. Inefficiencies of the product planning process of the organization",
  },
  {
    questionText: "13. What does XML stand for?",
    options: [
      "1. eXtensible Markup Language",
      "2. eXecutable Multiple Language",
      "3. eXTra Multi-Program Language",
      "4. eXamine Multiple Language"],
      answer: "1. eXtensible Markup Language",
  },
  {
    questionText: "14. Frequent changes in the directions of projects may occur due to:",
    options: [
      "1. Inefficiencies of competitors in the market",
      "2. Inefficiencies in system level design",
      "3. Inefficiencies of the product planning process of the organisation",
      "4. No particular reason"],
    answer: "3. Inefficiencies of the product planning process of the organisation",
  },
  {
    questionText: "15. In the product planning phase, ___________ is chosen among the selected among the selected opportunities, timing of projects are outlined, and ___________ are allocated.",
    options: [
      "1. A portfolio of projects; resources",
      "2. One project; resources",
      "3. An easily reproducible project idea; minimal resources",
      "4. Any of the project ideas; huge resources"],
    answer: "1. A portfolio of projects; resources",
  },
  {
    questionText: "16. How many sizes of headers are available in HTML by default?",
    options: [
      "1. 10",
      "2. 2",
      "3. 6",
      "4. 3"],
    answer: "3. 6",
  },
  {
    questionText: "17. What is the smallest header in HTML by default?",
    options: [
      "1. h1",
      "2. h5",
      "3. h6",
      "4. h3"],
    answer: "3. h6",
  },
  {
    questionText: "18. What are the attributes used to change the size of an image?",
    options: [
      "1. Width and height",
      "2. Big and small",
      "3. Top and bottom",
      "4. None of the above"],
    answer: "1. Width and height",
  },
  {
    questionText: "19. What is the effect of the <b> tag?",
    options: [
      "1. It converts the text within it to bold font",
      "2. It is used to write black-colored font",
      "3. It is used to change the font size",
      "4. none of the above"],
    answer: "1. It converts the text within it to bold font",
  },
  {
    questionText: "20. Which attribute is used to provide a unique name to an HTML element?",
    options: [
      "1. id",
      "2. class",
      "3. type",
      "4. None of the above"],
    answer: "1. id",
  },
];

//select each card div by id and assign to variables
const startCard = document.querySelector("#start-card");
const questionCard = document.querySelector("#question-card");
const scoreCard = document.querySelector("#score-card");
const leaderboardCard = document.querySelector("#leaderboard-card");

//hide all cards
function hideCards() {
  startCard.setAttribute("hidden", true);
  questionCard.setAttribute("hidden", true);
  scoreCard.setAttribute("hidden", true);
  leaderboardCard.setAttribute("hidden", true);
}

const resultDiv = document.querySelector("#result-div");
const resultText = document.querySelector("#result-text");

//hide result div
function hideResultText() {
  resultDiv.style.display = "none";
}

//these variables are required globally
var intervalID;
var time;
var currentQuestion;

document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz() {
  //hide any visible cards, show the question card
  hideCards();
  questionCard.removeAttribute("hidden");

  //assign 0 to currentQuestion when start button is clicked, then display the current question on the page
  currentQuestion = 0;
  displayQuestion();

  //set total time depending on number of questions
  time = questions.length * 10;

  //executes function "countdown" every 1000ms to update time and display on page
  intervalID = setInterval(countdown, 1000);

  //invoke displayTime here to ensure time appears on the page as soon as the start button is clicked, not after 1 second
  displayTime();
}

//reduce time by 1 and display new value, if time runs out then end quiz
function countdown() {
  time--;
  displayTime();
  if (time < 1) {
    endQuiz();
  }
}

//display time on page
const timeDisplay = document.querySelector("#time");
function displayTime() {
  timeDisplay.textContent = time;
}

//display the question and answer options for the current question
function displayQuestion() {
  let question = questions[currentQuestion];
  let options = question.options;

  let h2QuestionElement = document.querySelector("#question-text");
  h2QuestionElement.textContent = question.questionText;

  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    let optionButton = document.querySelector("#option" + i);
    optionButton.textContent = option;
  }
}

//behaviour when an answer button is clicked: click event bubbles up to div with id "quiz-options"
//eventObject.target identifies the specific button element that was clicked on
document.querySelector("#quiz-options").addEventListener("click", checkAnswer);

//Compare the text content of the option button with the answer to the current question
function optionIsCorrect(optionButton) {
  return optionButton.textContent === questions[currentQuestion].answer;
}

//if answer is incorrect, penalise time
function checkAnswer(eventObject) {
  let optionButton = eventObject.target;
  resultDiv.style.display = "block";
  if (optionIsCorrect(optionButton)) {
    resultText.textContent = "Correct!";
    setTimeout(hideResultText, 1000);
  } else {
    resultText.textContent = "Incorrect!";
    setTimeout(hideResultText, 1000);
    if (time >= 10) {
      time = time - 10;
      displayTime();
    } else {
      //if time is less than 10, display time as 0 and end quiz
      //time is set to zero in this case to avoid displaying a negative number in cases where a wrong answer is submitted with < 10 seconds left on the timer
      time = 0;
      displayTime();
      endQuiz();
    }
  }

  //increment current question by 1
  currentQuestion++;
  //if we have not run out of questions then display next question, else end quiz
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

//display scorecard and hide other divs
const score = document.querySelector("#score");

//at end of quiz, clear the timer, hide any visible cards and display the scorecard and display the score as the remaining time
function endQuiz() {
  clearInterval(intervalID);
  hideCards();
  scoreCard.removeAttribute("hidden");
  score.textContent = time;
}

const submitButton = document.querySelector("#submit-button");
const inputElement = document.querySelector("#initials");

//store user initials and score when submit button is clicked
submitButton.addEventListener("click", storeScore);

function storeScore(event) {
  //prevent default behaviour of form submission
  event.preventDefault();

  //check for input
  if (!inputElement.value) {
    alert("Please enter your initials before pressing submit!");
    return;
  }

  //store score and initials in an object
  let leaderboardItem = {
    initials: inputElement.value,
    score: time,
  };

  updateStoredLeaderboard(leaderboardItem);

  //hide the question card, display the leaderboardcard
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  renderLeaderboard();
}

//updates the leaderboard stored in local storage
function updateStoredLeaderboard(leaderboardItem) {
  let leaderboardArray = getLeaderboard();
  //append new leaderboard item to leaderboard array
  leaderboardArray.push(leaderboardItem);
  localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
}

//get "leaderboardArray" from local storage (if it exists) and parse it into a javascript object using JSON.parse
function getLeaderboard() {
  let storedLeaderboard = localStorage.getItem("leaderboardArray");
  if (storedLeaderboard !== null) {
    let leaderboardArray = JSON.parse(storedLeaderboard);
    return leaderboardArray;
  } else {
    leaderboardArray = [];
  }
  return leaderboardArray;
}

//display leaderboard on leaderboard card
function renderLeaderboard() {
  let sortedLeaderboardArray = sortLeaderboard();
  const highscoreList = document.querySelector("#highscore-list");
  highscoreList.innerHTML = "";
  for (let i = 0; i < sortedLeaderboardArray.length; i++) {
    let leaderboardEntry = sortedLeaderboardArray[i];
    let newListItem = document.createElement("li");
    newListItem.textContent =
      leaderboardEntry.initials + " - " + leaderboardEntry.score;
    highscoreList.append(newListItem);
  }
}

//sort leaderboard array from highest to lowest
function sortLeaderboard() {
  let leaderboardArray = getLeaderboard();
  if (!leaderboardArray) {
    return;
  }

  leaderboardArray.sort(function (a, b) {
    return b.score - a.score;
  });
  return leaderboardArray;
}

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearHighscores);

//clear local storage and display empty leaderboard
function clearHighscores() {
  localStorage.clear();
  renderLeaderboard();
}

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", returnToStart);

//Hide leaderboard card show start card
function returnToStart() {
  hideCards();
  startCard.removeAttribute("hidden");
}

//use link to view highscores from any point on the page
const leaderboardLink = document.querySelector("#leaderboard-link");
leaderboardLink.addEventListener("click", showLeaderboard);

function showLeaderboard() {
  hideCards();
  leaderboardCard.removeAttribute("hidden");

  //stop countdown
  clearInterval(intervalID);

  //assign undefined to time and display that, so that time does not appear on page
  time = undefined;
  displayTime();

  //display leaderboard on leaderboard card
  renderLeaderboard();
}
