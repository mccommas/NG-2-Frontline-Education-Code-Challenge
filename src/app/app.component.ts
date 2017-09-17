import { AppService } from './app.service';
import { Component,ViewEncapsulation } from '@angular/core';
import { GridOptions } from "ag-grid/main";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'frontline-education-code-challenge';
  gridOptions: GridOptions = 
  {
    enableFilter:true,
    enableSorting: true
  };
  columnDefs: any[];
  public constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getEmployees().subscribe(x =>
      this.gridOptions.api.setRowData(x));
    this.gridOptions.columnDefs = this.createColumnDefs();

  }

  private createColumnDefs() {
    return [
      { headerName: "Created Ts", field: "Created" },
      { headerName: "Type", field: "Type" },
      { headerName: "ID", field: "Id" },
      { headerName: "First Name", field: "FirstName" },
      { headerName: "Last Name", field: "LastName" },
      { headerName: "Record ID", field: "RecordId" },
      { headerName: "Employee Type", field: "EmployeeType" },
      { headerName: "Location", field: "Location" }
    ];
  }
}
