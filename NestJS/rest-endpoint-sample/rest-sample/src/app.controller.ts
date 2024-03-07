import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Employee } from './employee.dto';

@Controller('/employee')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/name')
  async getHello(): Promise<Employee[]> {
    return this.appService.getEmployee();
  }
}
