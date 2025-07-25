import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateService } from '../../../../services/dates-service';
import { Router } from '@angular/router';
import { PetsService } from '../../../../services/pets-service';
import { OwnersService } from '../../../../services/owners-service';
import { VetsService } from '../../../../services/vets-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create-date',
  imports: [ ReactiveFormsModule],
  templateUrl: './create-date.html',
  styleUrl: './create-date.css'
})

export class CreateDate {
   form!: any
   pets: any[] = []
   owners: any[] = []
   vets: any[] = []

  constructor ( 
    private fb: FormBuilder, 
    private ownersService: OwnersService, 
    private router: Router, 
    private dateService: DateService,
    private petsService: PetsService,
    private vetsService: VetsService
  ) {}
  
  ngOnInit() {
    this.form = this.fb.group( { 
    date: ['', [Validators.required]],
    reason: ['', [Validators.required]],
    pet: ['', [Validators.required]],
    owner: ['', [Validators.required]],
    vet: ['', [Validators.required]],
    state: ['', [Validators.required]]
  }),

  this.petsService.getAllPets().subscribe( data => this.pets = data)
  this.ownersService.getAllOwners().subscribe( data => this.owners = data )
  this.vetsService.getAllVets().subscribe( data => this.vets = data )
  }

  onSubmit () {
    if ( this.form.valid ) {
      this.dateService.createDate( this.form.value ).subscribe(() => {
        this.router.navigateByUrl( '/dates' )
      })
    }
  }
}
