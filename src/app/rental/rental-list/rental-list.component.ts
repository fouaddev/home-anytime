import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'mha-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})

export class RentalListComponent implements OnInit {

  rentalList: any[];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    // creates an observable to get all rentals to be displayed by the view *ngFor
    const rentalObservable = this.rentalService.getRentals();
    
    // Subscribes to the above Observable to receives the emited rentals and assigns
    // them to rentalsList which invokes the view *ngFor and rendered to user
    rentalObservable.subscribe((rentals: Rental[]) => {
      this.rentalList = rentals;
    }, (err) => {
      console.log('Error from rentalObservable of rental-list.component.ts file');
    }, () => {
      
    });
  }

}
