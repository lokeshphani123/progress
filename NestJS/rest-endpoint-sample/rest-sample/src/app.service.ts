import { Injectable } from '@nestjs/common';
import { Employee } from './employee.dto';

@Injectable()
export class AppService {
  async getEmployee(): Promise<Employee[]> {
    const emp: Employee[] = [];
    const employeeObject: Employee = new Employee();

    employeeObject.employeeId = 1475;
    employeeObject.employeeName = 'Lokesh Bodavula';
    employeeObject.employeeOrganization = 'JNP';
    employeeObject.employeeSalary = 80.05;

    emp.push(employeeObject);

    return emp;
  }
}
