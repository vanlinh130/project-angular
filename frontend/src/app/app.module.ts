import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './services/rest-api.service';
import { DataService } from './services/data.service';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { MessageComponent } from './components/message/message.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';


import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';


import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import {SkeletonModule} from 'primeng/skeleton';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    EmployeeAddComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    EmployeeDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    ConfirmPopupModule,
    ToastModule,
    BrowserAnimationsModule,
    RippleModule,
    CardModule,
    CarouselModule,
    SkeletonModule,

  ],
  providers: [RestApiService, DataService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
