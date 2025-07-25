import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class VetsService {
  
  private baseUrl = 'http://localhost:3000/api/vets';

  constructor( private http: HttpClient ) {}

  getAllVets(): Observable<any[]> { return this.http.get<any[]>(this.baseUrl ) }
  getVetById(id: string): Observable<any> { return this.http.get(`${this.baseUrl}/${id}` ) }
  createVet(data: any): Observable<any> { return this.http.post(this.baseUrl, data ) }
  updateVet(id: string, data: any): Observable<any> { return this.http.put(`${this.baseUrl}/${id}`, data ) }
}

