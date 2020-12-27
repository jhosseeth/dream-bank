import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddProductFormComponent } from './add-product-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [{
	path: '',
	component: AddProductFormComponent
}];

const materialModules: any[] = [
	MatFormFieldModule,
    MatInputModule,
    MatButtonModule
];

@NgModule({
  declarations: [AddProductFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    materialModules
  ]
})

export class AddProductFormModule { }
