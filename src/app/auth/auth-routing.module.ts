import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'OtherPage' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: 'OtherPage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})

export class AuthRoutingModule {}