import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { SelectService } from 'src/app/selects/select.service';
// import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.css']
})

export class SelectsComponent implements OnInit {
  public selects;
  public selectForm;

  public selectsU;

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

  add(selectForm) {
    this.selectService.add(selectForm);
    this.refreshSelects();
    this.selectForm.reset();
  }
  delete({ id }) {
    this.selectService.delete(id);
    this.refreshSelects();
  }
  edit(select, { innerText: age }) {
    const { id } = select;
    this.selectService.edit(id, { ...select, age });
    this.refreshSelects();
  }
  editName(select, { innerText: name }) {
    const { id } = select;
    this.selectService.edit(id, { ...select, name });
    this.refreshSelects();
  }
  toggle({ id, complete }) {
    const idPr = document.getElementById('counterID').innerHTML;
    this.selectService.toggle(id, idPr, complete );
    this.refreshSelects();
  }

  counter: string = '';
  counterID: string = '';
//  increment() { this.counter = '+'; }
//  decrement() { this.counter = '-'; }

  select({ id, name }) {
    this.counter = name ;  // отобразить на экране {{counter}} - это id user
    this.counterID = id ;  // id project
		document.getElementById('userS').style.display = 'block';
    this.selectService.select(id);
    this.refreshSelects();

  }

}

