import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { PredictionService } from './prediction.service';
import { FilterComponent } from './report/filter/filter.component';
import { OrderByPipe } from './report/orderby';
import { ReportComponent } from './report/report.component';
import { TableSortableComponent} from './report/table-sortable/table-sortable.component';
import { SolicitationTableComponent } from './report/solicitation-table/solicitation-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderByPipe,
    ReportComponent,
    TableSortableComponent,
    FilterComponent,
    SolicitationTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
