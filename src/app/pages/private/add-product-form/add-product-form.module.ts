import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddProductFormComponent } from './add-product-form.component';

const routes: Routes = [{
	path: '',
	component: AddProductFormComponent
}];

@NgModule({
  declarations: [AddProductFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class AddProductFormModule { }
