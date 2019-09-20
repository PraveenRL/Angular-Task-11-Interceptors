import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interceptors';

  constructor(private dataService : DataService){}

  ngOnInit(){
    this.dataService.getAllPost().subscribe(data => console.log(data));
  }
 
  fetch(){
    this.dataService.fetch().subscribe(data => console.log(data));
  }

}
