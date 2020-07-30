import { Component, OnInit } from '@angular/core';
import {IProperty} from '../../interface/iproperty';
import {PropertyService} from '../../service/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: IProperty[] = [];
  constructor(private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    this.propertyService.getListProperty().subscribe(result => {
      this.properties = result;
      console.log(result);
    }, error => {
      this.properties = [];
    });
  }

}
