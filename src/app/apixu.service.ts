import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    // console.log('miau');  http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=New York
    return this.http.get('http://api.weatherstack.com/current?access_key=f3df597d4c07776f30095d9f166e525f&query=' + location);
}
}