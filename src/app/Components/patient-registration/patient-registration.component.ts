import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Model/patient';
import { DoctorServiceService } from 'src/app/Service/doctor-service.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  patient:Patient=new Patient();

  constructor(private service:DoctorServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  AddPatient(){
    this.service.registerPatient(this.patient).subscribe(data=>{
      alert("Successfull Registration!!!");
      this.goToHome();
    })
  }
  goToHome(){
    this.router.navigate(['']);
  }
  onSubmit(){
    this.AddPatient();
  }

}
