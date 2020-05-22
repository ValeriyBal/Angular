import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { SelectService } from 'src/app/selects/select.service';
// import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.css'],
  inputs: [`projectName`]
})

export class SelectsComponent implements OnInit {
  public selects;
  public selectForm;
  public selectsU;

//  public projectName: string;
//  @Input() projectName;

  constructor(
    private selectService: SelectService,
    private formBuilder: FormBuilder
  ) {
    this.selectForm = this.formBuilder.group({
      name: '',
      idPr: ''
    });
  }

  ngOnInit() {
    this.refreshSelects();
  }
  refreshSelects() {
    this.selects = this.selectService.selects;
  }

  toggle({ id, complete }) {
    const idPr = document.getElementById('counterID').innerHTML;
    this.selectService.toggle(id, idPr, complete );
    this.refreshSelects();
  }

  counter: string = '';    // project name
  counterID: string = '';  // project id

  select({ id, name }) {
    this.counter = name ;  // отобразить на экране {{counter}}
    this.counterID = id ;  // id project
		document.getElementById('userS').style.display = 'block';
    this.selectService.select(id);
    this.refreshSelects();
  }

}

