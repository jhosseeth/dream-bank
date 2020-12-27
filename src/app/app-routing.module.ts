import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LightBackgroundComponent } from './layouts/light-background/light-background.component';
import { DarkBackgroundComponent } from './layouts/dark-background/dark-background.component';

/** ======================================================
*				Lazy loading implementation
*** ====================================================== */

const importModules: any = {
	login: () => import('./pages/public/login/login.module').then(m => m.LoginModule),
	accounts: () => import('./pages/private/accounts/accounts.module').then(m => m.AccountsModule),
	transactions: () => import('./pages/private/transactions/transactions.module').then(m => m.TransactionsModule),
	newProduct: () => import('./pages/private/add-product-form/add-product-form.module').then(m => m.AddProductFormModule),
	successfulRequest: () => import('./pages/private/successful-request/successful-request.module').then(m => m.SuccessfulRequestModule),
	pageNotFound: () => import('./pages/public/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
}

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'login'
	}, {
		path: 'login',
		component: LightBackgroundComponent,
		children: [{
			path: '',
			loadChildren: importModules.login
		}]
	}, {
		path: 'account-summary',
		component: DashboardComponent,
		children: [{
			path: '',
			loadChildren: importModules.accounts
		}, {
			path: ':id/transactions',
			loadChildren: importModules.transactions
		}]
	}, {
		path: 'request-new-product',
		component: DarkBackgroundComponent,
		children: [{
			path: '',
			loadChildren: importModules.newProduct
		}, {
			path: 'success',
			loadChildren: importModules.successfulRequest
		}]
	}, {
		path: '404',
		component: LightBackgroundComponent,
		children: [{
			path: '',
			loadChildren: importModules.pageNotFound
		}]
	}, {
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }