// Задача 5

// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке,
// то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let country;
let price;

let countryDelivery = prompt("Enter your country delivery: ");
let counryLower = countryDelivery.toLowerCase();

switch (counryLower) {
  case "китай":
    price = 100;
    country = "Китай"
    break;
  case "чілі":
    price = 250;
    country = "Чілі"
    break;
  case "австралія":
    price = 170;
    country = "Австралія"
    break;
  case "індія":
    price = 80;
    country = "Індія"
    break;
  case "ямайка":
    price = 120;
    country = "Ямайка"
    break;
  default:
    alert("В вашей стране доставка не доступна");
}

alert(`Доставка в ${country} будет стоить ${price} кредитов`)

