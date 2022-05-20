
import { Component, OnInit } from '@angular/core';
import { Country } from './country';
import { TestAPIService } from './testapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {

  
  arr:Country[] = [];

  constructor(service:TestAPIService) { 
    service.getDataFromAPI().subscribe(
      data=>{
        
        this.arr = (data as unknown as Country[]);
      },
      error=>{
        
      });

  }
load()
{
  
}
  ngOnInit(): void {
  }

}