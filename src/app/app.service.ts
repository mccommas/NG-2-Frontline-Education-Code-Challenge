import { Employee } from './employee-model';
import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
  employees: Employee[] = [];

  constructor(private http: Http) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get("http://localhost:3000/employees")
      .map((res: any) => this.parseJsonData(res.json()));
  }

  private parseJsonData(data: any): Employee[] {
    data.forEach(element => {
      let employee = new Employee();
      employee.Created = element.Created;
      employee.Type = element.Type;
      employee.Id = element.Employee.Id;
      employee.FirstName = element.Employee.FirstName;
      employee.LastName = element.Employee.LastName;
      employee.RecordId = element.Employee.RecordId;
      employee.EmployeeType = element.Employee.EmployeeType;
      employee.Location = element.Location;
      this.employees.push(employee);
    });
    return this.employees;
  }

}
