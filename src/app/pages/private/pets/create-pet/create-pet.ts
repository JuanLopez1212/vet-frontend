import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetsService } from '../../../../services/pets-service';


@Component({
  selector: 'app-create-pet',
  imports: [ ReactiveFormsModule ],
  templateUrl: './create-pet.html',
  styleUrl: './create-pet.css'
})
export class CreatePet {
  form!: any;
  ngOnInit() {
    this.form = this.fb.group( { 
    name: ['', Validators.required],
    type: ['', Validators.required],
    race: ['', Validators.required],
    age: [0, [Validators.required, Validators.min(1)]],
    owner: ['', Validators.required]
  })
  }
  

  constructor( private fb: FormBuilder, private petsService: PetsService, private router: Router ) {}

  submit() {
    if ( this.form.valid ) {
      this.petsService.createPet(this.form.value).subscribe(() => {
        this.router.navigateByUrl( '/pets' )
      })
    }
  }
}
