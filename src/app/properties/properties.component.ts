import {Component, OnInit} from '@angular/core';
import {IProperty} from '../interface/iproperty';
import {PropertyService} from '../service/property.service';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
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
    this.propertyService.shouldRefresh.subscribe(result => {
      this.propertyService.getListProperty().subscribe(results => {
        this.properties = results;
        console.log(results);
      }, error => {
        this.properties = [];
      });
    });
  }

  deleteProperty(id: number): void {
    if (confirm('I want to delete ?')) {
      this.propertyService.deleteProperty(id).subscribe(result => {
        this.propertyService.shouldRefresh.next();
      });
    }
  }
}
