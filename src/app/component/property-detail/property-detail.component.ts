import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {IProperty} from "../../interface/iproperty";
import {PropertyService} from "../../service/property.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  propertyId: number;
  property: IProperty;
// khai biến để lấy next property
  nextPropertyId: number;
  nextProperty: IProperty;
//
  name = 'Set iframe source';
  url: string = '';
  urlSafe: SafeResourceUrl;

  constructor(private propertyService: PropertyService,
              private activatedRoute: ActivatedRoute,
              public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
// lấy về property theo id
      this.propertyId = params.id;
      this.propertyService.getPropertyById(this.propertyId).subscribe(result => {
        this.property = result;
      });
// tslint:disable-next-line:radix
      this.nextPropertyId = parseInt(params.id) + 1;
      this.propertyService.getPropertyById(this.nextPropertyId).subscribe(result => {
        this.nextProperty = result;
      });
//
      this.url = "https://www.google.com/maps?q=";
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + "codegym" + "&output=embed");
    });
  }
}
