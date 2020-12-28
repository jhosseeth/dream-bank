import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [{
	path: '',
	component: AccountsComponent
}];

@NgModule({
	declarations: [AccountsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatTableModule,
		MatSortModule,
		MatCardModule
	],
	exports: [RouterModule]
})

export class AccountsModule { }
