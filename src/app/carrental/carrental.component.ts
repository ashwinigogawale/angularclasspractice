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
    OneWayTaxi:'Starts from ₹ 1,000'
  },
  {
    TypeofTaxi:'AC Sedan',
    Model:'Toyota Etios, Swift Dzire',
    Capacity:'4 passengers',
    OneWayTaxi:'Starts from ₹ 1,685'
  },
  {
    TypeofTaxi:'AC SUV Large',
    Model:'Toyota Innova, Crysta, Ertiga',
    Capacity:'6/7 passengers',
    OneWayTaxi:'Starts from ₹ 1,931'
  },
  {
    TypeofTaxi:'AC Minibus',
    Model:'Tempo Traveller',
    Capacity:'12/16 passengers',
    OneWayTaxi:'Starts from ₹ 3,250'
  }
];
const INFO1: info1[] = [
  {
    sitename:'sarsbag',
    distance:'10 Km',
    information:'Famous for Ganesha temple or Garden',

  },
  {
    sitename:'Katraj udyan',
    distance:'20km',
    information:'Famous wild animal to see.',

  },
  {
    sitename:'Tulshibag',
    distance:'10 Km',
    information:'Famous for all shoping varity of female and male.',

  },
  {
    sitename:'Shinhgad Fort',
    distance:'40 Km',
    information:'Famous for historic fort with panoramic views, monsoon treks and hikes.',

  },
  {
    sitename:'Shaniwar wada',
    distance:'13 Km',
    information:'Famous foe shivaji maharaj stay.',

  }
];
@Component({
  selector: 'app-carrental',
  templateUrl: './carrental.component.html',
  styleUrls: ['./carrental.component.scss']
})
export class CarrentalComponent implements OnInit {
  info = INFO;
  info1 =INFO1;
  constructor() { }

  ngOnInit() {
  }

}
