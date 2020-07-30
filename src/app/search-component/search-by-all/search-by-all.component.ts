import { Component, OnInit } from '@angular/core';
import {IProperty} from "../../interface/iproperty";
import {PropertyService} from "../../service/property.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-by-all',
  templateUrl: './search-by-all.component.html',
  styleUrls: ['./search-by-all.component.css']
})
export class SearchByAllComponent implements OnInit {
  properties: IProperty[] = [];
  address: string;
  bath: number;
  bed: number;
  price: number;

  constructor(private propertyService: PropertyService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.address = params.address;
      this.bath = params.bath;
      this.bed = params.bed;
      this.price = params.price
      this.propertyService.searchByAll(this.address,this.bath, this.bed, this.price).subscribe(result => {
        this.properties = result;
        console.log(result);
      });
    });
  }

}
