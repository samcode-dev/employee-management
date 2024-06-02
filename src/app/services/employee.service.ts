import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EMPLOYEES } from '../../data/mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = EMPLOYEES;

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  updateEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index > -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}
