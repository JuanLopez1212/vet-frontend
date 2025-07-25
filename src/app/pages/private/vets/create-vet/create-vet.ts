import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { VetsService } from '../../../../services/vets-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vet',
  imports: [ReactiveFormsModule],
  templateUrl: './create-vet.html',
  styleUrl: './create-vet.css'
})

export class CreateVet {
  form!: any;
    
    constructor( private fb: FormBuilder, private vetsService: VetsService, private router: Router ) {}
  
     ngOnInit() {
      this.form = this.fb.group( { 
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
 }

  onSubmit() {
    if (this.form.valid) {
      this.vetsService.createVet(this.form.value).subscribe(() => {
        this.router.navigate(['/vets']);
      });
    }
}
}