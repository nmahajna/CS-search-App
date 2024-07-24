import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'searchApp';

  handleSearch(term: string): void {
    console.log('Search term from app component:', term);
  }
}