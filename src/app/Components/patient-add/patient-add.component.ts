import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Model/patient';
import { DoctorServiceService } from 'src/app/Service/doctor-service.service';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  patient:Patient=new Patient();

  rid!:number;

  constructor(private service:DoctorServiceService,private router:Router,private route:ActivatedRoute) { }

  gotoHomepage(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.rid=this.route.snapshot.params['id'];
    this.service.getPatientById(this.rid).subscribe(data=>{
      this.patient=data;
    })
  }
  onSubmit(){
    this.service.updatePatient(this.rid,this.patient).subscribe(data=>{
      this.gotoHomepage();
    })
  }

}
