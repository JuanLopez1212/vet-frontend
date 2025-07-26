import { Component } from '@angular/core';
import { PetsService } from '../../../../services/pets-service';
import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pets-home',
  imports: [ RouterModule ],
  templateUrl: './pets-home.html',
  styleUrl: './pets-home.css'
})
export class PetsHome {
  pets: any[] = []
  loading: boolean = true
  error = false 

  constructor( private petsService: PetsService ) {}

  ngOnInit () {
    this.petsService.getAllPets().subscribe( {
      next: ( data ) => {
        console.log( data )
        this.pets = data 
        this.loading = false
      },
      error: () => {
        this.error = true 
        this.loading = false 
      }
    })
  }
}
