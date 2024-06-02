import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import { EMPLOYEES } from 'src/data/mock-employees';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = EMPLOYEES;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  viewEmployee(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  updateEmployee(id: number): void {
    this.router.navigate(['/update', id]);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
    this.employees = this.employeeService.getEmployees();
  }
}
