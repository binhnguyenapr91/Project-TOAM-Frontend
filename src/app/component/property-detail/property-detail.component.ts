import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IProperty} from '../../interface/iproperty';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertyService} from '../../service/property.service';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

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
  //
  name = 'Set iframe source';
  url: string = "https://www.google.com/maps?q=200 van cao&output=embed";
  urlSafe: SafeResourceUrl;


  constructor(private propertyService: PropertyService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public sanitizer: DomSanitizer ) {
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
      //
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    });
  }
}
