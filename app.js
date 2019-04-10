'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function getRandomNumber(minimum, maximum){
  return Math.floor(Math.random() * (maximum - minimum +1)) + minimum;
}
function Store(id, minimumCustomer, maximumCustomer, avgCookiePerHr){


  this.minimumCustomer = minimumCustomer;
  this.maximumCustomer = maximumCustomer;
  this.avgCookiePerHr = avgCookiePerHr;
  this.id = id;
  this.cookiesSoldPerHourArray = [];
  this.cookieTotals = 0;

  this.getCustomersPerHour = function(){
    return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
  };
  this.getCookiesPurchasedPerHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesSoldPerHourArray.push(Math.ceil(this.getCustomersPerHour(this.minimumCustomer, maximumCustomer) * this.avgCookiePerHr));
    }
  };
  this.dailyTotals = function(){
    for(var i = 0; i < this.cookiesSoldPerHourArray.length; i++ ){
      this.cookieTotals += this.cookiesSoldPerHourArray[i];
    }
  };
}

this.cashDrop = function() {
  this.cookiesSoldPerHourArray();
  this.dailyTotals();
  this.render();
};
Store.prototype.render = function(){
  var tr = document.createElement('tr');

  var tdID = document.createElement('td');
  tdID.textContent = this.id;
  tr.append(tdID);

  var tdCookiesPerHour = document.createElement('td');
  tdCookiesPerHour.textContent = this.cookiesSoldPerHourArray;
  for(var i = 0; i < this.cookiesSoldPerHourArray; i++){
    tr.append(tdCookiesPerHour);
  }

};
var referenceTable = document.getElementById('lox-cookie-table');

function tableHeadings(){
  var trHead = document.createElement('tr');
  for(var i = 0; 0 < hours.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = (hours[i]);
    trHead.append(trHead);
  }
}
tableHeadings();


var pikeStreet = new Store('loc-first-and-pike', 23, 65, 6.3);
var seaTac = new Store('loc-seatac', 3, 24, 1.2 );
var seattleCenter = new Store('loc-seattle-center', 11, 38, 3.7);
var capitolHill = new Store('loc-capitol-hill', 20, 38, 2.3);
var alki = new Store('alki', 2, 16, 4.6);

pikeStreet.cashDrop();
seaTac.cashDrop();
seattleCenter.cashDrop();
capitolHill.cashDrop();
alki.cashDrop();





