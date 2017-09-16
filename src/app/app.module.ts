import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentsComponent } from './departments/departments.component';

import { DepartmentService } from './services/department.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentDetailComponent,
    DepartmentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
