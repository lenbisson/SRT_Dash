import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { OrderByPipe } from '../orderby';
import { PredictionService } from '../../prediction.service';

@Component({
  selector: 'app-table-sortable',
  templateUrl: './table-sortable.component.html',
  styleUrls: ['./table-sortable.component.css']
})
export class TableSortableComponent implements OnInit {

 // data = rows in the table, e.g. the solicitation records
  @Input() data: any[];
  @Input() sort: any;

// filterParams used to limit what records are shown to the user
  filterParams = {
      agency: '',
      office: '',
      contact: '',
      eitLikelihood: '',
      isReadable: '',
      reviewStatus: '',
      reviewRec: '',
    };

// which column does the user wish to sort?
  selectedClass(columnName): any{
        return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
    }

// change direction of sort
  changeSorting(columnName): void{
      console.log(columnName);
        var sort = this.sort;
        if (sort.column == columnName) {
            sort.descending = !sort.descending;
        } else {
            sort.column = columnName;
            sort.descending = false;
        }
    }

    convertSorting(): string{
        return this.sort.descending ? '-' + this.sort.column : this.sort.column;
    }
//function constructor to instantiate the data service
  constructor(
    private predictionService: PredictionService,
    private router: Router
    ) {}

//function that initializes data to display in the 508 report
  ngOnInit(): void {
    this.initFilterParams();

    // listens for changes in the records shown by filter or initial load
    this.predictionService.getFileteredPredictions(this.filterParams)
      .subscribe(
          predictions => {
            this.data = predictions;
          },
          err => {
              console.log(err);
          });
    this.predictionService.pushedPredictions.subscribe(
      data => this.data = data);
  }

// Manual review button kicks this off.  navigates to solicitation detail page
  onReview(prediction: any) {
    this.router.navigate(['/srt/solicitation', prediction._id, 'review']);
  }

// set initial params based upon logged in user
  initFilterParams() {
    var agency = localStorage.getItem("agency");
    if (agency == "General Services Administration"){
      this.filterParams.agency = "";
    } else {
      this.filterParams.agency = localStorage.getItem("agency");
    }
  }

}
