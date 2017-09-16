import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Employee } from '../models/emloyee';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  employee: Employee[] = [];
  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
      this.departmentService.getDepartment(+params['id'])).subscribe(emp => this.employee = emp);
    console.log(this.employee);
  }
  goBack(): void {
    this.location.back();
  }
}
