import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  Property: any = {
    "Id": 1,
    "Name": "Sample House",
    "Image": "assets/default-house.jpg",
    "Type": "House",
    "Bedrooms": 3,
    "Bathrooms": 2,
    "Price": 120000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
