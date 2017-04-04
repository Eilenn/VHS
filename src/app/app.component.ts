import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Welcome to {{name}}</h1>`,
  templateUrl: './templates/mainView.html',
})
export class AppComponent  { name = 'VHS Rental Service'; }
