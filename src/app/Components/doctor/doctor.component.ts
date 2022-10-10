import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Model/doctor';
import { DoctorServiceService } from 'src/app/Service/doctor-service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctor!:Doctor[];

  doct: Doctor=new Doctor();


  public doc={id:0,name:"",age:"",gender:"gender",patientnNo:0,specialist:"NA"};

  didi!: number;
  show: boolean = false;

  constructor(private service:DoctorServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getDoctList();
  }
  getDoctList(){
    this.service.getDoctorList().subscribe(data=>{
      this.doctor=data;
    })
  }

  getDoctorDetails(did:any){
    for(let i=0;i<this.doctor.length;i++){
      if(this.doctor[i].dname==did){
        this.doct=this.doctor[i];
      }
    }
    this.show=true;
  }
  register(){
    this.router.navigate(['Registration']);
  }
  

}
