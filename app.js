'use strict';

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

 locations = ['Seattle','Tokyo','Dubai','Paris','Lima']

 //costumerPerHoursMin = ['23','3','11','20','2']

 //costumerPerHoursMax = ['65','24','38','38','16']


    let Seattlestore = {
      location : 'Seattle',
      customerMinHours : 23 ,
      customerMaxHours : 65 ,
       avgcookiePersale : 6.3 ,
       avgcustomerperhour : [] ,
       customerperhour : function () {
         for (let index = 0; index < workingHours.length; index++) 
         {this.avgcustomerperhour[index] = randomgenerator(this.customerMinHours, this.customerMaxHours); }
        },
         cookiessales_perhour : function() {
         let numOfCookies=this.avgcookiePersale * this.avgcustomerperhour;
         this.avgcustomerperhour.push(numOfCookies);
       },

    };

    let globVar = document.getElementById('newTable');
    let table = document.createElement('table');
    let arrOfObj = [];

    this.customers = [];
    this.cookiessale = [];

    function locations(location,customerMinHours,customerMaxHours,avgcookiePersale,avgcustomerperhour){
      this.location = location;
      this.customerMinHours = customerMinHours;
      this.customerMaxHours = customerMaxHours;
      this.avgcookiePersale = avgcookiePersale;
      this.avgcustomerperhour = avgcustomerperhour;
      
      

      locations.prototype.calcustomers = function () {
        this.customers();
        for (let i = 0; i < workingHours.length; i++) {
          this.customers.push(this.customerMaxHours - this.customerMinHours )
            
        }
       console.log(this.customers);

      }



      locations.prototype.calccookies = function () {
  this.cookiessale();
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push((this.avgcookiePersale * this.avgcustomerperhour[i])
    );

    console.log(this.cookiessale);

  }



  let Seattle = new locations("Seattle", 23, 65, 6.3);
  let tokyo = new locations("Tokyo", 3, 24, 1.2);
  let dubai = new locations("Dubai", 11, 38, 3.7);
  let paris = new locations("Paris", 3, 24, 1.2);
  let lima = new locations("Lima", 3, 24, 1.2);


  console.log(arrOfObj);
  
      }

    }
