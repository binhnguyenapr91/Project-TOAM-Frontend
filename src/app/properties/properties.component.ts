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
  private bathroom: number;

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit(): void {

  }

  search(value: string): void {
    this.searchKey = 'filter/'
      + value;
    this.propertyService.getListProperty(this.searchKey).subscribe(result => {
      this.properties = result;
      console.log(result);
    }, error => {
      this.properties = [];
    });
  }
}
