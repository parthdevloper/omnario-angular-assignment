import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  records: Array<any> = [];
  isDesc: boolean = false;
  column: string = 'CategoryName';
  searchText: any
  categoris = ['Cheeses', 'Beverages']

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this.updateCreditCardPayment();
  }

  updateCreditCardPayment(): any {
    return new Promise((resolve, reject) => {
      this._httpClient
        .get<any>(
          'api/records'
        )
        .subscribe(
          (response: any) => {
            this.records = response;
            console.log('Updated details are : ', response); // Log the POST data
            resolve(response);
          },
          reject, //If rejected do nothing
          () => {

            console.log('Completed Successfully'); // Completed log
          }
        );
    });
  }

  sort(property: any) {
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.records.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };

  expandRow(i: number) {
    this.records[i].isExpanded = !this.records[i].isExpanded;
  }

}
