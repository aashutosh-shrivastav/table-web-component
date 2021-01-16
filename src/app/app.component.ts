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
    {"id":11,"first_name":"Nara","last_name":"Greenhaugh","email":"ngreenhaugha@ihg.com","date_of_birth":"2017-08-05T19:45:18Z","age":76,"country":"Sweden","phone":"7669716008"},
    {"id":12,"first_name":"Holt","last_name":"Di Pietro","email":"hdipietrob@privacy.gov.au","date_of_birth":"1997-01-31T00:21:58Z","age":80,"country":"Canada","phone":"2487048153"},
    {"id":13,"first_name":"Sibbie","last_name":"Van Der Weedenburg","email":"svanderweedenburgc@booking.com","date_of_birth":"1995-08-06T20:09:09Z","age":58,"country":"China","phone":"3743806504"},
    {"id":14,"first_name":"Letti","last_name":"Mainstone","email":"lmainstoned@google.ru","date_of_birth":"1989-02-17T00:19:59Z","age":81,"country":"Brazil","phone":"4899876771"},
    {"id":15,"first_name":"Whitman","last_name":"Chiverstone","email":"wchiverstonee@alibaba.com","date_of_birth":"1973-02-10T09:13:20Z","age":43,"country":"China","phone":"5252936594"},
    {"id":16,"first_name":"Kendricks","last_name":"Abbie","email":"kabbief@loc.gov","date_of_birth":"1971-04-30T07:59:23Z","age":11,"country":"Philippines","phone":"5199264754"},
    {"id":17,"first_name":"Tabbie","last_name":"Lugg","email":"tluggg@hp.com","date_of_birth":"1981-01-09T09:38:21Z","age":63,"country":"France","phone":"8146616858"},
    {"id":18,"first_name":"Hew","last_name":"Giorgini","email":"hgiorginih@wunderground.com","date_of_birth":"1985-09-29T12:59:10Z","age":4,"country":"Russia","phone":"6065755875"},
    {"id":19,"first_name":"Bil","last_name":"Shorrock","email":"bshorrocki@thetimes.co.uk","date_of_birth":"1987-10-03T00:14:39Z","age":66,"country":"China","phone":"2917562951"},
    {"id":20,"first_name":"Huey","last_name":"Huskisson","email":"hhuskissonj@pen.io","date_of_birth":"2004-07-29T13:50:20Z","age":97,"country":"China","phone":"5275290616"},
    {"id":21,"first_name":"Cosmo","last_name":"Cairney","email":"ccairneyk@google.pl","date_of_birth":"2014-11-13T06:33:26Z","age":24,"country":"Azerbaijan","phone":"7691995448"},
    {"id":22,"first_name":"Emylee","last_name":"Jirek","email":"ejirekl@unblog.fr","date_of_birth":"2000-11-07T02:39:04Z","age":38,"country":"Mexico","phone":"1109020794"},
    {"id":23,"first_name":"Paola","last_name":"Garrie","email":"pgarriem@gov.uk","date_of_birth":"2016-12-09T07:54:05Z","age":86,"country":"China","phone":"6517015369"},
    {"id":24,"first_name":"Cyb","last_name":"Phillis","email":"cphillisn@istockphoto.com","date_of_birth":"1974-09-03T05:57:30Z","age":26,"country":"Iran","phone":"4093916956"},
    {"id":25,"first_name":"Ilysa","last_name":"Sarl","email":"isarlo@opera.com","date_of_birth":"1981-10-01T20:48:16Z","age":12,"country":"Switzerland","phone":"8521655360"},
    {"id":26,"first_name":"Perri","last_name":"Simounet","email":"psimounetp@earthlink.net","date_of_birth":"1991-03-25T12:37:25Z","age":42,"country":"Rwanda","phone":"7867372363"},
    {"id":27,"first_name":"Laurent","last_name":"Lowdes","email":"llowdesq@dailymail.co.uk","date_of_birth":"2016-03-20T21:50:49Z","age":81,"country":"Indonesia","phone":"2689242050"},
    {"id":28,"first_name":"Dun","last_name":"Piele","email":"dpieler@mashable.com","date_of_birth":"2006-06-25T15:40:12Z","age":41,"country":"Ukraine","phone":"4063978142"},
    {"id":29,"first_name":"Norrie","last_name":"Pidon","email":"npidons@ted.com","date_of_birth":"1979-05-22T10:45:27Z","age":92,"country":"Palestinian Territory","phone":"2481883082"},
    {"id":30,"first_name":"Torry","last_name":"Barenski","email":"tbarenskit@bloglovin.com","date_of_birth":"2010-09-23T19:21:06Z","age":26,"country":"Japan","phone":"2983684180"},
    {"id":31,"first_name":"Crystie","last_name":"Helks","email":"chelksu@redcross.org","date_of_birth":"1984-03-17T04:09:35Z","age":19,"country":"Cambodia","phone":"4638533878"},
    {"id":32,"first_name":"Keven","last_name":"Ivain","email":"kivainv@google.nl","date_of_birth":"2016-04-07T08:41:03Z","age":62,"country":"Gabon","phone":"3465677968"},
    {"id":33,"first_name":"Drugi","last_name":"Saur","email":"dsaurw@webeden.co.uk","date_of_birth":"1978-07-05T10:46:13Z","age":24,"country":"Indonesia","phone":"1178207723"},
    {"id":34,"first_name":"Bonita","last_name":"Nesfield","email":"bnesfieldx@lycos.com","date_of_birth":"2020-12-31T18:58:47Z","age":11,"country":"China","phone":"8921745835"},
    {"id":35,"first_name":"Valdemar","last_name":"Rosenfelt","email":"vrosenfelty@seesaa.net","date_of_birth":"1989-03-01T17:21:08Z","age":57,"country":"Bosnia and Herzegovina","phone":"1924034553"},
    {"id":36,"first_name":"Dominica","last_name":"Clapp","email":"dclappz@engadget.com","date_of_birth":"2009-12-30T13:50:14Z","age":98,"country":"Philippines","phone":"2083255138"},
    {"id":37,"first_name":"Loren","last_name":"Swainsbury","email":"lswainsbury10@4shared.com","date_of_birth":"2019-11-25T13:49:22Z","age":68,"country":"Ukraine","phone":"6423634075"},
    {"id":38,"first_name":"Drusie","last_name":"Medford","email":"dmedford11@hatena.ne.jp","date_of_birth":"1980-09-25T21:33:17Z","age":83,"country":"Egypt","phone":"1433492060"},
    {"id":39,"first_name":"Giacopo","last_name":"Rainard","email":"grainard12@narod.ru","date_of_birth":"1970-05-13T11:45:50Z","age":95,"country":"Colombia","phone":"8707470158"},
    {"id":40,"first_name":"Morten","last_name":"Killelea","email":"mkillelea13@flavors.me","date_of_birth":"2001-12-18T15:32:46Z","age":48,"country":"China","phone":"9923301853"},
    {"id":41,"first_name":"Kaitlynn","last_name":"Accomb","email":"kaccomb14@baidu.com","date_of_birth":"2000-01-26T06:01:00Z","age":9,"country":"China","phone":"3049518764"},
    {"id":42,"first_name":"Marsh","last_name":"MacNab","email":"mmacnab15@surveymonkey.com","date_of_birth":"1985-11-17T17:37:48Z","age":93,"country":"Greece","phone":"8214845892"},
    {"id":43,"first_name":"Greer","last_name":"Bohlsen","email":"gbohlsen16@jiathis.com","date_of_birth":"1987-02-06T11:00:14Z","age":33,"country":"China","phone":"2619372065"},
    {"id":44,"first_name":"Dov","last_name":"Gilpillan","email":"dgilpillan17@flickr.com","date_of_birth":"1985-08-11T17:16:42Z","age":14,"country":"Greece","phone":"7405037944"},
    {"id":45,"first_name":"Kare","last_name":"Insall","email":"kinsall18@nationalgeographic.com","date_of_birth":"1982-04-24T07:29:00Z","age":52,"country":"Sweden","phone":"7191722298"},
    {"id":46,"first_name":"Gwyneth","last_name":"Belli","email":"gbelli19@nba.com","date_of_birth":"1984-04-06T22:51:44Z","age":27,"country":"Albania","phone":"5026169724"},
    {"id":47,"first_name":"Starr","last_name":"MacNeachtain","email":"smacneachtain1a@1und1.de","date_of_birth":"2020-07-12T22:20:41Z","age":25,"country":"Thailand","phone":"7907598031"},
    {"id":48,"first_name":"Gabriel","last_name":"Grane","email":"ggrane1b@tumblr.com","date_of_birth":"1975-06-24T12:24:43Z","age":33,"country":"Poland","phone":"1305116363"},
    {"id":49,"first_name":"Ulrich","last_name":"Gladtbach","email":"ugladtbach1c@sphinn.com","date_of_birth":"2004-05-22T13:16:44Z","age":66,"country":"Brazil","phone":"7217737685"},
    {"id":50,"first_name":"Clarke","last_name":"Hadwick","email":"chadwick1d@slideshare.net","date_of_birth":"1971-06-14T11:59:07Z","age":34,"country":"Chile","phone":"2215172979"}
] ;

}
