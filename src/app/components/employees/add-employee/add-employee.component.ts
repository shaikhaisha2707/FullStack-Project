import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {

  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest)
      .subscribe({
          next: (employee) => {
           this.router.navigate(['employees']);
          }
        });
  }
}
