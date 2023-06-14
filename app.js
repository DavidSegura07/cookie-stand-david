'use strict';
console.log('hi');

let seattleSales = document.getElementById('seattleSales');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHour: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesSales: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.getRandomCustomers();
      console.log(customers);
      let totalSoldThisHour = Math.ceil(customers * this.avg);
      this.cookiesSoldEachHour.push(totalSoldThisHour);
      this.dailyTotal = this.dailyTotal + totalSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesSales();
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      seattleSales.appendChild(listItem);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal}`;
    seattleSales.appendChild(liTotal);
  }
};
seattle.render();

let tokyoSales = document.getElementById('seattleSales');
const tokyo = {
  location: 'Seattle',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHour: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesSales: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.getRandomCustomers();
      console.log(customers);
      let totalSoldThisHour = Math.ceil(customers * this.avg);
      this.cookiesSoldEachHour.push(totalSoldThisHour);
      this.dailyTotal = this.dailyTotal + totalSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesSales();
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      tokyoSales.appendChild(listItem);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal}`;
    tokyoSales.appendChild(liTotal);
  }
};
tokyo.render();

let dubaiSales = document.getElementById('seattleSales');
const dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHour: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesSales: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.getRandomCustomers();
      console.log(customers);
      let totalSoldThisHour = Math.ceil(customers * this.avg);
      this.cookiesSoldEachHour.push(totalSoldThisHour);
      this.dailyTotal = this.dailyTotal + totalSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesSales();
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      dubaiSales.appendChild(listItem);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal}`;
    dubaiSales.appendChild(liTotal);
  }
};
dubai.render();

let parisSales = document.getElementById('seattleSales');
const paris = {
  location: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldEachHour: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesSales: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.getRandomCustomers();
      console.log(customers);
      let totalSoldThisHour = Math.ceil(customers * this.avg);
      this.cookiesSoldEachHour.push(totalSoldThisHour);
      this.dailyTotal = this.dailyTotal + totalSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesSales();
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      parisSales.appendChild(listItem);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal}`;
    parisSales.appendChild(liTotal);
  }
};
paris.render();

let limaSales = document.getElementById('seattleSales');
const lima = {
  location: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldEachHour: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  generateCookiesSales: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.getRandomCustomers();
      console.log(customers);
      let totalSoldThisHour = Math.ceil(customers * this.avg);
      this.cookiesSoldEachHour.push(totalSoldThisHour);
      this.dailyTotal = this.dailyTotal + totalSoldThisHour;
    }
  },
  render: function () {
    this.generateCookiesSales();
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      limaSales.appendChild(listItem);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.dailyTotal}`;
    limaSales.appendChild(liTotal);
  }
};
lima.render();
