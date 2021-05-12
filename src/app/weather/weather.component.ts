import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public on: boolean;

  
  public primaryXAxis: Object;
  public chartData: Object[];

  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });

    this.primaryXAxis = {
      valueType: 'Category'
  };


  }




  sendToAPIXU(formValues: any){
    this.on = true;
    this.apixuService
    .getWeather(formValues.location)
    .subscribe(data =>{ 
      this.weatherData = data;
      this.chartData = [
        { month: 'Jan', temperature: 10}, { month: 'Feb', temperature:15 },
        { month: 'Mar', temperature: 1 }, { month: 'Apr', temperature:this.weatherData.current.feelslike },
        { month: 'May', temperature: this.weatherData.current.feelslike }, { month: 'June', temperature:this.weatherData.current.feelslike },
        { month: 'July', temperature: 20 }, { month: 'Aug', temperature:this.weatherData.current.feelslike },
        { month: 'Sep', temperature: this.weatherData.current.feelslike }, { month: 'Nov', temperature:this.weatherData.current.feelslike },
        { month: 'Dec', temperature: 20 }
      ];
      console.log(this.weatherData.current.feelslike);
      this.on = false    
    })
}




}
