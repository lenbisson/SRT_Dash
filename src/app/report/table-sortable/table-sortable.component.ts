import { Component, OnInit, Input } from '@angular/core';

import { OrderByPipe } from '../orderby';

@Component({
  selector: 'app-table-sortable',
  templateUrl: './table-sortable.component.html',
  styleUrls: ['./table-sortable.component.css']
})
export class TableSortableComponent implements OnInit {

 // @Input() columns: any[];
  @Input() data: any[];
  @Input() sort: any;

  selectedClass(columnName): any{
        return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
    }
  
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
  constructor() { }

  ngOnInit() {
  }

}
