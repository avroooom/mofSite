
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { CategoriesService } from './myservice';
import { FormsModule } from '@angular/forms';




@NgModule({
  imports: [ HttpClientModule, FormsModule, BrowserModule,  GridModule ],
  declarations: [ AppComponent ],
  providers: [ CategoriesService ],
  bootstrap: [ AppComponent ]
})



export class AppModule {

   
} 



