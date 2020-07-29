import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IProperty} from "../../interface/iproperty";
import {PropertyService} from "../../service/property.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {TokenStorageService} from "../../_services/token-storage.service";
import {CommentService} from "../../service/comment.service";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number;
  commentForm: FormGroup;
  account: { id: number };
  properties: { id: number } = {id: this.propertyId};
  commentId: number;

  message: string;

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
              private router: Router,
              public sanitizer: DomSanitizer,
              private fb: FormBuilder,
              private token: TokenStorageService,
              private commentService: CommentService,) {
  }

  ngOnInit(): void {
    this.account.id = this.token.getUser().id;
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
    //
    this.commentForm = this.fb.group({
      comment: [''],
      account: [''],
      properties: [''],
    });

    console.log("comment Id : " + this.commentId);
    console.log("property Id : " + this.propertyId);
    console.log("account Id : " + this.account.id);
  }

  onSubmit() {
    const {value} = this.commentForm;
    this.commentService.createComment(value).subscribe(result => {
      this.commentService.shouldRefresh.next('Gửi thông điệp gì đó!');
      console.log(result);

    }, error => {
      this.message = 'Bạn cần có ký hợp đồng với chủ sở hữu để bình luận ';
      console.log(error);
    });
    this.setDefaultValue();
  }

  get Field(): FormGroup {
    return this.commentForm;
  }

  setDefaultValue(): void {
    this.commentForm.get('account').setValue(this.account);
    this.commentForm.get('properties').setValue(this.properties);
  }

}
