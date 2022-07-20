import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(public data: DataService, private router: Router, private messageService: MessageService) {
    this.data.getProfile();
  }

  logout() {
    this.data.employee = null;
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
