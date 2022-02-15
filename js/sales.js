'use strict';

let salesSection = document.getElementById('sales-section');
function randomCustomerCount(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattleSales = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  customerCount: 0,
  randomCust: function (){
    this.customerCount = `${randomCustomerCount(this.minCust,this.maxCust)}`;
  }
};
let tokyoSales = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  customerCount: 0,
  randomCust: function (){
    this.customerCount = `${randomCustomerCount(this.minCust,this.maxCust)}`;
  }
};
let dubaiSales = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  customerCount: 0,
  randomCust: function (){
    this.customerCount = `${randomCustomerCount(this.minCust,this.maxCust)}`;
  }
};
let parisSales = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  customerCount: 0,
  randomCust: function (){
    this.customerCount = `${randomCustomerCount(this.minCust,this.maxCust)}`;
  }
};
let limaSales = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  customerCount: 0,
  randomCust: function (){
    this.customerCount = `${randomCustomerCount(this.minCust,this.maxCust)}`;
  }
};
