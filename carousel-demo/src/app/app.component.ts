import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public products: any[];

  constructor(private api: ApiService) {
    this.products = [];
  }

  ngOnInit() {

    this.api.getProducts().subscribe((response) => {
      this.products = response['groups'];
    });

  }

}
