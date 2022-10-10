import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../Model/doctor';
import { Patient } from '../Model/patient';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  private DocUrl="http://localhost:8182/Doctor";

  private PatUrl="http://localhost:8181/Patient";

  constructor(private httpclient: HttpClient) { }

  getDoctorList():Observable<Doctor[]>{
    return this.httpclient.get<Doctor[]>(`${this.DocUrl}`);
  }

  getPatientList():Observable<Patient[]>{
    return this.httpclient.get<Patient[]>(`${this.PatUrl}`);
  }

  getPatientById(id:any):Observable<Patient>{
    return this.httpclient.get<Patient>(`${this.PatUrl}/${id}`);
  }

  updatePatient(id:number,pati:Patient):Observable<Object>{
    return this.httpclient.put(`${this.PatUrl}/${id}`,pati);
  }
  registerPatient(patie:Patient){
    return this.httpclient.post(`${this.PatUrl}`,patie);
  }


}
