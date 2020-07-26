import { Component, OnInit } from '@angular/core';
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

  constructor(private propertyService: PropertyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.propertyId = params.id;
      this.propertyService.getPropertyById(this.propertyId).subscribe(result => {
        // this.bookForm.setValue(result);
        this.property = result;
      });
    });
  }

}
