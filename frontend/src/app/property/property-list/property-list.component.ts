import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  
  //need to change housing.service to return an array of properties
  //Properties: IProperty[];
  // Vid 11
  Properties: any = [];

  ForRent = false;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    //Seperate into buy and rent
    if(this.route.snapshot.url.toString() == 'rent-property'){
      
            

      this.ForRent = true;
    }
    //only get properties that are for rent
    this.housingService.getAllProperties(this.ForRent).subscribe(
  


    //this.housingService.getAllProperties().subscribe(
      data => {
        this.Properties = data;
        
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
}
