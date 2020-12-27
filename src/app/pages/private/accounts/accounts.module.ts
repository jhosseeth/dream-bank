import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [{
	path: '',
	component: AccountsComponent
}];

@NgModule({
	declarations: [AccountsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})

export class AccountsModule { }
