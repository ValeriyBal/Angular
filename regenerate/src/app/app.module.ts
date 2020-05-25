import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { SelectsComponent } from './selects/selects.component';

import { UserService } from './users/user.service';
import { ProjectService } from './projects/project.service';
import { SelectService } from './selects/select.service';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: UsersComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'selects', component: SelectsComponent},
    { path: 'users', redirectTo: '/'},
    { path: '**', component: AppComponent }

];


@NgModule({
  declarations: [
	AppComponent,
	UsersComponent,
	ProjectsComponent,
	DialogExampleComponent,
	SelectsComponent,
  ],

  entryComponents: [DialogExampleComponent],

  imports: [
	BrowserModule,
//	DialogExampleComponent,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes),
	AppRoutingModule,
	MaterialModule,
	BrowserAnimationsModule
  ],
  providers: [
	UserService, 
	ProjectService, 
	SelectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
