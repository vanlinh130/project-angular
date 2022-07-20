import { ErrorHandler, Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Hiển thị phân biệt cho người dùng
 message = '';
 messageType = 'danger';

 // Lưu thông tin employee hiên đang đăng nhập vào hệ thống
 employee!: Employee | null;

 constructor(private router: Router, private rest: RestApiService) {
   this.router.events.subscribe(event => {
     if (event instanceof NavigationStart) {
       this.message = '';
     }
   })
 }

 async getProfile() {
  try {
    if (localStorage.getItem('token')) {
      const data = await this.rest.get(
        'http://localhost:3030/v1/api/accounts/get/profile'
      );
      this.employee = (data as { employee: Employee}).employee;
    }
  } catch (error) {
    // this.error(error);
  }
 }

 // Thiết lập message hiển thị cho người dùng
 error(message: string) {
   this.messageType = 'danger';
   this.message = message;
 }
 success(message: string) {
   this.messageType = 'success';
   this.message = message;
 }
 warning(message: string) {
   this.messageType = 'warning';
   this.message = message;
 }

}
