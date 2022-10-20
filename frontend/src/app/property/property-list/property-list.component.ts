import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  
  //need to change housing.service to return an array of properties
  //Properties: Array<IProperty> = [];
  // Vid 11
  Properties: any = [];

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => {
        this.Properties = data;
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
}
