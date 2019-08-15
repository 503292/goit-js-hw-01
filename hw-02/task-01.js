"use strict";

// Задание 1
// Используя методы массива, последовательно выполни указанные операции над массивом имен пользователей.

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить первый элемент массива
console.log(users.shift());
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
console.log(users.pop());
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива пользователя "Lux"
console.log(users.unshift("Lux"));
console.log(users); // ["Lux", "Poly", "Ajax"]

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users.push("Jay", "Kiwi"));
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = "Ajax";
let indexUser = users.indexOf(userToDelete);
console.log(indexUser); // 2
// console.log(users.splice(indexUser, 1)); 
console.log(users);//  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя хранящегося в переменной userToInsert,
// перед пользователем хранящимся в переменной insertBefore
const userToInsert = "Kong";
const insertBefore = "Jay";
let indexInsert = users.indexOf(userToInsert);
let indexBefore = users.indexOf(insertBefore);
let addInArr = users.splice(indexBefore, 0, userToInsert);

console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]


// DONE