import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {Property} from "../../model/property";
import {PropertyService} from "../../services/property.service";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";

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

]

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})


export class PropertiesComponent implements OnInit, AfterViewInit {

  propertyData: any;
  datasource: MatTableDataSource<Property>;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false}) sort!: MatSort;

  displayedColumns = columns.map(c => c.columnDef);

  constructor(private propertyService: PropertyService) {
    this.propertyData = {} as Property;
    this.datasource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getAllProperties();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;

  }

  private getAllProperties() {
    this.propertyService.getAll().subscribe((data: any) => {
      this.datasource.data = data.content;
    });
  }

  protected readonly columns = columns;
}
