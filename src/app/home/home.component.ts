import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const counters=document.querySelectorAll<HTMLElement>('.counter')

    counters.forEach(counter =>{
      counter.innerText='0'

        const updateCounter=()=>{
            const target=+counter.getAttribute('data-target')
            const c=+counter.innerText

            const increment=target/200
            if(c < target){
                counter.innerText=`${Math.ceil(c+increment)}`
                setTimeout(updateCounter,1)
            }else{

            }
        }
        updateCounter()
    })

    const chatBtn = document.getElementById('pulse');
    const popup = document.getElementById('opened');
    const button1 = document.querySelector ('.smat-div');
    const button2 = document.querySelector ('.epNqvL');




    chatBtn.addEventListener('click',()=>{
      button1.classList.toggle('hide');
      button2.classList.toggle('show');
      popup.classList.toggle('show');
    })



  }

}
