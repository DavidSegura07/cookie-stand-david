'use strict';

console.log('hi');

// const profileContainer = document.getElementById('container');
// console.log(profileContainer);

// let seattle = {
//   location: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesSoldEachHour: [],
//   randomNumber: function () {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesSoldPerHour: function () {
//     for (let i = 0; i < this.storeHours.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       this.cookiesSoldEachHour.push(totalCookies);
//       console.log(`${this.storeHours[i]}: ${totalCookies}`);
//     }
//     console.log(this.cookiesSoldEachHour);
//   },
//   render: function() {
//     let article = document.createElement('article');
//     profileContainer.appendChild(article);
//     let h3 = document.createElement('h3');
//     h3.textContent = this.location;
//     article.appendChild(h3);
//     let ul = document.createElement('ul');
//     article.appendChild(ul);
//     for (let i=0; i < this.cookiesSoldEachHour.length; i++) {

//       let li = document.createElement('li');
//       li.textContent = `${this.storeHours[i]}- ${this.cookiesSoldEachHour[i]} cookies`;
//       ul.appendChild(li);
//     }
//   }
// };
// seattle.totalCookiesSoldPerHour();
// seattle.render();

// let tokyo = {
//   location: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookiesSoldEachHour: [],
//   randomNumber: function () {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesSoldPerHour: function () {
//     for (let i = 0; i < this.storeHours.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       this.cookiesSoldEachHour.push(totalCookies);
//       console.log(`${this.storeHours[i]}: ${totalCookies}`);
//     }
//     console.log(this.cookiesSoldEachHour);
//   },
//   render: function() {
//     let article = document.createElement('article');
//     profileContainer.appendChild(article);
//     let h3 = document.createElement('h3');
//     h3.textContent = this.location;
//     article.appendChild(h3);
//     let ul = document.createElement('ul');
//     article.appendChild(ul);
//     for (let i=0; i < this.cookiesSoldEachHour.length; i++) {

//       let li = document.createElement('li');
//       li.textContent = `${this.storeHours[i]}- ${this.cookiesSoldEachHour[i]} cookies`;
//       ul.appendChild(li);
//     }
//   }
// };
// tokyo.totalCookiesSoldPerHour();
// tokyo.render();



// let dubai = {
//   location: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookiesSoldEachHour: [],
//   randomNumber: function () {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesSoldPerHour: function () {
//     for (let i = 0; i < this.storeHours.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       this.cookiesSoldEachHour.push(totalCookies);
//       console.log(`${this.storeHours[i]}: ${totalCookies}`);
//     }
//     console.log(this.cookiesSoldEachHour);
//   },
//   render: function() {
//     let article = document.createElement('article');
//     profileContainer.appendChild(article);
//     let h3 = document.createElement('h3');
//     h3.textContent = this.location;
//     article.appendChild(h3);
//     let ul = document.createElement('ul');
//     article.appendChild(ul);
//     for (let i=0; i < this.cookiesSoldEachHour.length; i++) {

//       let li = document.createElement('li');
//       li.textContent = `${this.storeHours[i]}- ${this.cookiesSoldEachHour[i]} cookies`;
//       ul.appendChild(li);
//     }
//   }
// };
// dubai.totalCookiesSoldPerHour();
// dubai.render();

// let paris = {
//   location: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldEachHour: [],
//   randomNumber: function () {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesSoldPerHour: function () {
//     for (let i = 0; i < this.storeHours.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       this.cookiesSoldEachHour.push(totalCookies);
//       console.log(`${this.storeHours[i]}: ${totalCookies}`);
//     }
//     console.log(this.cookiesSoldEachHour);
//   },
//   render: function() {
//     let article = document.createElement('article');
//     profileContainer.appendChild(article);
//     let h3 = document.createElement('h3');
//     h3.textContent = this.location;
//     article.appendChild(h3);
//     let ul = document.createElement('ul');
//     article.appendChild(ul);
//     for (let i=0; i < this.cookiesSoldEachHour.length; i++) {

//       let li = document.createElement('li');
//       li.textContent = `${this.storeHours[i]}- ${this.cookiesSoldEachHour[i]} cookies`;
//       ul.appendChild(li);
//     }
//   }
// };
// paris.totalCookiesSoldPerHour();
// paris.render();

// let lima = {
//   location: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   cookiesSoldEachHour: [],
//   randomNumber: function () {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesSoldPerHour: function () {
//     for (let i = 0; i < this.storeHours.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       this.cookiesSoldEachHour.push(totalCookies);
//       console.log(`${this.storeHours[i]}: ${totalCookies}`);
//     }
//     console.log(this.cookiesSoldEachHour);
//   },
//   render: function() {
//     let article = document.createElement('article');
//     profileContainer.appendChild(article);
//     let h3 = document.createElement('h3');
//     h3.textContent = this.location;
//     article.appendChild(h3);
//     let ul = document.createElement('ul');
//     article.appendChild(ul);
//     for (let i=0; i < this.cookiesSoldEachHour.length; i++) {

//       let li = document.createElement('li');
//       li.textContent = `${this.storeHours[i]}- ${this.cookiesSoldEachHour[i]} cookies`;
//       ul.appendChild(li);
//     }
//   }
// };
// lima.totalCookiesSoldPerHour();
// lima.render();
