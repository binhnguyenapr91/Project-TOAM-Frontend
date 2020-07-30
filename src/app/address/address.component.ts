import {Component, OnInit} from '@angular/core';
import {AddressService} from '../service/address.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IDistrict} from '../interface/IDistrict';
import {ICity} from '../interface/icity';
import {CityService} from '../service/city.service';
import {DistrictService} from '../service/district.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  formAddress: FormGroup;
  districts: IDistrict[] = [];
  message: string;

  constructor(private addressService: AddressService,
              private fb: FormBuilder,
              private cityService: CityService,
              private districtService: DistrictService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formAddress = this.fb.group({
      street: ['', [Validators.required, Validators.minLength(6)]],
      districts: [''],
    });
    this.districtService.getListDistricts().subscribe(result => {
      this.districts = result;
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.formAddress.valid) {
      const {value} = this.formAddress;
      this.addressService.createAddress(value).subscribe(result => {
        this.message = 'Bạn thêm địa chỉ thành công';
        this.router.navigate(['/create-property']);
      }, error => {
        this.message = 'Bạn thêm địa chỉ không thành công';
      });
    } else {
      this.message = 'Bạn thêm địa chỉ không thành công';
    }
  }
}
