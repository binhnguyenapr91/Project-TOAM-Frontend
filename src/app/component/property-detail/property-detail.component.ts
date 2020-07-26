import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IProperty} from '../../interface/iproperty';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertyService} from '../../service/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number;
  propertyForm: FormGroup;
  property: IProperty;
  // khai biến để lấy random property
  randomPropertyId: number;
  randomProperty: IProperty;

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
      // this.randomPropertyId = params.id + Math.round(Math.random() * this.properties.length);
      this.randomPropertyId = Math.ceil(params.id * Math.random());
      this.propertyService.getPropertyById(this.randomPropertyId).subscribe(result => {
        this.randomProperty = result;
      });
    });
  }
}
