import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AddressService} from '../service/address.service';
import {ActivatedRoute} from '@angular/router';
import {DistrictService} from '../service/district.service';
import {IDistrict} from '../interface/IDistrict';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {
  message: string;
  addressId: string;
  districts: IDistrict [] = [];
  addressForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    street: new FormControl(''),
    districts: new FormControl('')
  });

  constructor(private activatedRoute: ActivatedRoute,
              private addressService: AddressService,
              private districtService: DistrictService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.addressId = params.id;
      this.addressService.getAddressById(this.addressId).subscribe(result => {
        this.addressForm.setValue(result);
      });
      this.districtService.getListDistricts().subscribe(result => {
        this.districts = result;
      });
    });
  }

  onSubmit(): void {
    if (this.addressId) {
      this.addressService.updateAddress(this.addressForm.value).subscribe(result => {
        alert('update address success !!');
      });
    } else {
      alert('update address no success !!');
    }
  }
}
