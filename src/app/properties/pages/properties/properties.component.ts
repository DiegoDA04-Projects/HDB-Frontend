import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Property} from "../../model/property";
import {PropertyService} from "../../services/property.service";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {PropertyFormComponent} from "../../components/property-form/property-form.component";
import {MatIconModule} from "@angular/material/icon";

const columns = [
  {
    columnDef: 'id',
    header: "ID",
  },
  {
    columnDef: 'blockNumber',
    header: "Block Number",
  },
  {
    columnDef: 'street',
    header: 'Street',
  },
  {
    columnDef: 'maximumFloorLevel',
    header: 'Maximum Floor Level',
  },
  {
    columnDef: 'yearCompleted',
    header: 'Year Completed',
  },
  {
    columnDef: 'residentialPropertyTag',
    header: 'Residential Property Tag',
  },
  {
    columnDef: 'commercialPropertyTag',
    header: 'Commercial Property Tag',
  },
  {
    columnDef: 'marketAndHawkerTag',
    header: 'Market and Hawker Tag',
  },
  {
    columnDef: 'miscellaneous',
    header: 'Miscellaneous',
  },
  {
    columnDef: 'multiStoreyCarParkTag',
    header: 'Multi Storey Car Park Tag',
  },
  {
    columnDef: 'precinctPavilionTag',
    header: 'Precinct Pavilion Tag',
  },
  {
    columnDef: 'town',
    header: 'Town',
  },
  {
    columnDef: 'totalDwellingUnits',
    header: 'Total Dwelling Units',
  },
  {
    columnDef: 'numberOneRoomSoldFlats',
    header: 'Number One Room Sold Flats',
  },
  {
    columnDef: 'numberTwoRoomSoldFlats',
    header: 'Number Two Room Sold Flats',
  },
  {
    columnDef: 'numberThreeRoomSoldFlats',
    header: 'Number Three Room Sold Flats',
  },
  {
    columnDef: 'numberFourRoomSoldFlats',
    header: 'Number Four Room Sold Flats',
  },
  {
    columnDef: 'numberFiveRoomSoldFlats',
    header: 'Number Five Room Sold Flats',
  },
  {
    columnDef: 'numberExecutiveSoldFlats',
    header: 'Number Executive Sold Flats',
  },
  {
    columnDef: 'numberMultiGenerationSoldFlats',
    header: 'Number Multi Generation Sold Flats',
  },
  {
    columnDef: 'numberStudioApartmentSoldFlats',
    header: 'Number Studio Apartment Sold Flats',
  },
  {
    columnDef: 'numberOneRoomRentalFlats',
    header: 'Number One Room Rental Flats',
  },
  {
    columnDef: 'numberTwoRoomRentalFlats',
    header: 'Number Two Room Rental Flats',
  },
  {
    columnDef: 'numberThreeRoomRentalFlats',
    header: 'Number Three Room Rental Flats',
  },
  {
    columnDef: 'numberOtherRoomRentalFlats',
    header: 'Number Other Room Rental Flats',
  },
]

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    PropertyFormComponent,
    MatIconModule
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})


export class PropertiesComponent implements OnInit, AfterViewInit {

  propertyData: Property;
  datasource: MatTableDataSource<Property>;
  isEditMode = false;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;

  displayedColumns = columns.map(c => c.columnDef);

  constructor(private propertyService: PropertyService) {
    this.propertyData = {} as Property;
    this.datasource = new MatTableDataSource<any>();
    this.displayedColumns.push('actions')
  }

  ngOnInit(): void {
    this.getAllProperties();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  private resetEditState() {
    this.isEditMode = false;
    this.propertyData = {} as Property
    this.propertyData.numberOtherRoomRentalFlats = 0;
  }

  private getAllProperties() {
    this.propertyService.getAll().subscribe((data: any) => {
      this.datasource.data = data.content;
    });
  }

  private addProperty() {
    this.propertyData.id = 0;
    this.propertyService.create(this.propertyData).subscribe((response: any) => {
      this.datasource.data.push({...response});
      this.datasource.data = this.datasource.data.map((p: Property) => { return p;});
    });
  }

  private updateProperty() {
    let property = this.propertyData;
    this.propertyService.update(property.id, property).subscribe((response: any) => {
      this.datasource.data = this.datasource.data.map((p: Property) => {
        if (p.id === response.id) {
          p = response;
        }
        return p;
      });
    });
  }

  private deleteProperty(id: number) {
    this.propertyService.delete(id).subscribe(() => {
      this.datasource.data = this.datasource.data.filter((p: Property) => { return p.id !== id ? p : false});
    });
  }

  onEditItem(element: Property) {
    this.propertyData = element;
    this.isEditMode = true;
  }

  onCancelEdit() {
    this.isEditMode = false;
    this.getAllProperties()
  }

  onDeleteItem(element: Property) {
    this.deleteProperty(element.id);
  }

  onPropertyAdded(property: Property) {
    this.propertyData = property;
    this.addProperty();
    this.resetEditState();
  }

  onStudentUpdated(property: Property) {
    this.propertyData = property;
    this.updateProperty();
    this.resetEditState();
  }

  protected readonly columns = columns;
}
