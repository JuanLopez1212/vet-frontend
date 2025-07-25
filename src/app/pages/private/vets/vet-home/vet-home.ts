import { Component } from '@angular/core';
import { VetsService } from '../../../../services/vets-service';

@Component({
  selector: 'app-vet-home',
  imports: [],
  templateUrl: './vet-home.html',
  styleUrl: './vet-home.css'
})

export class VetHome {
  vets: any[] = [];
  loading = true;
  error = false;

  constructor( private vetsService: VetsService ) {}

  ngOnInit() {
    this.vetsService.getAllVets().subscribe({
      next: (data) => {
        this.vets = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

}
