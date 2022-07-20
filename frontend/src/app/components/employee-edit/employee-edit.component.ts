import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  // Khai báo các trường dữ liệu để hiển thị lên form
  employee!: Employee;
  btnDisable = false; // cho phep tuong tac vs nut update
  url = 'http://localhost:3030/v1/api/accounts';
  id: string;

  constructor(
    private rest: RestApiService,
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    ) {
      this.id = route.snapshot.params['id'];
    }

  // Khởi tạo thuộc tính employee lấy về từ phía server
  ngOnInit() {
    this.btnDisable = true;
    this.rest.getOne(this.url, this.id).then(data => {
      this.employee = (data as {employee : Employee}).employee;
      this.btnDisable = false;
    })
    .catch(error => {
      this.data.error(error['message']);
      this.btnDisable = false;
    })
  }

  showInfo() {
    this.messageService.add({severity:'info', summary: 'Edit', detail: 'Edit employee successfully'});
  }

  validate() {
    return true;
  }

  update() {
    this.btnDisable = true;

    // Kiểm tra kiểu dữ liệu có hợp lệ hay không
    if (this.validate()) {
      this.rest.put(this.url, this.id, this.employee).then(data => {
        this.data.success('Employee is update');
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
