import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  //First
  getAllPost(){
    return this.http.get('https://5d3c1d02301f26001416ac6c.mockapi.io/services');
  }
  //First Ends

  //Second
  fetch(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}