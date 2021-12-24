import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
const loginPath: Routes = [{ path: '', component: LoginComponent }];
@NgModule({
  imports: [RouterModule.forChild(loginPath)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
