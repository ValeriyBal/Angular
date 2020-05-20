/*
import { NgModule } from '@angular/core';
 
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
 
@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule {}
*/

/*
import { NgModule } from '@angular/core';
import { 
	MatMenuModule,
	MatCardModule,
	MatButtonModule,
	MatInputModule,
	MatIconModule,
	MatDialogModule,
	MatSnackBarModule 
			} from '@angular/material';

const MaterialComponent = [
	MatMenuModule,
	MatCardModule,
	MatButtonModule,
	MatInputModule,
	MatIconModule,
	MatDialogModule,
	MatSnackBarModule
]
*/


import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog'; 
// import {MatDatepickerModule} from '@angular/material/datepicker'; 
// import {MatNativeDateModule} from '@angular/material/core'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 

const MaterialComponent = [
	MatMenuModule,
	MatCardModule,
	MatButtonModule,
	MatInputModule,
	MatIconModule,
	MatDialogModule,
//	MatDatepickerModule,
//	MatNativeDateModule,
	MatSnackBarModule
]


@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }

