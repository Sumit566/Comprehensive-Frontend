import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Model/patient';
import { DoctorServiceService } from 'src/app/Service/doctor-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  PatientId !:number;
  RegistraionId!:number;

  temp:Patient[]=[];
  patient: Patient[]=[];

  pat:Patient=new Patient();

  show:boolean=false;

  tshow:boolean=false;

  flag:boolean=false;

  constructor(private service:DoctorServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getPatientList();
  }
  getPatientList(){
    this.service.getPatientList().subscribe(data=>{
      this.patient=data;
    })
  }
  getPatientDetails(id:any){
    for(let i=0;i<this.patient.length;i++){
      if(this.patient[i].pid==id){
        this.pat=this.patient[i];
        this.flag=true;
        this.show=true;
      }
    }
    if(this.flag==false){
      this.router.navigate(['Error']);
    }
  }
  patientHistory(id:any){
    let ind=0;
    for(let i=0;i<this.patient.length;i++){
      if(this.patient[i].pid==id){
        this.temp[ind]=this.patient[i];
        ind++;
      }
    }
    this.tshow=true;
  }
  patientUpdate(id:any){
    this.router.navigate(['AddPatient',id]);
  }
  refresh(){
    this.router.navigate(['']);
  }

}
