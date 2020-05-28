import { Component, OnInit } from '@angular/core';

@Component({
//  selector: 'app-hello-world',    // заменен на customElements.define('app-hello-world', custom);
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
