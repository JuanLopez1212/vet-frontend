import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private baseUrl = 'http://localhost:3000/api/pets'

  constructor ( private http: HttpClient ) {}

  getAllPets(): Observable<any[]> { return this.http.get<any[]>( this.baseUrl ) }
  getPetById( id: string ): Observable<any> { return this.http.get( `${this.baseUrl}/${id}` ) }
  createPet( data: any ): Observable<any> { return this.http.post( this.baseUrl, data ) }
  updatePet( id: string, data: any ): Observable<any> { return this.http.patch( `${this.baseUrl}/${id}`, data ) }
}
