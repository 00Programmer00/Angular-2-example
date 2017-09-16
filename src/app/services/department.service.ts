import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Department } from '../models/department';
import { Employee } from '../models/emloyee';

@Injectable()
export class DepartmentService {
  headers: Headers;
  private departmentsUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/';

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9' });
  }

  getDepartments(): Promise<Department[]> {
    return this.http
      .get(this.departmentsUrl)
      .toPromise()
      .then(response => response.json() as Department[])
      .catch(this.handleError);
  }
  getEmployee(): Promise<Employee[]> {
    return this.http
      .get('http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees')
      .toPromise()
      .then(response => response.json() as Employee[])
      .catch(this.handleError);
  }
  getDepartment(id: number): Promise<Employee[]> {
    return this.getEmployee().then(departments => departments.filter(dep => dep.departmentId === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
