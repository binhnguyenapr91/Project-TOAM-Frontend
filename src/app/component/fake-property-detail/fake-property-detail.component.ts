import { Component, OnInit } from '@angular/core';
import {IProperty} from "../../interface/iproperty";
import {PropertyService} from "../../service/property.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fake-property-detail',
  templateUrl: './fake-property-detail.component.html',
  styleUrls: ['./fake-property-detail.component.css']
})
export class FakePropertyDetailComponent implements OnInit {
   properties: IProperty;
   propertyId: number;
  constructor(private propertyService: PropertyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.propertyId = params.id;
    })
    this.propertyService.getPropertyById(this.propertyId).subscribe(result => {
      this.properties = result;
    });
  }

}
