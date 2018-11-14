import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-simple-form',
  template: `
    {{message}}
    <input #myInput type="text">
    <button (click)="onClick($event, myInput.value)">Click Me!</button>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
