import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  private baseUrl = 'http://localhost:3000/api/owner'

  constructor ( private http: HttpClient ) {}

  getAllOwners(): Observable<any[]> {return this.http.get<any[]>( this.baseUrl ) }
  createOwner( data: any ): Observable<any>{ return this.http.post( this.baseUrl, data ) }
  getOwnerById( id: string ): Observable<any>{ return this.http.get(`${this.baseUrl}/${id}`) }
  updateOwner( id: string, data: any ): Observable<any>{ return this.http.patch(`${this.baseUrl}/${id}`, data )}
}
