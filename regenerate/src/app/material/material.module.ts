import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
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
	MatCheckboxModule,
//	MatDatepickerModule,
//	MatNativeDateModule,
	MatSnackBarModule
]


@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }

