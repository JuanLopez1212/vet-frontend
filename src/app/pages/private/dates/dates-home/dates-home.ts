import { Component } from '@angular/core';
import { DateService } from '../../../../services/dates-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dates-home',
  imports: [ DatePipe ],
  templateUrl: './dates-home.html',
  styleUrl: './dates-home.css'
})


export class DatesHome {
  dates: any[] = []
  loading: boolean = true 
  error = false 

  constructor ( private dateService: DateService ) {}

  ngOnInit () {
    this.dateService.getAllDates().subscribe({
      next: ( data ) => {
        this.dates = data
        this.loading = false
      },
      error: () => {
        this.error = true 
        this.loading = false 
      }
    })
  }
}
