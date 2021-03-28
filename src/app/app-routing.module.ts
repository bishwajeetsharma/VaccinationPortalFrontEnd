import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterFormComponent } from './user-register-form-component/user-register-form.component';

const routes: Routes = [
  {
    path :"user-register" , component: UserRegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
