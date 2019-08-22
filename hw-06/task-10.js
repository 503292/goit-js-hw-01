"use strict";

import users from "./users.js";

// Задание 10
// Получить массив всех умений всех пользователей (поле skills), 
// при этом не должно быть повторяющихся умений 
// и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
    const arr = [];
    users
      .reduce((acc, { skills }) => [...acc, ...skills], [])
      .map(elem => {
        if (!arr.includes(elem)) {
          arr.push(elem);
        }
      });
    return arr.sort();
  };

// console.log(skills);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'no

//DONE