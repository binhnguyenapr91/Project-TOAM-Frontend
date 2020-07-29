import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PropertyService} from '../service/property.service';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {
  message: string;
  idProperty: number;
  formEdit: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    size: new FormControl(''),
    bathrooms: new FormControl(''),
    bedrooms: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private activatedRouter: ActivatedRoute,
              private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.idProperty = params.id;
      this.propertyService.getPropertyById(this.idProperty).subscribe(result => {
        this.formEdit.setValue(result);
      });
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.idProperty) {
      this.propertyService.updatePropertyId(this.formEdit.value).subscribe(result => {
        this.message = 'Cập nhập thành công';
      });
    } else {
      this.message = 'Cập nhập không thành công';
    }
  }
}
