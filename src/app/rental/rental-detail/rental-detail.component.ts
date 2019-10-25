import { Component, OnInit } from '@angular/core';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mha-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  constructor(private rentalService: RentalService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    // Subscribes to the route params Observable to get id in the emited params value
    this.route.params.subscribe((params: any) => {
      
      let rentalID: string = params.id;
      this.updateRental(rentalID);
    });
  }

  updateRental(rntlID: string): any {

    this.rentalService.getTheRental(rntlID).subscribe((targetRental: Rental) => {
      // Updates rental with targetRental received which matches the route id
      this.rental = targetRental;
    });

  }
}



// import { Component, OnInit } from '@angular/core';
// import { Rental } from '../shared/rental.model';
// import { RentalService } from '../shared/rental.service';
// import { ActivatedRoute } from '@angular/router';
// import { GetLocationService } from '../../common/services/get-location.service';

// @Component({
//   selector: 'mha-rental-detail',
//   templateUrl: './rental-detail.component.html',
//   styleUrls: ['./rental-detail.component.scss']
// })
// export class RentalDetailComponent implements OnInit {

//   rental: any;

//   location: string;
//   KEY: string;
//   url: string;

//   constructor(private rentalService: RentalService, private route: ActivatedRoute, private locationAPI: GetLocationService) { }

//   ngOnInit() {

//     // Subscribes to the route params Observable to get id in the emited params value
//     this.route.params.subscribe((params: any) => {
//       let rentalID: string = params.id;
      
//       this.updateRental(rentalID);
      
//     });
    
//     this.KEY = 'XGk1lOBwWRAuvrucgZ5aMUr7N1CFXELz';

//     this.url = `http://www.mapquestapi.com/geocoding/v1/address?key=${this.KEY}&location=${this.rental.street}` + `,` + `${this.rental.city}`;
//     // this.url = `http://open.mapquestapi.com/geocoding/v2/address?key=${this.KEY}&location=${this.location}`;
//     // this.url = `http://www.mapquestapi.com/geocoding/v1/address?key=${this.KEY}&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500`;
//     // let requestUrl: string = `http://kalathur.com/getJsonData.php?url=${url}`;

//     return this.locationAPI.getLocation(this.url)
//     .subscribe(APIdata => {
//       console.log('Location is: ' + APIdata);
//       this.location = APIdata.results[0].locations[0].mapUrl;
//     });
//   }

//   // updateRental(rntlID: string): any {
//   //   this.rental = this.rentalService.getTheRental(rntlID);
//   // }

//   updateRental(rntlID: string): any {

//     this.rentalService.getTheRental(rntlID).subscribe((targetRental: Rental) => {
//       // Updates rental with targetRental received which matches the route id
//       this.rental = targetRental;
//       console.log('rental details are: ' + this.rental);
//     });
//   }

// }
