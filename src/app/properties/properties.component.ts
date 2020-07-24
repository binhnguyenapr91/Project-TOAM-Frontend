import {Component, OnInit} from '@angular/core';
import {IProperty} from '../interface/iproperty';
import {PropertyService} from '../service/property.service';
import {IAddress} from '../interface/IAddress';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: IProperty[] = [];
  private searchKey: string;

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit(): void {

  }

  search(value: string): void {

    // http://localhost:8080/api/property/filter?search=(addresses.districts.cities.name:'Hồ Chí Minh'
    // OR addresses.districts.name:'Thủ Đức')
    // AND bedrooms:1 AND bedrooms:1
    this.searchKey = 'filter?search=(addresses.districts.cities.name:\''
      + value + '\' OR addresses.districts.name:\''
      + value + '\'';
    console.log(this.searchKey);

    this.propertyService.getListProperty(this.searchKey).subscribe(result => {
      this.properties = result;
      console.log(result);
    }, error => {
      this.properties = [];
    });
  }
}
