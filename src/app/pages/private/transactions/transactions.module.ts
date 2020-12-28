import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [{
	path: '',
	component: TransactionsComponent
}];

@NgModule({
	declarations: [TransactionsComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatTableModule,
		MatSortModule,
		MatCardModule
	]
})

export class TransactionsModule { }
