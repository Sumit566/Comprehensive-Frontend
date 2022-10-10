import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {HttpClientModule} from'@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { PatientComponent } from './Components/patient/patient.component';
import { FormsModule } from '@angular/forms';
import { PatientAddComponent } from './Components/patient-add/patient-add.component';
import { PatientRegistrationComponent } from './Components/patient-registration/patient-registration.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DoctorComponent,
    PatientComponent,
    PatientAddComponent,
    PatientRegistrationComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
