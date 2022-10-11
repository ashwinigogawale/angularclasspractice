import { Component, OnInit } from '@angular/core';

interface info{
  TypeofTaxi:string;
  Model:string;
  Capacity:any;
  OneWayTaxi:string;
}
interface info1{
  sitename:string;
  distance:any;
  information:string;
}
const INFO: info[] = [
  {
    TypeofTaxi:'AC Hatchback',
    Model:'Tata Indica',
    Capacity:'4 passengers',
    OneWayTaxi:'Starts from ₹ 1000'
  },
  {
    TypeofTaxi:'AC Sedan',
    Model:'Toyota Etios, Swift Dzire',
    Capacity:'4 passengers',
    OneWayTaxi:'Starts from ₹ 1,220'
  },
  {
    TypeofTaxi:'AC SUV Large',
    Model:'Toyota Innova, Crysta, Ertiga',
    Capacity:'6/7 passengers',
    OneWayTaxi:'Starts from ₹ 1,900'
  },
  {
    TypeofTaxi:'AC Minibus',
    Model:'Tempo Traveller',
    Capacity:'12/16 passengers',
    OneWayTaxi:'Starts from ₹ 3,000'
  }
];
const INFO1: info1[] = [
  {
    sitename:'Kamshet',
    distance:'49 Km',
    information:'Famous for paragliding, mountain views, and lakes',

  },
  {
    sitename:'Devghar',
    distance:'59 Km',
    information:'Famous for ecotourism and wellness retreats, views of Western Ghats, lakeside retreats.',

  },
  {
    sitename:'Patan',
    distance:'60 Km',
    information:'Famous for Patan Rukmini Park and Patan Caves.',

  },
  {
    sitename:'Malavli',
    distance:'65 Km',
    information:'Famous for Bhaja Buddhist Heritage Caves and waterfalls.',

  }

];
@Component({
  selector: 'app-goa',
  templateUrl: './goa.component.html',
  styleUrls: ['./goa.component.scss']
})
export class GoaComponent implements OnInit {
  info =INFO;
  info1 = INFO1;
  constructor() { }

  ngOnInit() {
  }

}
