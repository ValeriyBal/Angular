import {Component} from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//  title = 'example-custom-element';
  isShown: any;

  showMessage() {
    this.isShown = true;
  }

  HiddenMessage() {
    this.isShown = false;
  }

}
