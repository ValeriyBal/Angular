import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/users/user.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  public users;
  public userForm;

  constructor(
    private userService: UserService,

    private formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      name: '',
      name1: '',
      name2: '',
      age: ''
    });
  }

  ngOnInit() {
    this.refreshUsers();
  }

  refreshUsers() {
    this.users = this.userService.users;
  }

  openDialog(){
    this.userService.openDialog();
  }

  add(userForm) {
    this.userService.add(userForm);
    this.refreshUsers();
    this.userForm.reset();
  }
  delete({ id }) {
    this.userService.delete(id);
    this.refreshUsers();
  }
  edit(user, { innerText: age }) {
    const { id } = user;
    this.userService.edit(id, { ...user, age });
    this.refreshUsers();
  }
  editName(user, { innerText: name }) {
    const { id } = user;
    this.userService.edit(id, { ...user, name });
    this.refreshUsers();
  }
  editName1(user, { innerText: name1 }) {
    const { id } = user;
    this.userService.edit(id, { ...user, name1 });
    this.refreshUsers();
  }
  editName2(user, { innerText: name2 }) {
    const { id } = user;
    this.userService.edit(id, { ...user, name2 });
    this.refreshUsers();
  }

  toggle({ id }) {
    this.userService.toggle(id);
    this.refreshUsers();
  }
}
