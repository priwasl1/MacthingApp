import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { MatchingService } from './service/matching.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Matching app';
  values : any;
  url = "http://localhost:59258/api/values";
  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.getValues();
  }
  
  getValues(){
      this.http.get(this.url).subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
