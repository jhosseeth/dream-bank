import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

	public links: any[] = [{
		name: "Accounts",
		list: [
			'Account Summary', 
			'Accounts'
		]
	}, {
		name: "Transactions",
		list: [
			'Inquire Transactions', 
			'Fund Transfer', 
			'Bill Payments'
		],
	}, {
		name: "Services",
		list: [
			'Account Statements', 
			'Enroll New Account',
			'Enroll a Credit Card',
			'Card Replacement',
			'New Checkbook'
		]
	}]

	constructor() {}

	ngOnInit(): void {}

}
