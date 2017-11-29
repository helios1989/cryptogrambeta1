//CORE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//pages
import { IcoComponent } from './ico/page/ico/ico.component';
import { HomeComponent } from './component/home/home.component';

//Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavtoolbarComponent } from './component/navtoolbar/navtoolbar.component';
import { IcoModuleRouting } from './ico/routes/ico/ico.routing.module';
import { IcoService } from './ico/service/ico.service';
//fake backedn 
import { fakeBackendProvider } from '../app/helpers/fakebackend';
import { LoginComponent } from './component/login/login.component';
import { AuthenticationService } from './authentication/authentication.service';
import { MockBackend } from '@angular/http/testing';
import { AuthGuard } from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    NavtoolbarComponent,
    IcoComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    IcoModuleRouting,
    HttpModule
  ],
  providers: [IcoService, fakeBackendProvider, AuthenticationService, MockBackend, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
