import {Component, OnInit} from '@angular/core';
import {IProperty} from "../../interface/iproperty";
import {PropertyService} from "../../service/property.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-by-type',
  templateUrl: './search-by-type.component.html',
  styleUrls: ['./search-by-type.component.css']
})
export class SearchByTypeComponent implements OnInit {
  properties: IProperty[] = [];
  propertyType: string;

  constructor(private propertyService: PropertyService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.propertyType = params.name;
      this.propertyService.searchByType(this.propertyType).subscribe(result => {
        this.properties = result;
      });
    });
  }
}


