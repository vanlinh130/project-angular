import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Employee } from 'src/app/models/employee';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees!: Employee[];
  btnDisable = false;
  url = 'http://localhost:3030/v1/api/accounts';

  responsiveOptions;

  constructor(private rest: RestApiService,
    private data: DataService,
    private messageService: MessageService) {

      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  }

  showError() {
    this.messageService.add({severity:'error', summary: 'Delete', detail: 'Delete employee successfully'});
  }

  // Khởi tạo thuộc tính employee lấy về từ phía server
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

}
