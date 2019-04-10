'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomNumber(minimum, maximum){
  return Math.floor(Math.random() * (maximum - minimum +1)) + minimum;
}

// var firstAndPike = {
//   minimumCustomer: 23,
//   maximumCustomer: 65,
//   avgCookiePerHr: 6.3,
//   id: 'loc-first-and-pike',
//   cookiesPerHourArray: [],
//   getRandomCustomersPerHour: function(){
//     return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//   },
//   getCookiesPurchasedPerHour: function(){
//     return Math.ceil(this.getRandomCustomersPerHour() * this.avgCookiePerHr);
//   },
//   render: function() {

//     var referenceUl = document.getElementById(this.id);

//     var totals = 0;
//     for(var i = 0; i < hours.length; i++){
//       var purchased = this.getCookiesPurchasedPerHour();
//       this.cookiesPerHourArray.push(Math.ceil(purchased));
//       //Josh - 2 - Creating the new Element
//       var newElement = document.createElement('li');
//       newElement.textContent = `${hours[i]}, we sold ${this.cookiesPerHourArray[i]} cookies`;
//       //Josh - Add the element to the DOM
//       referenceUl.append(newElement);

//       totals += this.cookiesPerHourArray[i];


//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Totals for the day: ${totals}`;
//     referenceUl.append(totalLi);
//   }
// };
// firstAndPike.render();

// var seatac = {
//   minimumCustomer: 3,
//   maximumCustomer: 24,
//   avgCookiePerHr: 1.2,
//   id: 'loc-seatac',
//   cookiesPerHourArray: [],
//   getRandomCustomersPerHour: function(){
//     return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//   },
//   getCookiesPurchasedPerHour: function(){
//     return Math.ceil(this.getRandomCustomersPerHour() * this.avgCookiePerHr);
//   },
//   render: function() {

//     var referenceUl = document.getElementById(this.id);

//     var totals = 0;
//     for(var i = 0; i < hours.length; i++){
//       var purchased = this.getCookiesPurchasedPerHour();
//       this.cookiesPerHourArray.push(Math.ceil(purchased));
//       //Josh - 2 - Creating the new Element
//       var newElement = document.createElement('li');
//       newElement.textContent = `${hours[i]}, we sold ${this.cookiesPerHourArray[i]} cookies`;
//       //Josh - Add the element to the DOM
//       referenceUl.append(newElement);

//       totals += this.cookiesPerHourArray[i];


//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Totals for the day: ${totals}`;
//     referenceUl.append(totalLi);
//   }
// };
// seatac.render();

// var seattleCenter = {
//   minimumCustomer: 11,
//   maximumCustomer: 38,
//   avgCookiePerHr: 3.7,
//   id: 'loc-seattle-center',
//   cookiesPerHourArray: [],
//   getRandomCustomersPerHour: function(){
//     return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//   },
//   getCookiesPurchasedPerHour: function(){
//     return Math.ceil(this.getRandomCustomersPerHour() * this.avgCookiePerHr);
//   },
//   render: function() {

//     var referenceUl = document.getElementById(this.id);

//     var totals = 0;
//     for(var i = 0; i < hours.length; i++){
//       var purchased = this.getCookiesPurchasedPerHour();
//       this.cookiesPerHourArray.push(Math.ceil(purchased));
//       //Josh - 2 - Creating the new Element
//       var newElement = document.createElement('li');
//       newElement.textContent = `${hours[i]}, we sold ${this.cookiesPerHourArray[i]} cookies`;
//       //Josh - Add the element to the DOM
//       referenceUl.append(newElement);

//       totals += this.cookiesPerHourArray[i];


//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Totals for the day: ${totals}`;
//     referenceUl.append(totalLi);
//   }
// };
// seattleCenter.render();

// var capitolHill = {
//   minimumCustomer: 20,
//   maximumCustomer: 38,
//   avgCookiePerHr: 2.3,
//   id: 'loc-capitol-hill',
//   cookiesPerHourArray: [],
//   getRandomCustomersPerHour: function(){
//     return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//   },
//   getCookiesPurchasedPerHour: function(){
//     return Math.ceil(this.getRandomCustomersPerHour() * this.avgCookiePerHr);
//   },
//   render: function() {

//     var referenceUl = document.getElementById(this.id);

//     var totals = 0;
//     for(var i = 0; i < hours.length; i++){
//       var purchased = this.getCookiesPurchasedPerHour();
//       this.cookiesPerHourArray.push(Math.ceil(purchased));
//       //Josh - 2 - Creating the new Element
//       var newElement = document.createElement('li');
//       newElement.textContent = `${hours[i]}, we sold ${this.cookiesPerHourArray[i]} cookies`;
//       //Josh - Add the element to the DOM
//       referenceUl.append(newElement);

//       totals += this.cookiesPerHourArray[i];


//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Totals for the day: ${totals}`;
//     referenceUl.append(totalLi);
//   }
// };
// capitolHill.render();
// var alki = {
//   minimumCustomer: 2,
//   maximumCustomer: 16,
//   avgCookiePerHr: 4.6,
//   id: 'loc-alki',
//   cookiesPerHourArray: [],
//   getRandomCustomersPerHour: function(){
//     return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
//   },
//   getCookiesPurchasedPerHour: function(){
//     return Math.ceil(this.getRandomCustomersPerHour() * this.avgCookiePerHr);
//   },
//   render: function() {

//     var referenceUl = document.getElementById(this.id);

//     var totals = 0;
//     for(var i = 0; i < hours.length; i++){
//       var purchased = this.getCookiesPurchasedPerHour();
//       this.cookiesPerHourArray.push(Math.ceil(purchased));
//       //Josh - 2 - Creating the new Element
//       var newElement = document.createElement('li');
//       newElement.textContent = `${hours[i]}, we sold ${this.cookiesPerHourArray[i]} cookies`;
//       //Josh - Add the element to the DOM
//       referenceUl.append(newElement);

//       totals += this.cookiesPerHourArray[i];


//     }
//     var totalLi = document.createElement('li');
//     totalLi.textContent = `Totals for the day: ${totals}`;
//     referenceUl.append(totalLi);
//   }
// };
// alki.render();


function Store(id, minimumCustomer, maximumCustomer, avgCookiePerHr){
  
  
  this.minimumCustomer = minimumCustomer;
  this.maximumCustomer = maximumCustomer;
  this.avgCookiePerHr = avgCookiePerHr;
  this.id = id;
  this.cookiesPerHourArray = []
  this.totals = 0;
  this.getRandomCustomersPerHour = function(){
    return getRandomNumber(this.minimumCustomer, this.maximumCustomer);
  };
  this.getCookiesPurchasedPerHour = function(){
    return Math.ceil(this.getRandomCustomersPerHour() * this.avgCookiePerHr);
  };
  this.render = function() {

    var referenceUl = document.getElementById(this.id);

    var totals = 0;
    for(var i = 0; i < hours.length; i++){
      var purchased = this.getCookiesPurchasedPerHour();
      this.cookiesPerHourArray.push(Math.ceil(purchased));
      //Josh - 2 - Creating the new Element
      var newElement = document.createElement('td');
      newElement.textContent = `${hours[i]}, we sold ${this.cookiesPerHourArray[i]} cookies`;
      //Josh - Add the element to the DOM
      referenceUl.append(newElement);

      totals += this.cookiesPerHourArray[i];


    }
    var totalLi = document.createElement('li');
    totalLi.textContent = `Totals for the day: ${totals}`;
    referenceUl.append(totalLi);
  };
}

Store.prototype.makeTable = function(){
  var tr = document.createElement('tr');


  var tdStoreName = document.createElement('td');
  tdStoreName.textContent = this.storeName;
  tr.append(tdStoreName);

  var tdMinimumCustomer = document.createElement('td');
  tdMinimumCustomer.textContent = this.minimumCustomer;
  tr.append(tdMinimumCustomer);

  var MaximumCustomer = document.createElement('td');
  MaximumCustomer.textContent = this.maximumCustomer;
  tr.append(MaximumCustomer);

  var tdID = document.createElement('td');
  tdID.textContent = this.id;
  tr.append(tdID);


  var tdCookiesPerHour = document.createElement('td');
  tdCookiesPerHour.textContent = this.cookiesPerHourArray;
  for(var i = 0; i < this.cookiesPerHourArray; i++){
    tr.append(tdCookiesPerHour);


  }

  function tableHeadings(){
    var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
    var tdHours = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = hours[i];
    tr.append(tdHours);
    for(var i = 0; 0 < hours.length; i++){
     

    }
  }
     tableHeadings(); 


  var pike = new Store('loc-first-and-pike', 23, 65, 6.3);

  pike.
  
  }


