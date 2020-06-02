import {Component} from '@angular/core';

@Component({
//  selector: 'app-root',
  selector: 'app-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isShown: any;

  showMessage() {
    this.isShown = true;
  }

  HiddenMessage() {
    this.isShown = false;
  }

  showMessageBak() {
    const hello = document.getElementById('hello');
    hello.style.display = 'block';
    hello.innerHTML = '<app-hello-world></app-hello-world>';
  }
  HiddenMessageBak() {
    const hello = document.getElementById('hello');
    hello.style.display = 'none';
  }

}
