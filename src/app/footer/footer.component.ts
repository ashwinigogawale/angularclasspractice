import { Component, OnInit,Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      }
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }
    })();
}

  ngOnInit() {
    const chatBtn = document.querySelector('.ebRqTc');
    const popup = document.querySelector (' .kiuXFD');
    const button1 = document.querySelector (' .iEkjLa');
    const button2 = document.querySelector (' .epNqvL');

    chatBtn.addEventListener('click',()=>{
      button1.classList.toggle('hide');
      button2.classList.toggle('show');
      popup.classList.toggle('show');
    })
  }

}
