import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.employee = this.employeeService.getEmployeeById(id);

    this.route.params.subscribe((param : Params) => {
      const id = +param['id'];
      this.employee = this.employeeService.getEmployeeById(id);
  });
  }

  save(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee);
      this.router.navigate(['/']);
    }
  }
}
