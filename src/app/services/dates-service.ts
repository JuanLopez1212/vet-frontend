import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class DateService {
  private baseUrl = 'http://localhost:3000/api/date';

  constructor( private http: HttpClient ) {}

  getAllDates(): Observable<any[]> { return this.http.get<any[]>(this.baseUrl ) }
  getDateById(id: string): Observable<any> { return this.http.get(`${this.baseUrl}/${id}` ) }
  getDatesByPetId ( id: string ): Observable<any[]> { return this.http.get<any[]>(`${this.baseUrl}/pet/${id}` ) }
  createDate(data: any): Observable<any> { return this.http.post(this.baseUrl, data ) }
  updateDate(id: string, data: any): Observable<any> { return this.http.put(`${this.baseUrl}/${id}`, data ) }
}
