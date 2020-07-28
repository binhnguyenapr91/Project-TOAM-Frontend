import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AddressService} from '../service/address.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.component.html',
  styleUrls: ['./address-update.component.css']
})
export class AddressUpdateComponent implements OnInit {
  message: string;
  addressId: string;
  addressForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    street: new FormControl('')
  });

  constructor(private activatedRoute: ActivatedRoute,
              private addressService: AddressService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.addressId = params.id;
      // @ts-ignore
      this.addressService.getAddressById().subscribe(result => {
        this.addressForm.setValue(result);
      });
    });
  }
  onSubmit(): void {
    if (this.addressId) {
      this.addressService.updateAddress(this.addressForm.value).subscribe(result => {
        this.message = 'update success';
      });
    } else {
      this.message = 'update no success';
    }
  }
}
