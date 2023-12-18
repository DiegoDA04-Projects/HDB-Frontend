export class Property {
  id: number;
  blockNumber: string;
  street: string;
  maximumFloorLevel: number;
  yearCompleted: number;
  residentialPropertyTag: string;
  commercialPropertyTag: string;
  marketAndHawkerTag: string;
  miscellaneous: string;
  multiStoreyCarParkTag: string;
  precinctPavilionTag: string;
  town: string;
  totalDwellingUnits: number;
  numberOneRoomSoldFlats: number;
  numberTwoRoomSoldFlats: number;
  numberThreeRoomSoldFlats: number;
  numberFourRoomSoldFlats: number;
  numberFiveRoomSoldFlats: number;
  numberExecutiveSoldFlats: number;
  numberMultiGenerationSoldFlats: number;
  numberStudioApartmentSoldFlats: number;
  numberOneRoomRentalFlats: number;
  numberTwoRoomRentalFlats: number;
  numberThreeRoomRentalFlats: number;
  numberOtherRoomRentalFlats: number;

  constructor() {
    this.id = 0;
    this.blockNumber = '';
    this.street = '';
    this.maximumFloorLevel = 0;
    this.yearCompleted = 0;
    this.residentialPropertyTag = '';
    this.commercialPropertyTag = '';
    this.marketAndHawkerTag = '';
    this.miscellaneous = '';
    this.multiStoreyCarParkTag = '';
    this.precinctPavilionTag = '';
    this.town = '';
    this.totalDwellingUnits = 0;
    this.numberOneRoomSoldFlats = 0;
    this.numberTwoRoomSoldFlats = 0;
    this.numberThreeRoomSoldFlats = 0;
    this.numberFourRoomSoldFlats = 0;
    this.numberFiveRoomSoldFlats = 0;
    this.numberExecutiveSoldFlats = 0;
    this.numberMultiGenerationSoldFlats = 0;
    this.numberStudioApartmentSoldFlats = 0;
    this.numberOneRoomRentalFlats = 0;
    this.numberTwoRoomRentalFlats = 0;
    this.numberThreeRoomRentalFlats = 0;
    this.numberOtherRoomRentalFlats = 0;
  }
}
