import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { UsersComponent } from './users.component';
import { ProjectService } from './project.service';
import { ProjectsComponent } from './projects.component';
import { SelectService } from './select.service';
import { SelectsComponent } from './selects.component';


// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: UsersComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'selects', component: SelectsComponent},
    { path: 'users', redirectTo: '/'},
    { path: '**', component: AppComponent }

];


@NgModule({
  declarations: [AppComponent, UsersComponent, ProjectsComponent, SelectsComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  providers: [UserService, ProjectService, SelectService],
//  bootstrap: [UsersComponent, ProjectsComponent]
  bootstrap: [AppComponent]
})
export class AppModule {}

