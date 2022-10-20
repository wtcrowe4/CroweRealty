import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(){
    //return this.http.get('data/properties.json')
    
    
    return this.http.get('data/properties.json').pipe(
     map(data => {
       return data;
      })
    );

    //data is returning an object, not an array
    // .pipe(
    //   map(data => {
    //     const propertiesArray: Array<IProperty> = [];
    //     for(const Id in data){
    //       if(data.hasOwnProperty(Id)){
    //         propertiesArray.push(data[Id]);
    //       }
    //     }
    //     return propertiesArray;
    //   }
    // ));
  }
}
