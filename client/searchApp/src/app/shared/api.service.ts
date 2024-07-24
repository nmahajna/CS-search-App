import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'http://localhost:3000'; // Replace with your API URL

    constructor(private http: HttpClient) { }

    public get(endpoint: string): Observable<any> {
        const url = `${this.apiUrl}/${endpoint}`;
        return this.http.get(url);
    }

}