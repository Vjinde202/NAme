import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class TestAPIService {

  
  constructor(private http:HttpClient) {}
   

   endPoint:string = 'https://api.nationalize.io/';

   getDataFromAPI():Observable<Country>
   {
    return this.http.get<Country>(`${this.endPoint}`);
   }
}
