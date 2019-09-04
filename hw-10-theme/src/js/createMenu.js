import menu from '../menu.json';
import menuTemplate from '../templates/template.hbs';

const refs = {
  menuList: document.querySelector('#menu'),
};

// передаєм всі страви з "menu.json" в шаблон "template.hbs"
const markup = menuTemplate(menu);
// console.log(markup);

// вставляєм шаблон в HTML
refs.menuList.insertAdjacentHTML('beforeend', markup);
