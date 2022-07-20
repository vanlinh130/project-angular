import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

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

  showError() {
    this.messageService.add({severity:'error', summary: 'Delete', detail: 'Delete employee successfully'});
  }

  // Xóa các employee
  delete(id: string) {
    this.rest.delete(this.url, id).then(data => {
      this.data.success((data as {message: string}).message);
      this.btnDisable = false;
      this.router.navigate(['./employee-list'])
      this.ngOnInit();
    })
    .catch(error => {
      this.data.error(error['message']);
      this.btnDisable = false;
    })
  }

}
