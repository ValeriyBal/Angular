import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-world',                   // may be заменить на customElements.define('app-hello-world', custom); in app.modules.ts
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
