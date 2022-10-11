import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-obspro',
  templateUrl: './obspro.component.html',
  styleUrls: ['./obspro.component.scss']
})
export class ObsproComponent implements OnInit,OnDestroy {
private mysubscription:Subscription;
  constructor() { }

  ngOnInit(): void {
    const myPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve('dog');
      }, 100);
    });

    myPromise.then(result => {
      console.log('promise: ', result);
    })

    const myObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next('dog');
        observer.next('cat');
        observer.next('bird');
      }, 100);

      let counter=0;
setInterval(()=>{
  counter=counter+1;
  observer.next(counter);
},1000);
    });
this.mysubscription= myObservable.subscribe(r=>console.log('count'+r));
    const subscription = myObservable
      // .filter(result => result === 'bird')
      //.subscribe(result => {
       // console.log('observable: ', result);
     // });

    // subscription.unsubscribe();

    myObservable.pipe(
      filter(d=>d === 'bird')
    )
    .subscribe(r=>console.log(r));
  }
ngOnDestroy(): void {
this.mysubscription.unsubscribe();
}
}
















// const myPromise = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('dog');
//   }, 100);
// });

// myPromise.then(result => {
//   console.log('promise: ', result);
// })

// const myObservable = new Rx.Observable(observer => {
//   setTimeout(() => {
//     observer.next('dog');
//     observer.next('cat');
//     observer.next('bird');
//   }, 100);
// });

// const subscription = myObservable
//   // .filter(result => result === 'bird')
//   .subscribe(result => {
//     console.log('observable: ', result);
//   });

// // subscription.unsubscribe();
