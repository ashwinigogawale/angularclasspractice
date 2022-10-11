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
    OneWayTaxi:'Starts from ₹ 1,685'
  },
  {
    TypeofTaxi:'AC Sedan',
    Model:'Toyota Etios, Swift Dzire',
    Capacity:'4 passengers',
    OneWayTaxi:'Starts from ₹ 1,931'
  },
  {
    TypeofTaxi:'AC SUV Large',
    Model:'Toyota Innova, Crysta, Ertiga',
    Capacity:'6/7 passengers',
    OneWayTaxi:'Starts from ₹ 3,700'
  },
  {
    TypeofTaxi:'AC Minibus',
    Model:'Tempo Traveller',
    Capacity:'12/16 passengers',
    OneWayTaxi:'Starts from ₹ 3,200'
  }
];
const INFO1: info1[] = [
  {
    sitename:'Kamshet',
    distance:'49 Km',
    information:'Famous for paragliding, mountain views, and lakes.',

  },
  {
    sitename:'Devghar',
    distance:'60 Km',
    information:'Famous for ecotourism and wellness retreats, views of Western Ghats, lakeside retreats.',

  },
  {
    sitename:'Khandala-Lonavala',
    distance:'66 Km',
    information:'Famous for panoramic views, hill resorts, pleasant weather, lakeside camping and water sports.',

  },
  {
    sitename:'Rajmachi Fort',
    distance:'80 Km',
    information:'Famous for historic fort with panoramic views, monsoon treks and hikes.',

  },
  {
    sitename:'Karnala',
    distance:'121 Km',
    information:'Famous for bird sanctuary, old forts, and ecotourism.',

  }
];
@Component({
  selector: 'app-punetomumbai',
  templateUrl: './punetomumbai.component.html',
  styleUrls: ['./punetomumbai.component.scss']
})
export class PunetomumbaiComponent implements OnInit {

  info =INFO;
  info1 = INFO1;
  constructor() { }

  ngOnInit() {
  }

}
