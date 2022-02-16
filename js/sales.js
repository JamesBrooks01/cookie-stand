'use strict';

let salesTable = document.getElementById('salesTable');

function randomCustomerCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let timeSheet = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let storeLocations = [];
let totalSalesArray = [];
let totalValues = [];

function StoreLoc(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customerCount = 0,
  this.cookieSalesArray = [];
  storeLocations.push(this);
}

StoreLoc.prototype.randomCust = function () {
  this.customerCount = randomCustomerCount(this.minCust, this.maxCust);
},

StoreLoc.prototype.cookieSales = function () {
  for (let i = 0; i < timeSheet.length - 1; i++) {
    let cookieSales = this.customerCount * this.avgCookie;
    this.cookieSalesArray.push(Math.floor(cookieSales));
    this.randomCust();
  }
};

StoreLoc.prototype.render = function () {
  let row = document.createElement('tr');
  salesTable.appendChild(row);
  let storeNameEle = document.createElement('th');
  storeNameEle.textContent = this.storeName;
  row.appendChild(storeNameEle);
  for (let i = 0; i < this.cookieSalesArray.length; i++) {
    let salesData = document.createElement('td');
    salesData.textContent = `${this.cookieSalesArray[i]} cookies`;
    row.appendChild(salesData);
  }
};

function timeRow() {
  timeSheet.push('Daily Location Total');
  let timeRow = document.createElement('tr');
  salesTable.appendChild(timeRow);
  let rowSpacer = document.createElement('th');
  timeRow.appendChild(rowSpacer);
  for (let i = 0; i < timeSheet.length; i++) {
    let curTime = document.createElement('th');
    curTime.textContent = timeSheet[i];
    timeRow.appendChild(curTime);
  }

}

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

function sumTotalArray(a) {
  let answerSumArr = [];
  let b = 0;
  for (let i = 0; i <= totalSalesArray.length - 3; i++) {
    let sumOne = sum(totalSalesArray[b][a], totalSalesArray[b + 1][a])[0];
    answerSumArr.splice(0, 1, sumOne);
    let sumTwo = sum(answerSumArr[b], totalSalesArray[b + 2][a])[0];
    answerSumArr.push(sumTwo);
    b++;
  }
  let lastValue = answerSumArr[answerSumArr.length - 1];
  let array6 = [lastValue, `The numbers ${a.cookieSalesArray} have a product of ${lastValue}.`];
  //console.log(totalValues);
  totalValues.push(lastValue);
  return array6;
}

function sumTotalCalc() {
  for(let i =0; i < 15; i++){
    sumTotalArray(i);
  }
}

function totalRow(){
  let totalRow = document.createElement('tr');
  salesTable.appendChild(totalRow);
  let totalElem = document.createElement('th');
  totalElem.textContent = 'Totals';
  totalRow.appendChild(totalElem);
  for (let i = 0; i < totalValues.length; i++) {
    let totalData = document.createElement('th');
    totalData.textContent = `${totalValues[i]} cookies`;
    totalRow.appendChild(totalData);
  }
}

new StoreLoc('Seattle', 23, 65, 6.3);
new StoreLoc('Tokyo', 3, 24, 1.2);
new StoreLoc('Dubai', 11, 38, 3.7);
new StoreLoc('Paris', 20, 38, 2.3);
new StoreLoc('Lima', 2, 16, 4.6);

function renderAllCities() {
  timeRow();
  for (let i = 0; i < storeLocations.length; i++) {
    let currentCity = storeLocations[i];
    currentCity.randomCust();
    currentCity.cookieSales();
    sumAnyArray(storeLocations[i]);
    currentCity.render();
  }
  sumTotalCalc();
  totalRow();
}
renderAllCities();
