import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/api.service';

@Injectable({
    providedIn: 'root'
})
export class SearchWidgetService {

    constructor(private api: ApiService) { }

    public getData(): Observable<any> {
        console.log('getData');
        const endpoint = `zones`;
        return this.api.get(endpoint);
    }

}