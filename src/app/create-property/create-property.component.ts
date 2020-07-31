import {Component, OnInit} from '@angular/core';
import {PropertyService} from '../service/property.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUpload} from '../interface/file-upload';
import {PropertiesTypeService} from '../service/propeties-type.service';
import {RoleService} from '../service/role.service';
import {IPropertyType} from '../interface/IPropertyType';
import {IRole} from '../interface/IRole';
import {AddressService} from '../service/address.service';
import {IAddress} from '../interface/IAddress';
import {UploadFileService} from '../uploadFile/upload-file.service';
import {IAccount} from '../interface/IAccount';
import {AccountService} from '../service/account.service';

import {IDistrict} from '../interface/IDistrict';
import {DistrictService} from '../service/district.service';
import {TokenStorageService} from '../_services/token-storage.service';

const FRONT_LINK = 'https://firebasestorage.googleapis.com/v0/b/toam-f11e6.appspot.com/o/uploads%2F';
const BACK_LINK = '?alt=media&token=2265a5e3-a515-4e4c-8581-93c12cd19ebb';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})

export class CreatePropertyComponent implements OnInit {
  propertyForm: FormGroup;
  isShow = true;
  idHost: any;
  message: string;
  file: any;
  imageFile: any;
  selectedFile: FileList;
  selectedImage: FileList;
  currentFileUpload: FileUpload;
  currentImageUpload: FileUpload;
  percentage: number;
  url: string | ArrayBuffer = '';
  Types: IPropertyType[] = [];
  hosts: IAccount [] = [];
  addresses: IAddress [] = [];
  districts: IDistrict [] = [];
  host: { password: string; email: string; phone: string; name: string; id: number; username: string; status: boolean; token: string } = {
    id: 0,
    name: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    status: false,
    token: ''
  };

  constructor(private propertyService: PropertyService,
              private fb: FormBuilder,
              private propertyTypeService: PropertiesTypeService,
              private roleService: RoleService,
              private addressService: AddressService,
              private uploadFileService: UploadFileService,
              private accountService: AccountService,
              private tokenStorageService: TokenStorageService,
              private districtService: DistrictService) {
  }


  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      price: ['', [Validators.required]],
      size: ['', [Validators.required]],
      bathrooms: ['', [Validators.required]],
      bedrooms: ['', [Validators.required]],
      description: ['', [Validators.required]],
      host: [''],
      addresses: [''],
      propertiesTypes: [''],
      images: [''],
      videos: ['']
    });
    this.idHost = this.tokenStorageService.getUser();

    this.districtService.getListDistricts().subscribe(result => {
      this.districts = result;
    });
    this.propertyTypeService.getAllPropertiesType().subscribe(result => {
      this.Types = result;
      console.log(result);
    }, error => {
      this.Types = [];
      console.log(error);
    });
    // this.accountService.getListHost().subscribe(result => {
    //   this.hosts = result;
    //   console.log(this.hosts);
    // }, error => {
    //   this.hosts = [];
    //   alert('không thể lấy host');
    //   console.log(error);
    // });
    this.addressService.getAllAddress().subscribe(result => {
      this.addresses = result;
      console.log(result);
    }, error => {
      this.addresses = [];
    });
    this.host = JSON.parse(localStorage.getItem('host'));
  }

  setDefaultValue(): void {
    this.propertyForm.get('videos').setValue(FRONT_LINK + this.file.name + BACK_LINK);
    this.propertyForm.get('images').setValue(FRONT_LINK + this.imageFile.name + BACK_LINK);
    this.propertyForm.get('host').setValue(this.host);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.upload();
    this.setDefaultValue();
    const {value} = this.propertyForm;
    this.propertyService.createProperty(value).subscribe(result => {
      alert('You have successfully added a new home !!!');
      console.log(value);
    }, error => {
      alert(' Add New Failed Home');
    });
  }

  displayImage(event): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      };
      console.log(this.url);
    }
    this.selectedImage = event.target.files;
  }

  selectFile(event): void {
    this.selectedFile = event.target.files;
  }


  // tslint:disable-next-line:typedef

  upload(): void {
    this.imageFile = this.selectedImage.item(0);
    this.file = this.selectedFile.item(0);
    this.selectedImage = undefined;
    this.currentImageUpload = new FileUpload(this.imageFile);
    this.selectedFile = undefined;
    this.currentFileUpload = new FileUpload(this.file);
    this.uploadFileService.pushFileToStorage(this.currentImageUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
    this.uploadFileService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }
}
