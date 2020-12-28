import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

	private baseURL: string = "https://5fe7492b010a6700178036e4.mockapi.io/dream-bank/api";

	constructor(private http: HttpClient) { }

	getAccounts() {
		return this.http.get(`${this.baseURL}/accounts`);
	}

	getTransactions(id: number) {
		return this.http.get(`${this.baseURL}/accounts/${id}/transactions`);
	}
}
