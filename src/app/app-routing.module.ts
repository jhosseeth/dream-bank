import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LightBackgroundComponent } from './layouts/light-background/light-background.component';
import { DarkBackgroundComponent } from './layouts/dark-background/dark-background.component';

// Lazy Load design pattern
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
			loadChildren: () => import('./pages/public/login/login.module').then(m => m.LoginModule)
		}]
	}, {
		path: 'account-summary',
		component: DashboardComponent,
		children: [{
			path: '',
			loadChildren: () => import('./pages/private/accounts/accounts.module').then(m => m.AccountsModule)
		}, {
			path: ':id/transactions',
			loadChildren: () => import('./pages/private/transactions/transactions.module').then(m => m.TransactionsModule)
		}]
	}, {
		path: 'request-new-product',
		component: DarkBackgroundComponent,
		children: [{
			path: '',
			loadChildren: () => import('./pages/private/add-product-form/add-product-form.module').then(m => m.AddProductFormModule)
		}, {
			path: 'success',
			loadChildren: () => import('./pages/private/successful-request/successful-request.module').then(m => m.SuccessfulRequestModule)
		}]
	}, {
		path: '404',
		component: LightBackgroundComponent,
		children: [{
			path: '',
			loadChildren: () => import('./pages/public/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
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