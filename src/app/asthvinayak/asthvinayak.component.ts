import { Component, OnInit } from '@angular/core';

interface info {
  TypeofTaxi:string;
    Model:string;
    Capacity:any;
    OneWayTaxiFare:any;

}
interface info1{
  Location:string;
  Ganapatiname:string;
  Distance:any;
  information:string;
}

const INFO: info[] = [
  {
    TypeofTaxi:'AC Hatchback',
    Model:'Tata Indica',
    Capacity:'4 passengers',
    OneWayTaxiFare:'Starts from ₹ 1,430'
  },
  {
    TypeofTaxi:'AC Sedan',
    Model:'Toyota Etios, Swift Dzire',
    Capacity:'4 passengers',
    OneWayTaxiFare:'Starts from ₹ 1,220'
  },
  {
    TypeofTaxi:'AC SUV Large',
    Model:'Toyota Innova, Crysta, Ertiga',
    Capacity:'6/7 passengers',
    OneWayTaxiFare:'Starts from ₹ 1,483'
  },
  {
    TypeofTaxi:'AC Minibus',
    Model:'Tempo Traveller',
    Capacity:'12/16 passengers',
    OneWayTaxiFare:'Starts from ₹ 3,250'
  }
];


const INFO1: info1[] = [
  {
    Location:'Morgaon, Pune district',
    Ganapatiname:'Mayureshwar Temple',
    Distance:'Pune-65 Km',
    information:'Moragon is the foremost centre of worship of the Ganapatya sect, which considers Ganesha as the Supreme Being.'
  },
  {
    Location:'Siddhatek, Ahmednagar district',
    Ganapatiname:'Siddhivinayak Temple',
    Distance:'Pune-Solapur highway about 48 km',
    information:'The temple is located on the northern bank of the river Bhima in Siddhatek in the Karjat taluka of Ahmednagar district'
  },
  {
    Location:'Pali, Raigad district',
    Ganapatiname:'Ballaleshwar Temple',
    Distance:'Pune-Lonavla-Khopoli-Pali is 111 km.',
    information:'Ganesha is believed to have saved this boy-devotee, Ballala, who was beaten by local villagers and his father for his single-minded devotion to him.'
  },
  {
    Location:'Mahad, Raigad district',
    Ganapatiname:'Varadavinayak Temple',
    Distance:'pune 80 Km',
    information:'Ganesha is said to reside here in the form of Varada Vinayaka, the giver of bounty and success'
  },
  {
    Location:'Theur, Pune district',
    Ganapatiname:'Chintamani Temple',
    Distance:'Pune-80 Km',
    information:'Ganesha is believed to have got back the precious Chinatamani jewel from the greedy Guna for sage Kapila at this spot.'
  },
  {
    Location:'Lenyadri, Pune district',
    Ganapatiname:'Girijatmaj Temple',
    Distance:'pune-Nashik 94km',
    information:'The temple is carved out of a single stone hill.'
  },
  {
    Location:'Ozar, Pune district',
    Ganapatiname:'Vighneshwar Temple',
    Distance:'pune 80 Km',
    information:'The temple top is Golden and is possibly built by Chimaji Appa after defeating the Portuguese rulers of Vasai and Sashti.'
  },
  {
    Location:'Ranjangaon, Pune district',
    Ganapatiname:'Mahaganapati Temple',
    Distance:'Pune 86km',
    information:'Mahaganapati is portrayed, seated on a lotus, flanked by his consorts Siddhi and Ridhi.'
  }
];

@Component({
  selector: 'app-asthvinayak',
  templateUrl: './asthvinayak.component.html',
  styleUrls: ['./asthvinayak.component.scss']
})


export class AsthvinayakComponent implements OnInit {
  info = INFO;
  info1= INFO1;
  constructor() { }

  ngOnInit() {
  }

}
