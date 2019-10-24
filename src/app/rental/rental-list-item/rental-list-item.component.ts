import { Component, Input, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'mha-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {

  @Input() rentalItemInput: Rental;

  constructor() { }

  ngOnInit() { }

}
