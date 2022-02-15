'use strict';

let salesSection = document.getElementById('sales-section');

function randomCustomerCount(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let timeSheet = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

let seattleSales = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  customerCount: 0,
  cookieSalesArray: [],
  randomCust: function () {
    this.customerCount = randomCustomerCount(this.minCust, this.maxCust);
  },
  cookieSales: function () {
    for (let i = 0; i < timeSheet.length; i++) {
      let cookieSales = this.customerCount * this.avgCookie;
      this.cookieSalesArray.push(Math.floor(cookieSales));
      this.randomCust();
    }
    this.cookieSalesArray.push();
  },
};
let tokyoSales = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  customerCount: 0,
  cookieSalesArray: [],
  randomCust: function () {
    this.customerCount = randomCustomerCount(this.minCust, this.maxCust);
  },
  cookieSales: function () {
    for (let i = 0; i < timeSheet.length; i++) {
      let cookieSales = this.customerCount * this.avgCookie;
      this.cookieSalesArray.push(Math.floor(cookieSales));
      this.randomCust();
    }
  },
};
let dubaiSales = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  customerCount: 0,
  cookieSalesArray: [],
  randomCust: function () {
    this.customerCount = randomCustomerCount(this.minCust, this.maxCust);
  },
  cookieSales: function () {
    for (let i = 0; i < timeSheet.length; i++) {
      let cookieSales = this.customerCount * this.avgCookie;
      this.cookieSalesArray.push(Math.floor(cookieSales));
      this.randomCust();
    }
  },
};
let parisSales = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  customerCount: 0,
  cookieSalesArray: [],
  randomCust: function () {
    this.customerCount = randomCustomerCount(this.minCust, this.maxCust);
  },
  cookieSales: function () {
    for (let i = 0; i < timeSheet.length; i++) {
      let cookieSales = this.customerCount * this.avgCookie;
      this.cookieSalesArray.push(Math.floor(cookieSales));
      this.randomCust();
    }
  },
};
let limaSales = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  customerCount: 0,
  cookieSalesArray: [],
  randomCust: function () {
    this.customerCount = randomCustomerCount(this.minCust, this.maxCust);
  },
  cookieSales: function () {
    for (let i = 0; i < timeSheet.length; i++) {
      let cookieSales = this.customerCount * this.avgCookie;
      this.cookieSalesArray.push(Math.floor(cookieSales));
      this.randomCust();
    }
  },
};

let storeLocations = [seattleSales, tokyoSales, dubaiSales, parisSales, limaSales];
let locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

seattleSales.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = (`${locations[0]}:`);
  salesSection.appendChild(h2Elem);
  let ulElem = document.createElement('ul');
  salesSection.appendChild(ulElem);
  for (let i = 0; i < this.cookieSalesArray.length; i++) {
    let currentHour = timeSheet[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${currentHour}: ${this.cookieSalesArray[i]} cookies`;
    ulElem.appendChild(liElem);
  }
};

tokyoSales.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = (`${locations[1]}:`);
  salesSection.appendChild(h2Elem);
  let ulElem = document.createElement('ul');
  salesSection.appendChild(ulElem);
  for (let i = 0; i < this.cookieSalesArray.length; i++) {
    let currentHour = timeSheet[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${currentHour}: ${this.cookieSalesArray[i]} cookies`;
    ulElem.appendChild(liElem);
  }
};

dubaiSales.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = (`${locations[2]}:`);
  salesSection.appendChild(h2Elem);
  let ulElem = document.createElement('ul');
  salesSection.appendChild(ulElem);
  for (let i = 0; i < this.cookieSalesArray.length; i++) {
    let currentHour = timeSheet[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${currentHour}: ${this.cookieSalesArray[i]} cookies`;
    ulElem.appendChild(liElem);
  }
};

parisSales.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = (`${locations[3]}:`);
  salesSection.appendChild(h2Elem);
  let ulElem = document.createElement('ul');
  salesSection.appendChild(ulElem);
  for (let i = 0; i < this.cookieSalesArray.length; i++) {
    let currentHour = timeSheet[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${currentHour}: ${this.cookieSalesArray[i]} cookies`;
    ulElem.appendChild(liElem);
  }
};

limaSales.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = (`${locations[4]}:`);
  salesSection.appendChild(h2Elem);
  let ulElem = document.createElement('ul');
  salesSection.appendChild(ulElem);
  for (let i = 0; i < this.cookieSalesArray.length; i++) {
    let currentHour = timeSheet[i];
    let liElem = document.createElement('li');
    liElem.textContent = `${currentHour}: ${this.cookieSalesArray[i]} cookies`;
    ulElem.appendChild(liElem);
  }
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
  timeSheet.push('Total');
  a.cookieSalesArray.push(lastValue);
  //console.table(array6);
  return array6;
}

function renderAllCities() {
  for (let i = 0; i < storeLocations.length; i++) {
    let currentCity = storeLocations[i];
    console.log(currentCity);
    currentCity.randomCust();
    currentCity.cookieSales();
    sumAnyArray(storeLocations[i]);
    currentCity.render();
    //console.table(currentCity.cookieSalesArray);
  }
}
renderAllCities();

