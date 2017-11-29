import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/component/login/login.component';
// import { HomeComponent } from '../app/component/home/home.component';
import { AuthGuard} from '../app/guards/auth.guard';
import { AppComponent } from './app.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AppComponent, canActivate: [AuthGuard]}
      // otherwise redirect to home
      // { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
