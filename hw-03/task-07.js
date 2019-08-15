"use strict";

// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы
// с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  generateId() {
    return `${this.transactions.length + 1}`;
    // return new Date().getTime();
  },

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const transactionDeposit = {};

    transactionDeposit.id = this.generateId();
    transactionDeposit.amount = amount;
    transactionDeposit.nameTransaction = Transaction.DEPOSIT;

    this.balance =this.balance +  transactionDeposit.amount;

    this.addTransaction(transactionDeposit);

    return `Рахунок поповнено на ${amount} грн ` + this.getBalance();
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const transactionWithdraw = {};

    if (this.balance < amount) {
      return (
        `Зняти суму ${amount} не можливо, недостатнь коштів на рахунку!!! ` +
        this.getBalance()
      );
    } else {
      transactionWithdraw.id = this.generateId();
      transactionWithdraw.amount = amount;
      transactionWithdraw.nameTransaction = Transaction.WITHDRAW;

      this.balance = this.balance - transactionWithdraw.amount;

      this.addTransaction(transactionWithdraw);

      return `Знято суму ${amount} грн ` + this.getBalance();
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    return this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `На рахунку доступно - ${this.balance} грн`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    return console.log(`В базі нeмає (id = ${id})`);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(nameTransaction) {
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.nameTransaction === nameTransaction) {
        total += transaction.amount;
      }
    }
    return total;
  }
};

console.log(account.deposit(100));
console.log(account.deposit(5000));
console.log(account.withdraw(5000));
console.log(account.deposit(5000));
console.log(account.withdraw(100));

console.log(account.withdraw(30000));

console.log(account.transactions);

console.log(account.getTransactionDetails("1"));

console.log("" + account.getTransactionTotal(Transaction.DEPOSIT));

console.log("ЗАЛИШОК НА РАХУНКУ: " + account.getBalance());
