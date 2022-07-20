import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Khai báo các trường dữ liệu để hiển thị lên form
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:3030/v1/api/accounts/login';

  constructor(
  ) {
    this.employee = new Employee();
  }

  ngOnInit() {
  }

  validate() {
    return true;
  }
}
