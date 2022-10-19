import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: any
  

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(data => {
      this.Properties = data as Array < any > ;
    });
  }

}
