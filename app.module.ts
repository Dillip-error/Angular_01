import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { EmployeeService } from './shared/employee.service';
import { EmployeeComponent } from './employees/employee/employee.component';
import { StyleBindingComponent } from './Test1/Components/style-binding/style-binding.component';
import { ClassBindingComponent } from './Test1/Components/class-binding/class-binding.component';
import { DatePipePipe } from './date-pipe.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { SpinnerViewComponent } from './spinner-view/spinner-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { DynamicTableEditComponent } from './dynamic-table-edit/dynamic-table-edit.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    SpinnerViewComponent,
    DynamicTableEditComponent,

   // DatePipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule, 
    MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
