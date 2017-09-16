import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Department } from '../models/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[] = [];

  constructor(private departmentService: DepartmentService, private http: Http) { }

  ngOnInit() {
    this.departmentService.getDepartments().then((departments) => {
      this.departments = departments;
    });
  }
  add() {
    const name = document.getElementById('name') as HTMLInputElement;
    const description = document.getElementById('description') as HTMLInputElement;
    this.http.post('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/',
      {name: name.value, description: description.value}).
    subscribe(res => {
        this.ngOnInit();
      }
    );
    name.value = '';
    description.value = '';
  }
  deleteDepartment = (department) => {
    return this.http.delete('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/' + department.id).
    subscribe(res => {
      this.ngOnInit();
    });
  }
}
