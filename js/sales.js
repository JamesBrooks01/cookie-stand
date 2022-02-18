'use strict';

let salesTable = document.getElementById('salesTable');
let storeForm = document.getElementById('new-stores');

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

function reworkedSumArray(a) {
  let total = 0;
  for (let i = 0; i < a.cookieSalesArray.length; i++) {
    total += a.cookieSalesArray[i];
  }
  a.cookieSalesArray.push(total);
  totalSalesArray.push(a.cookieSalesArray);
}

function reworkedTotalArray() {
  for (let i = 0; i <= 14; i++) {
    let totalArray = 0;
    for (let b = 0; b < totalSalesArray.length; b++) {
      totalArray += totalSalesArray[b][i];
    }
    totalValues.push(totalArray);
  }
}

function totalRow() {
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

function newCityTest() {
  totalValues = [];
  // new StoreLoc('Genoa', 4, 30, 4.8);
  let lastLocation = storeLocations[storeLocations.length -1];
  let currentCity = lastLocation;
  salesTable.deleteRow(-1);
  currentCity.randomCust();
  currentCity.cookieSales();
  reworkedSumArray(currentCity);
  currentCity.render();
  reworkedTotalArray();
  totalRow();
}

function handleSubmit(event){
  event.preventDefault();
  console.log('submit');
  let storeName = event.target.storeName.value;
  console.log('Store Name', storeName);
  let minCust = +event.target.minCust.value;
  console.log('Minimum Number of Customers', minCust);
  let maxCust = +event.target.maxCust.value;
  console.log('Maximum Number of Cutomers', maxCust);
  let avgCookie = +event.target.avgCookie.value;
  console.log('Average Cookies', avgCookie);
  storeForm.reset();
  new StoreLoc(storeName,minCust,maxCust,avgCookie);
  newCityTest();
}

function renderAllCities() {
  timeRow();
  for (let i = 0; i < storeLocations.length; i++) {
    let currentCity = storeLocations[i];
    currentCity.randomCust();
    currentCity.cookieSales();
    reworkedSumArray(storeLocations[i]);
    currentCity.render();
  }
  reworkedTotalArray();
  totalRow();

}


renderAllCities();
storeForm.addEventListener('submit',handleSubmit);
