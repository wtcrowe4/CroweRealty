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

  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
