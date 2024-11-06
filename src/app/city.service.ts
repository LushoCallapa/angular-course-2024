import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private localStorageKey = 'citiesList';

  constructor(private _http: HttpClient) {

  }

  getCities(): Observable<any[]> {
    const cities = localStorage.getItem(this.localStorageKey);
    if (cities) {
      return of(JSON.parse(cities));
    } else {
      return this._http.get<any[]>('assets/cities.json').pipe(
        tap((data) => {
          localStorage.setItem(this.localStorageKey, JSON.stringify(data));
        })
      );
    }
  }

  deleteCity(cityId: number): void {
    let cities = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]') as any[];
    cities = cities.filter(city => city.id !== cityId);
    localStorage.setItem(this.localStorageKey, JSON.stringify(cities));
  }

  addCity(city: any): void {
    const cities = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]') as any[];
    cities.push(city);
    localStorage.setItem(this.localStorageKey, JSON.stringify(cities));
  }

}
