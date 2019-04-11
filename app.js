'use strict';
var allShops = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var referenceTable = document.getElementById('lox-cookie-table');
var referenceTableFooter = document.getElementById('lox-cookie-foot');
var hourlyCookieTotalsArray = []
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

  allShops.push(this);
//}
// Store.__prototype__.getCustomersPerHour = function() {
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


  this.cashDrop = function() {
    this.getCookiesPurchasedPerHour();
    this.dailyTotals();
    this.render();
  };

  this.render = function(){
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');

    tdElement.textContent = this.id;
    trElement.append(tdElement);

    for(var i = 0; i < this.cookiesSoldPerHourArray.length; i++){
      tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesSoldPerHourArray[i];
      trElement.append(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = this.cookieTotals;
    trElement.append(tdElement);

    referenceTable.append(trElement);
  };
}

function tableHeadings(){
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Locations';
  trElement.append(thElement);
  for(var i = 0; i < hours.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.append(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Total Sails';
  trElement.append(thElement);

  referenceTable.append(trElement);
}
tableHeadings();


var pikeStreet = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2 );
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki Beach', 2, 16, 4.6);


function footcalculator(){
  for(var c= 0; c < hours.length; c++){
    var hourlyCookieTotals = 0;
    for(var i = 0; i < allShops.length; i++){
      hourlyCookieTotals += allShops[i].cookiesSoldPerHourArray[c];
    }
  hourlyCookieTotalsArray[c] = hourlyCookieTotals;
  }
}


function tableFooter(){
  footcalculator();

  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Locations';
  trElement.append(thElement);
  for(var i = 0; i < hours.length; i++){
    thElement = document.createElement('td');
    thElement.textContent = hourlyCookieTotalsArray[i];
    trElement.append(thElement);
  }
  //thElement = document.createElement('td');
  //thElement.textContent = (footcalculator);
  //trElement.append(thElement);

  referenceTableFooter.append(trElement);
}
tableFooter();



// for(var c = 0; c < hours.length ; c++){

//   // columnSum = 0;
// for(var i = 0; i < this.cookiesSoldPerHourArray.length; i++){






pikeStreet.cashDrop();
seaTac.cashDrop();
seattleCenter.cashDrop();
capitolHill.cashDrop();
alki.cashDrop();
tableFooter();











