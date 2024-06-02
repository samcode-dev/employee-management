import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.employee = this.employeeService.getEmployeeById(id);

  //   this.route.params.subscribe((param : Params) => {
  //     const id = +param['id'];
  //     this.employee = this.employeeService.getEmployeeById(id);
  // });
  }
}
