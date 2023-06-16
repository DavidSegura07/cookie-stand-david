'use strict';
console.log('hi');

let seattleSales = document.getElementById('seattleSales');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let table = document.getElementById('table');
let storeFronts = [];

function Store(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSoldEachHour = [];
  this.dailyTotal = 0;
  this.storeTotal = 0;
}
Store.prototype.render = function () {
  this.generateCookiesSales();
  this.tablerow();
};

Store.prototype.getRandomCustomers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
Store.prototype.tablerow = function () {
  // for (let i = 0; i < this.length; i++) {
  let storeRow = document.createElement('tr');
  let storeData = document.createElement('td');
  storeData.textContent = `${this.location}`;
  storeRow.appendChild(storeData);
  for (let j = 0; j < this.cookiesSoldEachHour.length; j++) {
    let cookiesThisHour = document.createElement('td');
    cookiesThisHour.textContent = this.cookiesSoldEachHour[j];
    storeRow.appendChild(cookiesThisHour);
  }

  let totalcookiesEL = document.createElement('td');
  totalcookiesEL.textContent = this.storeTotal;
  storeRow.appendChild(totalcookiesEL);

  table.appendChild(storeRow);
};

const generateFooter = function () {
  let footerEL = document.createElement('tr');
  let footerHeader = document.createElement('th');
  footerHeader.textContent = 'Totals';
  footerEL.appendChild(footerHeader);
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let footerData = document.createElement('td');
    let hourlyTotal = 0;
    for (let j = 0; j < storeFronts.length; j++) {
      hourlyTotal = hourlyTotal + storeFronts[j].cookiesSoldEachHour[i];
      grandTotal = grandTotal + hourlyTotal;
    }
    footerData.textContent = hourlyTotal;
    footerEL.appendChild(footerData);
  }
  let footerTotal = document.createElement('td');
  footerTotal.textContent = grandTotal;
  footerEL.appendChild(footerTotal);
  table.appendChild(footerEL);
};

Store.prototype.generateCookiesSales = function () {
  for (let i = 0; i < hours.length; i++) {
    let customers = this.getRandomCustomers();
    console.log('sting', customers);
    let totalSoldThisHour = Math.ceil(customers * this.avg);
    this.cookiesSoldEachHour.push(totalSoldThisHour);
    this.dailyTotal = this.dailyTotal + totalSoldThisHour;
    this.storeTotal = this.storeTotal + this.dailyTotal;
  }
};
// console.log('seattle',seattle);
// function Store(location, min, max, avg)
let seattle = new Store('seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);
storeFronts.push(seattle, tokyo, dubai, paris, lima);

console.log(seattle);

function perHour() {
  let row = document.createElement('tr');
  let hoursEl = document.createElement('td');
  hoursEl.textContent = '';
  row.appendChild(hoursEl);
  for (let i = 0; i < hours.length; i++) {
    let tableHeader = document.createElement('th');
    tableHeader.textContent = `${hours[i]}`;
    let hour = document.createElement('td');
    hour.textContent = `${hours[i]}`;
    row.appendChild(hour);
  }
  let storeTotalEL = document.createElement('td');
  storeTotalEL.textContent = 'daily total';
  row.appendChild(storeTotalEL);
  table.appendChild(row);
}
perHour();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
generateFooter();



//Form
let form = document.getElementById('form');

function handleSubmit(event) {
  event.preventDefault();

  let newLocation = event.target.newLocation.value;
  let minCustomers = parseInt(event.target.minCustomers.value);
  let maxCustomers = parseInt(event.target.maxCustomers.value);
  let averageBuy = parseInt(event.target.averageBuy.value);

  let newStoreLocation = new Store(
    newLocation,
    minCustomers,
    maxCustomers,
    averageBuy);

    console.log(newStoreLocation);
};
form.addEventListener('submit',handleSubmit);


///////////////////////////////////////////////////////////////////////////////
// Old Code saving for later.
// function footer() {
//   for (let i = 0; i < hours.length; i++) {
//     let totalSold = document.createElement('td');
//     totalSold.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//     row.appendChild(totalSold);
//   }
// }
// footer()









// const seattle = {
//   location: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesSoldEachHour: [],
//   dailyTotal: 0,
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   generateCookiesSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getRandomCustomers();
//       console.log(customers);
//       let totalSoldThisHour = Math.ceil(customers * this.avg);
//       this.cookiesSoldEachHour.push(totalSoldThisHour);
//       this.dailyTotal = this.dailyTotal + totalSoldThisHour;
//     }
//   },
//   render: function () {
//     this.generateCookiesSales();
//     for (let i = 0; i < hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       seattleSales.appendChild(listItem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal}`;
//     seattleSales.appendChild(liTotal);
//   }
// };
// seattle.render();

// let tokyoSales = document.getElementById('seattleSales');
// const tokyo = {
//   location: 'Seattle',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookiesSoldEachHour: [],
//   dailyTotal: 0,
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   generateCookiesSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getRandomCustomers();
//       let totalSoldThisHour = Math.ceil(customers * this.avg);
//       this.cookiesSoldEachHour.push(totalSoldThisHour);
//       this.dailyTotal = this.dailyTotal + totalSoldThisHour;
//     }
//   },
//   render: function () {
//     this.generateCookiesSales();
//     for (let i = 0; i < hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       tokyoSales.appendChild(listItem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal}`;
//     tokyoSales.appendChild(liTotal);
//   }
// };
// tokyo.render();

// let dubaiSales = document.getElementById('seattleSales');
// const dubai = {
//   location: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookiesSoldEachHour: [],
//   dailyTotal: 0,
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   generateCookiesSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getRandomCustomers();
//       let totalSoldThisHour = Math.ceil(customers * this.avg);
//       this.cookiesSoldEachHour.push(totalSoldThisHour);
//       this.dailyTotal = this.dailyTotal + totalSoldThisHour;
//     }
//   },
//   render: function () {
//     this.generateCookiesSales();
//     for (let i = 0; i < hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       dubaiSales.appendChild(listItem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal}`;
//     dubaiSales.appendChild(liTotal);
//   }
// };
// dubai.render();

// let parisSales = document.getElementById('seattleSales');
// const paris = {
//   location: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldEachHour: [],
//   dailyTotal: 0,
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   generateCookiesSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getRandomCustomers();
//       let totalSoldThisHour = Math.ceil(customers * this.avg);
//       this.cookiesSoldEachHour.push(totalSoldThisHour);
//       this.dailyTotal = this.dailyTotal + totalSoldThisHour;
//     }
//   },
//   render: function () {
//     this.generateCookiesSales();
//     for (let i = 0; i < hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       parisSales.appendChild(listItem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal}`;
//     parisSales.appendChild(liTotal);
//   }
// };
// paris.render();

// let limaSales = document.getElementById('seattleSales');
// const lima = {
//   location: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   cookiesSoldEachHour: [],
//   dailyTotal: 0,
//   getRandomCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   generateCookiesSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customers = this.getRandomCustomers();
//       let totalSoldThisHour = Math.ceil(customers * this.avg);
//       this.cookiesSoldEachHour.push(totalSoldThisHour);
//       this.dailyTotal = this.dailyTotal + totalSoldThisHour;
//     }
//   },
//   render: function () {
//     this.generateCookiesSales();
//     for (let i = 0; i < hours.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       limaSales.appendChild(listItem);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal}`;
//     limaSales.appendChild(liTotal);
//   }
// };
// lima.render();

// generateFooter();

// for (let i = 0; i < storeFront.length; i++) {
//   let storeRow = document.createElement('tr');
//   let storeData = document.createElement('td');
//   storeData.textContent = `${storeFront[i].location}`;
//   storeRow.appendChild(storeData);
//   for (let j = 0; j < storeFront[i].cookiesSoldEachHour.length; j++) {
//     let cookiesThisHour = document.createElement('td');
//     cookiesThisHour.textContent = storeFront[i].cookiesSoldEachHour[j];
//     storeRow.appendChild(cookiesThisHour);
//   }



//   table.appendChild(storeRow);
// }
// iterating all citys 5
// for (let i = 0; i < 5; i++) {
// seattle.generateFooter();
// }

