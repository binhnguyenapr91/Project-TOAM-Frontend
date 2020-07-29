import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PropertyService} from '../service/property.service';
import {IAddress} from '../interface/IAddress';
import {PropertiesTypeService} from '../service/propeties-type.service';
import {IPropertyType} from '../interface/IPropertyType';
import {AddressService} from '../service/address.service';
import {DistrictService} from '../service/district.service';
import {IDistrict} from '../interface/IDistrict';
import {PropertyStatusService} from '../service/property-status.service';
import {IPropertyStatus} from '../interface/IPropertyStatus';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {
  selectedStatus: string;
  message: string;
  idProperty: number;
  address: IAddress[] = [];
  Types: IPropertyType[] = [];
  districts: IDistrict[] = [];
  addresses: IAddress[] = [];
  propertyStatuses: IPropertyStatus [] = [];
  formEdit: FormGroup = new FormGroup({
    id: new FormControl(''),
    images: new FormControl(''),
    videos: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    size: new FormControl(''),
    bathrooms: new FormControl(''),
    bedrooms: new FormControl(''),
    description: new FormControl(''),
    addresses: new FormControl(''),
    propertiesTypes: new FormControl(''),
    propertyStatus: new FormControl('')
  });

  constructor(private activatedRouter: ActivatedRoute,
              private propertyService: PropertyService,
              private propertyTypeService: PropertiesTypeService,
              private addressService: AddressService,
              private districtService: DistrictService,
              private propertyStatus: PropertyStatusService) {
  }

  ngOnInit(): void {
    this.propertyStatus.getAllPropertiesStatus().subscribe(result => {
      this.propertyStatuses = result;
      console.log(result);
      this.selectedStatus = this.propertyStatuses[0].name;
    });
    this.activatedRouter.params.subscribe(params => {
      this.idProperty = params.id;
      this.propertyService.getPropertyById(this.idProperty).subscribe(result => {
        this.formEdit.setValue(result);
      });
    });
    this.propertyTypeService.getAllPropertiesType().subscribe(result => {
      this.Types = result;
      console.log(result);
    }, error => {
      this.Types = [];
      console.log(error);
    });
    this.districtService.getListDistricts().subscribe(result => {
      this.districts = result;
    });
    this.addressService.getAllAddress().subscribe(result => {
      this.addresses = result;
      console.log(result);
    }, error => {
      this.addresses = [];
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.formEdit.value);
    if (this.idProperty) {
      this.propertyService.updatePropertyId(this.formEdit.value).subscribe(result => {
        this.message = 'Cập nhập thành công';
      });
    } else {
      this.message = 'Cập nhập không thành công';
    }
  }
}
