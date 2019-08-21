"use strict";

import users from "./users.js";

// Задание 9
// Массив имен (поле name) людей,
// отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => users.sort((start, next) => start.friends.length > next.friends.length ? 1 : -1).map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//DONE