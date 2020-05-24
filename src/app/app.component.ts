import { Component } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { CategoriesService } from './myservice';
import {GridDataResult} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  //template:'<kendo-grid [data]="gridData"></kendo-grid>' 
 templateUrl:'./app.component.html'  
   
   
})
export class AppComponent {
  title = 'mofSite';
  
   // public bindingType: String = 'array';
    public view: Observable<GridDataResult>;
    public gridData: any;
    public gridDataResult: GridDataResult
    public state: State = {skip: 0, take: 5};
    
 
    constructor(private service: CategoriesService) {
      this.view = service;
      this.service.query(this.state);
    }
    ngOnInit()
  {

     //const state: State = {skip: 0, take: 100};
    // this.view = service;  
    this.service.query(this.state);
    this.view.subscribe(res => {
      this.gridData = res;
      });
      
      
  }
        
          
         
      
    
}

  
  

