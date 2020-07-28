import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {IProperty} from "../../interface/iproperty";
import {PropertyService} from "../../service/property.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  propertyId: number;
  propertyForm: FormGroup;
  property: IProperty;
  // khai biến để lấy next property
  nextPropertyId: number;
  nextProperty: IProperty;

  constructor(private propertyService: PropertyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // lấy về property theo id
      this.propertyId = params.id;
      this.propertyService.getPropertyById(this.propertyId).subscribe(result => {
        this.property = result;
      });
      // tslint:disable-next-line:radix
      this.nextPropertyId =  parseInt(params.id) + 1;
      this.propertyService.getPropertyById(this.nextPropertyId).subscribe(result => {
        this.nextProperty = result;
      });
    });
  }

}
