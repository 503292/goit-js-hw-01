"use strict";

// Задание 1
// Напиши скрипт, который, для объекта user,
// последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате
// ключ:значение используя Object.keys() и for...of

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

// add in obj new field - mood: "happy"
user.mood = "happy";

// change user.hobby to 'javascript'
user.hobby = "javascript";

// change user.premium to false

user.premium = false;

const users = Object.keys(user);

for (const key of users) {
  console.log(`key: ${key}, value: ${user[key]}`);
}

//DONE