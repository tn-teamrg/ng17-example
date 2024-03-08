export interface HousingLocation {
	// ! NOTE: $ ng g interface housingLocation
	id: number,
	name: string,
	city: string,
	state: string,
	photo: string,
	availableUnits: number,
	wifi: boolean,
	laundry: boolean,
}
