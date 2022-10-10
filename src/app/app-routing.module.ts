import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './Components/doctor/doctor.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { HomeComponent } from './Components/home/home.component';
import { PatientAddComponent } from './Components/patient-add/patient-add.component';
import { PatientRegistrationComponent } from './Components/patient-registration/patient-registration.component';
import { PatientComponent } from './Components/patient/patient.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'Doctor',
    component:DoctorComponent,
    pathMatch:'full'
  },
  {
    path:'Patient',
    component:PatientComponent,
    pathMatch:'full'
  },
  {
    path:'AddPatient/:id',
    component:PatientAddComponent,
    pathMatch:'full'
  },
  {
    path:'Registration',
    component:PatientRegistrationComponent,
    pathMatch:'full'
  },
  {
    path:"Error",
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
