import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'detail/:id',
    component: DepartmentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
