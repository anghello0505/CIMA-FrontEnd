import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
    `
    body {
      background: #000046; /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #000046, #1cb5e0); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #000046, #1cb5e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    
    `
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
