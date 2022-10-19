import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any> = [
    {
      "Id": 1,
      "Name": "House 1",
      "Image": "assets/default-house.jpg",
      "Type": "House",
      "Address": "Sample Address",
      "Bedrooms": 3,
      "Bathrooms": 2,
      "Price": 160000
    },
    {
      "Id": 2,
      "Name": "House 2",
      "Image": "assets/default-house.jpg",
      "Type": "House",
      "Address": "Sample Address",
      "Bedrooms": 4,
      "Bathrooms": 3,
      "Price": 220000
    },
    {
      "Id": 3,
      "Name": "House 3",
      "Image": "assets/default-house.jpg",
      "Type": "House",
      "Address": "Sample Address",
      "Bedrooms": 2,
      "Bathrooms": 2,
      "Price": 120000
    },
    {
      "Id": 4,
      "Name": "House 4",
      "Image": "assets/default-house.jpg",
      "Type": "House",
      "Address": "Sample Address",
      "Bedrooms": 5,
      "Bathrooms": 6,
      "Price": 460000
    },
    {
      "Id": 5,
      "Name": "Apartment 1",
      "Image": "assets/default-house.jpg",
      "Type": "Apartment",
      "Address": "Sample Address",
      "Bedrooms": 3,
      "Bathrooms": 2,
      "Price": 160000
    },
    {
      "Id": 6,
      "Name": "Apartment 2",
      "Image": "assets/default-house.jpg",
      "Type": "Apartment",
      "Address": "Sample Address",
      "Bedrooms": 4,
      "Bathrooms": 3,
      "Price": 220000
    },
    {
      "Id": 7,
      "Name": "Apartment 3",
      "Image": "assets/default-house.jpg",
      "Type": "Rental",
      "Address": "Sample Address",
      "Bedrooms": 2,
      "Bathrooms": 2,
      "Price": 1200
    },
    {
      "Id": 8,
      "Name": "Apartment 4",
      "Image": "assets/default-house.jpg",
      "Type": "Rental",
      "Address": "Sample Address",
      "Bedrooms": 5,
      "Bathrooms": 6,
      "Price": 4000
    }

  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
