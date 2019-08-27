"use strict";

import questionF from "./task-cw.js";

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
  // const arrAnswer = questions.map(q => q.answer);

  // DIV
  const container = document.createElement("div");

  container.classList.add("container");

  // H2
  const titleForm = document.createElement("h2");

  titleForm.classList.add("title");

  titleForm.textContent = `${questionF.title}`;

  // SEC
  const sec = document.createElement("section");
  sec.classList.add("template");
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

testForm.addEventListener("submit", handlerSubmitWithData);

function handlerSubmitWithData(event) {
  event.preventDefault();

  const objectAnswer = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    objectAnswer[name] = value;
  });
  // console.log(objectAnswer);
  validateAnswer(objectAnswer);
  // console.log(questionF);
}

function validateAnswer(objectAnswer) {
  // console.log(questionF.questions[0].answer); // правильна відповідь
  // console.log(objectAnswer); // відповіді юзера

  // довжина objectAnswer
  let sizeОbjectAnswer = Object.keys(objectAnswer).length;
  console.log(sizeОbjectAnswer);

  // перевод обєкта в масив
  let arrОbjectAnswer = Object.values(objectAnswer);
  console.log(arrОbjectAnswer);

  const correctAnswer = questionF.questions.map(q => q.answer);
  console.log(correctAnswer); // правильна відповідь

  let countCorrectAnswer = 0;

  if (sizeОbjectAnswer === correctAnswer.length) {
    for (let i = 0; i < correctAnswer.length; i++) {
      if (arrОbjectAnswer[i] == correctAnswer[i]) {
        countCorrectAnswer++;
        
      } else {
        console.log("brrr");
      }
    }
    alert("правельних відповідей " + countCorrectAnswer);
    // console.log();
  }
  // if(questionF.questions[0].answer === objectAnswer.)
}

// function handlerSubmit(e) {
//   e.preventDefault();
//   const {elements} = e.currentTarget;
//   console.log(form);

//   const subscription = elements.quest_1.value;
//   console.log(elements.value);
//   console.dir(elements);

//   const data = {
//     subscription,
//   }
//   console.log(data);  //херня якась {subscription: undefined}
// }

// function quest({ questions }) {
//   let arrQuestion1 = questions.map(q => q.question);
//   console.log(arrQuestion1.length);
//   return arrQuestion1.length;
// }
// const pro = quest(questionsF);

// // VALIDATION

// for (let i = 0; i < 1; i++) {
//   console.log(document.querySelector(".ol-question-" + i));

//   for (let j = 0; j < 1; j++) {
//     console.log(document.querySelector(".li-question-" + j));
//     console.log(document.querySelector(".choise-" + j));
//   }
// }

// let inp = document.querySelector("li-quest-" + 1);
// console.log(inp.getAttribute("name"));

// function valid(form) {
//   // let inp = document.querySelector("input");
// }
// btn.addEventListener("click", e => {

//   console.log(e.target);
// });

// function validate(){
//   const inp = document.querySelectorAll("input");
//   console.log(inp.classList("value"));
// }

// for (let i = 0; i < arrQuestion.length; i++) {

//   for (let j = 0; j < arrChoices[i].length; j++) {

// const inp = document.querySelector("quest-" + j);

// console.log(inp);
//   }
// }

// При сабмите формы проверь на сколько вопросов пользователь ответил верно
// и выведи (можно под формой) сообщение об успехе или неудаче.
// Успешным прохождение теста считается при 80% или более верных ответов.

// HTML-разметка
// Начальная разметка в HTML-документе.

/* <form>
  <button type="submit">Проверить</button>
</form> */

// Каждый вопрос представлен следующей HTML-разметкой.
// Текст вопроса и количество вариантов ответов зависит от данных вопроса.
// Подумай что подставить в атрибуты name и value радиокнопок.
