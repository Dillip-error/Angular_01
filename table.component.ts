import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Employee} from '../Interfaces/employee';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'table_ex',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit {

@ViewChild(MatPaginator,{static:true})
public paginator : MatPaginator;

 @ViewChild(MatSort,{static:true})
 public sort : MatSort;

  public dataSource:MatTableDataSource<any>;

  normalArrData:Employee[]=[
    { "employeeId":1346,
      "employeeName":"Dillip kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

      { "employeeId":1546,
      "employeeName":"Aswin kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

    { "employeeId":1,
      "employeeName":"Bibex kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

    { "employeeId":16,
      "employeeName":"Jagdeep kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

      { "employeeId":1546,
      "employeeName":"Mohit kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

      { "employeeId":546,
      "employeeName":"Rakesh kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

      { "employeeId":154,
      "employeeName":"Satya kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

      { "employeeId":46,
      "employeeName":"Dillip kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

      { "employeeId":16,
      "employeeName":"Dillip kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

      { "employeeId":146,
      "employeeName":"Dillip kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00},

   { "employeeId":156,
      "employeeName":"Dillip kumar sahoo",
      "gender":"male",
      "mobNo":7978487304,
      "email":"dillipksahoo1996@gmail.com",
      "salary":54000.00}
  ]

 

  public displayColumn:string[] = ["employeeId","employeeName","gender",
                                     "mobNo","email","salary"];

 

  constructor() {
  this.dataSource=new MatTableDataSource(this.normalArrData);
  }
                                  
  ngOnInit(): void {
  this.dataSource.paginator =  this.paginator;
  this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
