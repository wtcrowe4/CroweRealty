import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(ForRent: boolean){
    //return this.http.get('data/properties.json')
    
    //make return type an array of properties


    return this.http.get('data/properties.json').pipe(
      map(data => {
      console.log(data);
      return data;
      })
    );
      
      // vid 14
      // if (ForRent == true){
         
        //only return properties that are for rent
    //       const propertiesArray: Array<IProperty> = [];
    //       for(const id in data){
    //         if(data.hasOwnProperty(id) && data[id].Type === 'Rental'){
    //           propertiesArray.push(data[id]);
    //         }
    //       }
    //       return propertiesArray;
      
    // );

    //data is returning an object, not an array
    // return this.http.get('data/properties.json').pipe(
    //   map(data => {
    //     const propertiesArray!: Array<IProperty> = [];
    //     for(const id in data){
    //       if(data.hasOwnProperty(Id) && data[id].Type !== 'Rental'){
    //         propertiesArray.push(data[id]);
    //       }
    //     }
    //     return propertiesArray;
    //   }
    // ));
  }
}
