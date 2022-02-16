'use strict';

let salesTable = document.getElementById('salesTable');

function randomCustomerCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let timeSheet = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

function StoreLoc(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customerCount = 0,
  this.cookieSalesArray = [];
  storeLocations.push(this);
}

randomCust: function () {
  this.customerCount = randomCustomerCount(this.minCust, this.maxCust);
};

cookieSales: function () {
  for (let i = 0; i < timeSheet.length; i++) {
    let cookieSales = this.customerCount * this.avgCookie;
    this.cookieSalesArray.push(Math.floor(cookieSales));
    this.randomCust();
  }
  this.cookieSalesArray.push();
};

function sum(a, b) {
  let answer1 = a + b;
  let array1 = [answer1, `The sum of ${a} and ${b} is ${a + b}.`];
  return array1;
}

function sumAnyArray(a) {
  let answerSumArr = [];
  for (let i = 0; i <= a.cookieSalesArray.length - 3; i++) {
    let sumOne = sum(a.cookieSalesArray[i], a.cookieSalesArray[i + 1])[0];
    answerSumArr.splice(0, 1, sumOne);
    let sumTwo = sum(answerSumArr[i], a.cookieSalesArray[i + 2])[0];
    answerSumArr.push(sumTwo);
  }
  answerSumArr.splice(0, 1, sum(a.cookieSalesArray[0], a.cookieSalesArray[1])[0]);
  let lastValue = answerSumArr[answerSumArr.length - 1];
  let array6 = [lastValue, `The numbers ${a.cookieSalesArray} have a product of ${lastValue}.`];
  a.cookieSalesArray.push(lastValue);
  totalSalesArray.push(a.cookieSalesArray);
  //console.table(array6);
  return array6;
}
function renderAllCities() {
  for (let i = 0; i < storeLocations.length; i++) {
    let currentCity = storeLocations[i];
    currentCity.randomCust();
    currentCity.cookieSales();
    sumAnyArray(storeLocations[i]);
    currentCity.render();
  }
}
renderAllCities();
