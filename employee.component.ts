import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../employee';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private service:EmployeeService) { }

  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];

  

  ngOnInit() {
    
   

  }

  onClear() {
    this.service.getEmployeeList();
     this.form.reset();
     this.initializeFormGroup();
     
  }


  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required,Validators.minLength(8)]),
    city: new FormControl('',Validators.required),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl('',Validators.required),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
     // $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

}
