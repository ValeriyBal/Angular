import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//  title = 'example-custom-element';

  showMessage() {
    const hello = document.getElementById('hello');
    hello.style.display = 'block';
    hello.innerHTML = '<app-hello-world></app-hello-world>';
  }

  HiddenMessage() {
    const hello = document.getElementById('hello');
    hello.style.display = 'none';
  }

}
