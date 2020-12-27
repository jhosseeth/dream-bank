import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SuccessfulRequestComponent } from './successful-request.component';

const routes: Routes = [{
	path: '',
	component: SuccessfulRequestComponent
}];

@NgModule({
  declarations: [SuccessfulRequestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class SuccessfulRequestModule { }
