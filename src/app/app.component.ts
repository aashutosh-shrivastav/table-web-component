import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-component';
  //columan feilds and header to be shown as input
  colData  = [
    {feild: "id"  , header: "Sr No." },
    {feild: "first_name"  , header: "First Name"},
    {feild: "last_name"  , header: "Last name"},
    {feild: "email"  , header: "Email"},

    {feild:  "date_of_birth" , header: "DOB"},
    {feild: "age"  , header:"Age" },
    {feild: "country"  , header: "Country"},
    {feild: "phone"  , header: "Phone No."}

  ];
//50 rows example datatable format ==> json object
  gridData = [
    {"id":1,"first_name":"Farlie","last_name":"Ovens","email":"fovens0@joomla.org","date_of_birth":"1981-03-29T19:44:17Z","age":20,"country":"Mali","phone":"9597227464"},
    {"id":2,"first_name":"Ezra","last_name":"Provost","email":"eprovost1@chron.com","date_of_birth":"1997-09-12T12:37:19Z","age":88,"country":"Brazil","phone":"5796875289"},
    {"id":3,"first_name":"Sherline","last_name":"Byram","email":"sbyram2@hhs.gov","date_of_birth":"1984-09-30T21:10:13Z","age":88,"country":"China","phone":"6378421044"},
    {"id":4,"first_name":"Aeriell","last_name":"Hing","email":"ahing3@freewebs.com","date_of_birth":"2013-04-28T19:24:12Z","age":28,"country":"Peru","phone":"9807725562"},
    {"id":5,"first_name":"Hans","last_name":"Ruffell","email":"hruffell4@gravatar.com","date_of_birth":"1970-04-02T14:06:25Z","age":10,"country":"Canada","phone":"3808018002"},
    {"id":6,"first_name":"Kirstyn","last_name":"Rydeard","email":"krydeard5@oaic.gov.au","date_of_birth":"2000-07-25T02:46:10Z","age":25,"country":"Philippines","phone":"6029694127"},
    {"id":7,"first_name":"Madelyn","last_name":"Shillitoe","email":"mshillitoe6@census.gov","date_of_birth":"1994-05-21T20:40:24Z","age":80,"country":"Brazil","phone":"7632984065"},
    {"id":8,"first_name":"Micky","last_name":"Feathers","email":"mfeathers7@woothemes.com","date_of_birth":"2017-01-28T15:36:25Z","age":29,"country":"China","phone":"8685311443"},
    {"id":9,"first_name":"Vilhelmina","last_name":"Causton","email":"vcauston8@cargocollective.com","date_of_birth":"2004-10-11T13:46:49Z","age":29,"country":"Czech Republic","phone":"3399032063"},
    {"id":10,"first_name":"Bay","last_name":"Micheau","email":"bmicheau9@tumblr.com","date_of_birth":"2012-08-13T18:16:09Z","age":23,"country":"Portugal","phone":"8375893539"},

] ;

}
