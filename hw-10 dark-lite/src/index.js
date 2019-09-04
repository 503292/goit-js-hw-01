import menu from './menu.json';
import menuTemplate from './templates/template.hbs';

import './styles.css';

const refs = {
  menuList: document.querySelector('#menu'),
};
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// console.log(menu);
// console.log(menuTemplate);

// передаєм всі страви 
const markup = menuTemplate(menu);
// console.log(markup);

refs.menuList.insertAdjacentHTML('beforeend', markup);


// refs.menuList.insertAdjacentHTML('beforeend', markup);

// buildMenu(menu);

// функція для перебору всього меню
// function buildMenu(menu) {
//   const markup = menu.map(dish => menuTemplate(dish)).join('');

//   refs.menuList.insertAdjacentHTML('beforeend', markup);
// //   console.log(markup);
// }
