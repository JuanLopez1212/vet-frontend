import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PetsService } from '../../../../services/pets-service';
import { DateService } from '../../../../services/dates-service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pet-dates',
  imports: [ DatePipe, RouterModule, CommonModule ],
  templateUrl: './pet-dates.html',
  styleUrl: './pet-dates.css'
})

export class PetDates {
  pet: any
  dates: any[] = []

  constructor ( private route: ActivatedRoute, private petsService: PetsService, private datesService: DateService ) {}

  ngOnInit () {
    const id = this.route.snapshot.paramMap.get( 'id' )

    if ( id ) {
      this.petsService.getPetById(id).subscribe((pet) => (this.pet = pet ))
      this.datesService.getDatesByPetId(id).subscribe((dates) => {
        this.dates = dates 
      })
    }
  } 
} 
