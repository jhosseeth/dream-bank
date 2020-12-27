import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SuccessfulRequestComponent } from './successful-request.component';

import { MatButtonModule } from '@angular/material/button'; 

const routes: Routes = [{
	path: '',
	component: SuccessfulRequestComponent
}];

@NgModule({
  declarations: [SuccessfulRequestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})

export class SuccessfulRequestModule { }
