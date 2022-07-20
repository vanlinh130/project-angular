import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: '', component: HomeComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component:  RegisterComponent},
  { path: 'employee-detail/:id', component:  EmployeeDetailComponent},

  { path: '', pathMatch: 'full', redirectTo: 'employee-list' },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
