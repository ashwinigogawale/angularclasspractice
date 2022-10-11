import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(contactForm){
    var firstName = contactForm.value.firstName;
    console.log(firstName);

    var lastName = contactForm.value.lastName;
    console.log(lastName);

    var comment = contactForm.value.comment;
    console.log(comment);
console.log(contactForm.value)

  }

}
