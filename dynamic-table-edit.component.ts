import { Component, OnInit } from '@angular/core';

const USER_INFO = [
  {"name": "John Smith", "occupation": "Advisor", "dateOfBirth": "1984-05-05","salary":"78000.00", "age": 36},
  {"name": "Muhi Masri", "occupation": "Developer", "dateOfBirth": "1992-02-02","salary":"7000.00", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "dateOfBirth": "2000-01-01", "salary":"8700.00", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "dateOfBirth": "1977-03-03", "salary":"6577.00", "age": 43},
];

const USER_SCHEMA = {
  "name": "text",
  "occupation": "text",
  "dateOfBirth": "date",
  "age": "number",
  "salary":"char"
}


@Component({
  selector: 'app-dynamic-table-edit',
  templateUrl: './dynamic-table-edit.component.html',
  styleUrls: ['./dynamic-table-edit.component.css']
})
export class DynamicTableEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //displayedColumns: string[] = ['name', 'occupation', 'dateOfBirth', 'age','salary', '$$edit'];
  displayedColumns: string[] = ['name', 'occupation', 'dateOfBirth', 'age','salary'];
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;


}
