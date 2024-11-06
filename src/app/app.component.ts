import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityService } from './city.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ItemComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  citiesList: any[] = [];
  newCityName: string = '';
  
  constructor( private _cityService: CityService) {
    this._cityService.getCities().subscribe((res) => {
      this.citiesList = res.sort((a: any, b: any) => a.name.localeCompare(b.name));
      console.log(this.citiesList)
    });
  }

  handleDeleteCity(city: any) {

    this._cityService.deleteCity(city.id);
    this.citiesList = this.citiesList.filter(c => c.id !== city.id); 
  }

  handleAddCity() {
    const newCityNormalized = this.newCityName.trim().toLowerCase();

  if (newCityNormalized) {
    const cityExists = this.citiesList.some(city => city.name.toLowerCase() === newCityNormalized);

    if (!cityExists) {
      const newCity = { id: Date.now(), name: this.newCityName };
      this._cityService.addCity(newCity);
      this.citiesList = [...this.citiesList, newCity];
      this.citiesList.sort((a: any, b: any) => a.name.localeCompare(b.name));
      this.newCityName = '';
    } else {
      alert('¡Ya existe una ciudad con ese nombre!');
    }
  }
  }
}
