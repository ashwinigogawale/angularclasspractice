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
    OneWayTaxi:'Starts from ₹ 2,888'
  },
  {
    TypeofTaxi:'AC Sedan',
    Model:'Toyota Etios, Swift Dzire',
    Capacity:'4 passengers',
    OneWayTaxi:'Starts from ₹ 2,788'
  },
  {
    TypeofTaxi:'AC SUV Large',
    Model:'Toyota Innova, Crysta, Ertiga',
    Capacity:'6/7 passengers',
    OneWayTaxi:'Starts from ₹ 3,100'
  },
  {
    TypeofTaxi:'AC Minibus',
    Model:'Tempo Traveller',
    Capacity:'12/16 passengers',
    OneWayTaxi:'Starts from ₹ 4,988'
  }
];
const INFO1: info1[] = [
  {
    sitename:'Nanded',
    distance:'13 Km',
    information:'Famous for Sahastrakund Waterfall, Nanded Fort, Kandhar Fort, and Hazur Sahib Gurudwara.',

  },
  {
    sitename:'Khed Shivapur',
    distance:'26 Km',
    information:'Famous for Sinhagad Fort, Baneshwar Temple, and Hajrat Kamar Ali Durvesh Dargah.',

  },
  {
    sitename:'Satara Ghat',
    distance:'67 Km',
    information:'Famous for panoramic mountain views, ancient stone step-well, and the hill temple of Harihareshwar.',

  },
  {
    sitename:'Wai',
    distance:'89 Km',
    information:'Famous for valley views, Maha Ganapati temple, Rajpuri Caves, and Pandavgarh hills.',

  },
  {
    sitename:'Panchgani',
    distance:'101 Km',
    information:'Famous for Parsi Point, Sydney Point, Table Land, and colonial heritage.',

  }
];
@Component({
  selector: 'app-punetomaha',
  templateUrl: './punetomaha.component.html',
  styleUrls: ['./punetomaha.component.scss']
})
export class PunetomahaComponent implements OnInit {

   info =INFO;
  info1 = INFO1;
  constructor() { }

  ngOnInit() {
  }

}
