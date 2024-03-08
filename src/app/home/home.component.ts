import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location
      *ngFor="let housingLocation of filteredLocationList"
      [housingLocation]="housingLocation">
    </app-housing-location>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // ! NOTE: $ ng g c Home --standalone --inline-template
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    })
  }

  // ! NOTE: search button must be clicked to filter correctly
  // ! BUG: pressing the enter key after search query does not work correctly
  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housingLocationList;
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
