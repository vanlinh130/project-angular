import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // Khai báo các trường dữ liệu để hiển thị lên form
  employees!: Employee[];
  btnDisable = false;
  url = 'http://localhost:3030/v1/api/accounts';

  constructor(private rest: RestApiService,
    private data: DataService,
    private messageService: MessageService,
    ) {

  }

  showError() {
    this.messageService.add({severity:'error', summary: 'Delete', detail: 'Delete employee successfully'});
  }

  // Gữi tới server và gọi phương thức GET để lấy về thông tin của employee
  ngOnInit() {
    this.btnDisable = true;
    this.rest.get(this.url).then(data => {
      this.employees = (data as { employees: Employee[]}).employees;
      this.btnDisable = false;
    })
    .catch(error => {
      this.data.error(error['message']);
      this.btnDisable = false;
    })
  }

  // Xóa các employee
  delete(id: string) {
    this.rest.delete(this.url, id).then(data => {
      this.data.success((data as {message: string}).message);
      this.btnDisable = false;

      this.ngOnInit();
    })
    .catch(error => {
      this.data.error(error['message']);
      this.btnDisable = false;
    })
  }


}
