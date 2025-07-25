import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetsService } from '../../../../services/pets-service';
import { OwnersService } from '../../../../services/owners-service';


@Component({
  selector: 'app-create-pet',
  imports: [ ReactiveFormsModule ],
  templateUrl: './create-pet.html',
  styleUrl: './create-pet.css'
})
export class CreatePet {
  form!: any;
  owner: any = []
  
  constructor( private fb: FormBuilder, private petsService: PetsService, private ownersService: OwnersService, private router: Router ) {}

   ngOnInit() {
    this.form = this.fb.group( { 
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    race: ['', [Validators.required]],
    age: [0, [Validators.required, Validators.min(1)]],
    owner: ['', [Validators.required]]
  }),
  
  this.ownersService.getAllOwners().subscribe({
      next: ( data ) => {
        console.log ( data );
        this.owner = data;
      },
      error: ( error ) => {
        console.log ( error )
      },
      complete: () => {
        console.log ( 'Complete' )
      }
    })
  }

  onSubmit() {
    if ( this.form.valid ) {
      this.petsService.createPet(this.form.value).subscribe(() => {
        this.router.navigateByUrl( '/pets' )
      })
    }
  }
}
