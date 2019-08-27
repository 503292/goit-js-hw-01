"use strict";

import questionF from "./task-07.js/index.js";

//========== підключка до HTML
const testForm = document.querySelector(".js-test-form");
const btn = document.querySelector(".js-btn");
const profile = createQuestProfile(questionF);

// вставити шаблон перед кнопкою
testForm.insertBefore(profile, btn);
// console.log(profile);

//========== функція структури шаблона
function createQuestProfile({ questions }) {
  const arrQuestion = questions.map(q => q.question);
  const arrChoices = questions.map(q => q.choices);

  // DIV
  const container = document.createElement("div");

  container.classList.add("container");

  // H2
  const titleForm = document.createElement("h2");

  titleForm.classList.add("title");

  titleForm.textContent = `${questionF.title}`;

  // SEC
  const sec = document.createElement("section");
  sec.classList.add("section");
  container.append(titleForm, sec);

  for (let i = 0; i < arrQuestion.length; i++) {
    // H3
    const titleQuestion = document.createElement("h3");
    titleQuestion.classList.add("h3-question");

    titleQuestion.textContent = `${arrQuestion[i]}`;

    sec.appendChild(titleQuestion);

    // OL
    const listQuestion = document.createElement("ol");
    listQuestion.classList.add("ol-question-" + i);

    sec.appendChild(listQuestion);

    for (let j = 0; j < arrChoices[i].length; j++) {
      // LI
      const liQuestion = document.createElement("li");
      liQuestion.classList.add("li-question-" + j);

      listQuestion.appendChild(liQuestion);

      // LABEL
      const labelQuestion = document.createElement("label");

      liQuestion.appendChild(labelQuestion);

      // INPUT
      const inputQuestion = document.createElement("input");
      inputQuestion.classList.add("input-question");

      inputQuestion.setAttribute("type", "radio");
      inputQuestion.setAttribute("name", "choice_" + i);
      inputQuestion.setAttribute("value", `${j}`);

      // витягуєм одну відповідь для одного inputa
      const pAnswers = document.createTextNode(`${arrChoices[i][j]}`);

      // закидуєм  input і відповідь в label
      labelQuestion.append(inputQuestion, pAnswers);
    }
  }
  return container;
}
const form = document.querySelector(".js-test-form");
form.addEventListener("submit", handlerSubmitWithData);

function handlerSubmitWithData(event) {
  event.preventDefault();

  const objectAnswer = [];
  const formData = new FormData(event.currentTarget);

  formData.forEach(value => {
    objectAnswer.push(value);
  });
  console.log(objectAnswer);
  countUserAnswer(objectAnswer);
}

// правильна відповідь з task-cw.js
const correctAnswer = questionF.questions.map(q => q.answer);
console.log(correctAnswer);

function countUserAnswer(objectAnswer) {
  let countCorrectAnswer = 0;

  if (objectAnswer.length === correctAnswer.length) {
    for (let i = 0; i < correctAnswer.length; i++) {
      if (objectAnswer[i] == correctAnswer[i]) {
        countCorrectAnswer++;
      } else {
        // console.log("index wrong answer " + i);
      }
    }
  } else {
    alert("Заповніть будь ласка всі завдання).");
    return;
  }
  percentAnswer(countCorrectAnswer, objectAnswer);
}

function percentAnswer(countCorrectAnswer, objectAnswer) {
  let verify = ((100 / correctAnswer.length) * countCorrectAnswer).toFixed(1);

  if (verify >= 80) {
    alert(`Вітаю ви пройшли тест).
Кількість правельних відповідей - ${countCorrectAnswer} з ${objectAnswer.length}
Процентове співвідношення - ${verify} %`);
  } else {
    alert(`Нажаль тест провалений (.
Кількість правельних відповідей - ${countCorrectAnswer} з ${objectAnswer.length}
Процентове співвідношення - ${verify} %`);
  }
}

// довжина objectAnswer
// const sizeОbjectAnswer = Object.keys(objectAnswer).length;
// console.log(sizeОbjectAnswer);

// перевод обєкта в масив
// const arrОbjectAnswer = Object.values(objectAnswer);
// console.log(arrОbjectAnswer);
