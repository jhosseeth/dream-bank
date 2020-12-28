import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Transaction } from './transactions.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit {

	public displayedColumns: string[] = ['date', 'description', 'currency', 'value'];
	public dataSource: MatTableDataSource <Transaction>;

	@ViewChild(MatSort) sort: MatSort;

	constructor(private httpService: HttpService) { }

	ngOnInit(): void {
		// Load transactions data by default
		this.httpService.getTransactions(1).subscribe(response => {
			let transactionsList = this.getTransactionsList(response);
			this.setDataSource(transactionsList);
			this.getAverage(transactionsList);
		});
	}

	/** Get parsed list of transactions
	*
	* @param { data } Array
	* @return { transactionsList } Array
	*/
	getTransactionsList(data) {
		let transactionsList = data.map(item => {
			let parsedTransaction: Transaction = {
				id: parseInt(item.id),
				date: this.getDate(item.date),
				description: item.description,
				currency: item.currency,
				value: item.value
			};
			return parsedTransaction;
		});

		return transactionsList
	}

	/** Get a formatted date DD/MM/YYYY
	*
	* @param { date }
	* @return { formattedDate }
	*/
	getDate(date: string) {
		let utcStr: string = new Date('2020-12-25T22:32:42.403Z').toUTCString();
		let fullDate: any = new Date(utcStr);
		let formattedDate: string = `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`;
		return formattedDate;
	}

	/** Get a formatted date DD/MM/YYYY
	*
	* @param { transactionsList } Array <Transaction>
	* @return { this.dataSource }
	*/
	setDataSource(transactionsList) {
		this.dataSource = new MatTableDataSource(transactionsList);
		this.dataSource.sort = this.sort;
	}

	/** Get a formatted date DD/MM/YYYY
	*
	* @param { date }
	* @return { formattedDate }
	*/
	getAverage(transactionsList) {
		console.log("esta:", transactionsList);
	}
}
