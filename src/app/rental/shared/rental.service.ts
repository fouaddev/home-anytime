import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {
  
  // private rentals: Rental[] = [
  //   {   
  //     id:          '1',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://s23040.pcdn.co/wp-content/images/explorer-collection/vacation-homes-hero.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   { 
  //     id:          '2',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://media.architecturaldigest.com/photos/576d98445ea3e586576ec49a/master/pass/luxury-vacation-rental-sites-03.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {   
  //     id:          '3',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2019%2F04%2Fmain%2Fgettyimages-525981286.jpg%3Fitok%3DogrfEfpl&w=400&c=sc&poi=face&q=85',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {
  //     id:          '4',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'San Diego',
  //     category:    'apartment',
  //     image:       ['https://www.riversideproperties.org/wp-content/uploads/2015/06/Riverside-Properties-exterior-59-3-1092x508.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {   
  //     id:          '5',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2019%2F04%2Fmain%2Fgettyimages-525981286.jpg%3Fitok%3DogrfEfpl&w=400&c=sc&poi=face&q=85',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {
  //     id:          '6',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'San Diego',
  //     category:    'apartment',
  //     image:       ['https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/5a28e664de0eeb89ed84d1f1444ac9ec/original.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {   
  //     id:          '7',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://s23040.pcdn.co/wp-content/images/explorer-collection/vacation-homes-hero.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {   
  //     id:          '8',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/parkcity/Alpine_Sanctuary_Sky5_6CC0F7C1-0AAD-4147-9E8D98096E0F7DCF_fbf10c02-2849-48a2-a487eaa4adb4f112.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {   
  //     id:          '9',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://www.riversideproperties.org/wp-content/uploads/2015/06/Riverside-Properties-exterior-59-3-1092x508.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {   
  //     id:          '10',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2019%2F04%2Fmain%2Fgettyimages-525981286.jpg%3Fitok%3DogrfEfpl&w=400&c=sc&poi=face&q=85',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: "This is a private bedroom in a three bedroom apartment. You just need to walk 5 minutes to find everything you need from night life to grocery stores to local restaurants and shopping malls. I take pride to clean the common areas every day, So rest assured this is a sparkling clean place. So what are you waiting for! give it a try! ",
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {
  //     id:          '11',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'San Diego',
  //     category:    'apartment',
  //     image:       ['https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/5a28e664de0eeb89ed84d1f1444ac9ec/original.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: 'The perfect summer spot',
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {   
  //     id:          '12',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2019%2F04%2Fmain%2Fgettyimages-525981286.jpg%3Fitok%3DogrfEfpl&w=400&c=sc&poi=face&q=85',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: 'The perfect summer spot',
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {
  //     id:          '13',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'San Diego',
  //     category:    'apartment',
  //     image:       ['https://res.cloudinary.com/resortsandlodges/image/fetch/w_800,h_520,c_fill/https://media.travelnetsolutions.com/5a28e664de0eeb89ed84d1f1444ac9ec/original.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: 'The perfect summer spot',
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {   
  //     id:          '14',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://s23040.pcdn.co/wp-content/images/explorer-collection/vacation-homes-hero.jpg',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: 'The perfect summer spot',
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  //   {   
  //     id:          '15',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2019%2F04%2Fmain%2Fgettyimages-525981286.jpg%3Fitok%3DogrfEfpl&w=400&c=sc&poi=face&q=85',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    3,
  //     description: 'The perfect summer spot',
  //     dailyRate:   49,
  //     shared:      false,
  //     createdAt:   '07/10/2019',
  //   },
  //   {
  //     id:          '16',
  //     title:       'Cozy Comfortable Room in the Best Location',
  //     type:        'Loft',
  //     street:      'Venice Beach avenue',
  //     city:        'Los Angeles',
  //     category:    'apartment',
  //     image:       ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2019%2F04%2Fmain%2Fgettyimages-525981286.jpg%3Fitok%3DogrfEfpl&w=400&c=sc&poi=face&q=85',
  //                   'https://www.palmspringsrentals.com/sites/default/files/styles/homepage_callout/public/living_room_indoor_outdoor_-_oranj_palm_vacation_homes.jpg?itok=r8Lkyti8',
  //                   'https://www.beachcombersnw.com/city-photos/manzanita-vacation-rental-oceanfront-view.jpg'
  //                 ],
  //     bedrooms:    2,
  //     description: 'The perfect summer spot',
  //     dailyRate:   120,
  //     shared:      false,
  //     createdAt:   '12/10/2019',
  //   },
  // ];

  constructor(private http: HttpClient) {

  }

  // Returns an Observable that emits rentals data
  public getRentals(): Observable<any> {
    
    // // Creates an Observable that emits rentals as the emitted data values
    // const rentalArrayObservable: Observable<Rental[]> = new Observable(observer => {
      
    //   // Observer watches for rentals and emits it via next() when it's available
    //   // observer.next(this.rentals);
      
    // });
    
    // // the above Observable is then returned
    // return rentalArrayObservable;

    // Remove the bellow line and uncomment the above line if you want 
    // to use the above dummy rentals, otherwise the bellow lines will 
    // make an http call to mongoDB to get rentals data
    
    return this.http.get('/api/v1/rentals');
  
  }

  // Finds target rental by ID and emits it to the subscriber (if any)
  public getTheRental(rentalID: string): Observable<any> {
    
    // // Creates and returns an Observable of type Rental which emits target rental
    // return new Observable<Rental>((observer) => {
      
    //   const targetRent = this.rentals.find((r) => {
    //     return r.id == rentalID;
    //   });
      
    //   // Observer watches for target rental and emits it via next() when it's available
    //   observer.next(targetRent);

    // });

    // Creates http request to Node / Express server to get rental
    // based on its ID
    
    return this.http.get('/api/v1/rentals/' + rentalID);
    
  }

}
