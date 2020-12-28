import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Account } from './accounts.model';

@Component({
	selector: 'app-accounts',
	templateUrl: './accounts.component.html',
	styleUrls: ['./accounts.component.scss']
})

export class AccountsComponent implements OnInit {

	public displayedColumns: string[] = ['type', 'account_name', 'status', 'currency', 'current_balance'];
	public dataSource: MatTableDataSource <Account> ;

	@ViewChild(MatSort) sort: MatSort;

	constructor(private httpService: HttpService) { }

	ngOnInit(): void {

		// Load accounts data by default
		this.httpService.getAccounts().subscribe(response => {
			this.setDataSource(response);
		});
	}

	setDataSource(data) {
		let accountsList = data.map(item => {
			let parsedAccount: Account = {
				id: parseInt(item.id),
				type: item.type,
				account_name: `${item.number}-${item.name}`,
				currency: item.currency,
				current_balance: item.current_balance,
				status: (item.status)? 'active': 'inactive'
			};
			return parsedAccount;
		});

		this.dataSource = new MatTableDataSource(accountsList);
		this.dataSource.sort = this.sort;
	}
}
