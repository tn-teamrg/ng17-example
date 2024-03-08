import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // ! NOTE: $ ng g s housing
  constructor() { }

  url = 'http://localhost:3000/locations';

  // ! NOTE: promises is `eager`
  // ! TODO: refactor promises to observables `lazy`
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  // ! NOTE: promises is `eager`
  // ! TODO: refactor promises to observables `lazy`
  async getHousingLocationByID(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.info(`[INFO] -- \nfirstName: ${firstName} \nlastName: ${lastName} \nemail: ${email}`);
  }

}
