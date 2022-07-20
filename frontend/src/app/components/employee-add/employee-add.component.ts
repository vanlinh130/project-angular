import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  // Khai báo các trường dữ liệu để hiển thị lên form
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:3030/v1/api/accounts';

  @ViewChild('loginForm')
  addForm! : NgForm;

  constructor(
    private rest: RestApiService,
    private data: DataService ,
    private router: Router,
    private messageService: MessageService,
    ) {
    // Khởi tạo
    this.employee = new Employee();
  }

  ngOnInit() {
  }

  showSuccess() {
      this.messageService.add({severity:'success', summary: 'Add', detail: 'Add employee successfully'});
  }

  validate() {
    return true;
  }

  onSubmit() {
    if (!this.addForm.valid) {
      console.log('Invalid data');
      return;
    }
    console.log(this.addForm.value);
  }


  save() {

    this.btnDisable = true;

    // Kiểm tra kiểu dữ liệu có hợp lệ hay không
    if (this.validate()) {
      this.rest.post(this.url, this.employee).then(data => {
        this.data.success('Employee is saved');
        this.btnDisable = false;
        this.router.navigate(['./employee-list'])
      })
      .catch(error => {
        this.data.error(error['message']);
        this.btnDisable = false;
      })
    }
   }

}
