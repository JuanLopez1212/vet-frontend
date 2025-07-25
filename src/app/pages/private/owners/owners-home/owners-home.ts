import { Component } from '@angular/core';
import { OwnersService } from '../../../../services/owners-service';

@Component({
  selector: 'app-owners-home',
  imports: [],
  templateUrl: './owners-home.html',
  styleUrl: './owners-home.css'
})
export class OwnersHome {
  owners: any[] = []
  loading: boolean = true 
  error = false 

  constructor ( private ownersService: OwnersService ) {}

  ngOnInit () {
    this.ownersService.getAllOwners().subscribe({
      next: ( data ) => {
        this.owners = data 
        this.loading = false 
      },
      error: () => {
        this.error = true 
        this.loading = false 
      }
    })
  }
}
