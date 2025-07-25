import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OwnersService } from '../../../../services/owners-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-owner',
  imports: [ ReactiveFormsModule ],
  templateUrl: './create-owner.html',
  styleUrl: './create-owner.css'
})


export class CreateOwner {
  form!: any

  constructor ( private fb: FormBuilder, private ownersService: OwnersService, private router: Router ) {}
  
  ngOnInit() {
    this.form = this.fb.group( { 
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]]
  })
  }

  onSubmit () {
    if ( this.form.valid ) {
      this.ownersService.createOwner( this.form.value ).subscribe(() => {
        this.router.navigateByUrl( '/owners' )
      })
    }
  }
}