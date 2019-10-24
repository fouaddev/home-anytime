const Rental = require('./models/rental');

class DummyDb {

  constructor() {

    this.rentals = [
      {
        title: "Amazing place for summer break",
        type:  "boat house",
        city: "Manhattan",
        street: "1 south beach",
        images: [
          "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg", 
          "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg", 
          "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_960_720.jpg",
          "https://cdn.pixabay.com/photo/2019/03/30/21/03/space-4092053_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_960_720.jpg"
        ],
        category: "house",
        bedrooms: 5,
        shared: true,
        description: "Very nice apartment in center of Miami!!.",
        dailyRate: 129,
        createdAt: '2019-12-17T09:23:03.922+00:00'
      },
      {
        title: "Beautiful home for you",
        type:  "historical house",
        city: "Austin",
        street: "5 cambridge street",
        images: [
          "https://cdn.pixabay.com/photo/2014/11/21/17/17/country-house-540796_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/11/21/16/21/bed-1846251_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_960_720.jpg",
          "https://cdn.pixabay.com/photo/2019/03/30/21/03/space-4092053_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/07/31/21/41/apartment-406901_960_720.jpg"
        ],
        category: "house",
        bedrooms: 4,
        shared: false,
        description: "Perfect for families who want to spend fun vacation.",
        dailyRate: 220,
        createdAt: '2019-11-17T09:12:03.922+00:00'
      },
      {
        title: "dream nature house",
        type:  "house",
        city: "San Diego",
        street: "100 lexington street",
        images: [
          "https://cdn.pixabay.com/photo/2016/07/28/09/01/nature-1547302_960_720.jpg",
          "https://cdn.pixabay.com/photo/2015/03/26/09/43/living-room-690174_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_960_720.jpg"
        ],
        category: "nature mountain",
        bedrooms: 2,
        shared: false,
        description: "If you like nature, you'll love this paradize.",
        dailyRate: 79,
        createdAt: '2019-10-17T04:23:03.922+00:00'
      },
      {
        title: "This is the ",
        type:  "villa",
        city: "Boston",
        street: "1 court street",
        images: [
          "https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg", 
          "https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_960_720.jpg"
        ],
        category: "house",
        bedrooms: 6,
        shared: true,
        description: "Very nice apartment in center of the city.",
        dailyRate: 185,
        createdAt: '2019-11-17T09:13:08.562+00:00'
      },
      {
        title: "dream nature house",
        type:  "Home",
        city: "Seattle",
        street: "5 dextrer street",
        images: [
          "https://cdn.pixabay.com/photo/2016/07/28/09/01/nature-1547302_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg"
        ],
        category: "nature mountain",
        bedrooms: 2,
        shared: false,
        description: "If you like nature, you'll love this paradize.",
        dailyRate: 79,
        createdAt: '2019-10-17T04:23:03.922+00:00'
      },
      {
        title: "This is the ",
        type:  "villa",
        city: "New York",
        street: "100 government street",
        images: [
          "https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_960_720.jpg",
          "https://cdn.pixabay.com/photo/2015/03/26/09/43/living-room-690174_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg"
        ],
        category: "apartment",
        bedrooms: 6,
        shared: true,
        description: "Very nice apartment in center of the city.",
        dailyRate: 185,
        createdAt: '2019-11-17T09:13:08.562+00:00'
      },
      {
        title: "Amazing place for summer break",
        type:  "modern studio",
        city: "new york",
        street: "100 state street",
        images: [
          "https://cdn.pixabay.com/photo/2016/10/28/13/09/usa-1777986_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/07/28/09/01/nature-1547302_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062_960_720.jpg"
        ],
        category: "studio",
        bedrooms: 1,
        shared: true,
        description: "Very nice apartment in center of Miami!!.",
        dailyRate: 129,
        createdAt: '2019-12-17T09:23:03.922+00:00'
      },
      {
        title: "Beautiful home for you",
        type:  "historical house",
        city: "las vegas",
        street: "100 california road",
        images: [
          "https://cdn.pixabay.com/photo/2014/11/21/17/17/country-house-540796_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/07/28/09/01/nature-1547302_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062_960_720.jpg"
        ],
        category: "house",
        bedrooms: 4,
        shared: false,
        description: "Perfect for families who want to spend fun vacation.",
        dailyRate: 220,
        createdAt: '2019-11-17T09:12:03.922+00:00'
      },
      {
        title: "Old house in nature",
        type:  "villa",
        city: "Dallas",
        street: "25 Parker avenue",
        images: [
          "https://s23040.pcdn.co/wp-content/images/explorer-collection/vacation-homes-hero.jpg",
          "https://cdn.pixabay.com/photo/2016/07/28/09/01/nature-1547302_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062_960_720.jpg"
        ],
        category: "villa",
        bedrooms: 8,
        shared: true,
        description: "Very nice apartment in center of the city.",
        dailyRate: 113,
        createdAt: '2019-10-17T09:23:03.922+00:00'
      },
      {
        title: "Amazing place for summer break",
        type:  "boat house",
        city: "Miami",
        street: "100 government street",
        images: [
          "https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/07/28/09/01/nature-1547302_960_720.jpg",
          "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
          "https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062_960_720.jpg",
          "https://cdn.pixabay.com/photo/2016/07/28/09/01/nature-1547302_960_720.jpg"
        ],
        category: "house",
        bedrooms: 5,
        shared: true,
        description: "you'll adore this house. It comes with everything you need.",
        dailyRate: 79,
        createdAt: '2019-12-17T09:23:03.922+00:00'
      }
    ];
  }

  async cleanDb() {
    await Rental.remove({});
  }

  addRentalToDb() {
    this.rentals.forEach((rental) => {
      console.log('\nrental:\n' + rental);
      const newRental = new Rental(rental);

      newRental.save();
    });
  }

  seedDb() {
    this.cleanDb();
    this.addRentalToDb();
  }
}

module.exports = DummyDb;
