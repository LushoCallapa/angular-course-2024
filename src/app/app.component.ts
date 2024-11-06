import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityService } from './city.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ItemComponent, FormsModule, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  citiesList: any[] = [];
  filteredCities: any[] = [];
  newCityName: string = '';
  
  constructor( private _cityService: CityService) {
    this._cityService.getCities().subscribe((res) => {
      this.citiesList = res.sort((a: any, b: any) => a.name.localeCompare(b.name));
      this.filteredCities =this.citiesList;
      console.log(this.citiesList)
    });
  }
  
  public onSearch(searchText: string) {
    const normalizedSearchText = searchText.trim().toLowerCase();
    this.filteredCities = this.citiesList.filter(city =>
      city.name.toLowerCase().includes(normalizedSearchText)
    );
  }

  handleDeleteCity(city: any) {

    this._cityService.deleteCity(city.id);
    this.citiesList = this.citiesList.filter(c => c.id !== city.id); 
    this.filteredCities =this.citiesList;
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
      this.filteredCities =this.citiesList;
      this.newCityName = '';
    } else {
      alert('¡Ya existe una ciudad con ese nombre!');
    }
  }
  }
}
