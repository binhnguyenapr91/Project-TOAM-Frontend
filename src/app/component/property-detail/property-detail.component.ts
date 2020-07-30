import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IProperty} from "../../interface/iproperty";
import {PropertyService} from "../../service/property.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {TokenStorageService} from "../../_services/token-storage.service";
import {CommentService} from "../../service/comment.service";
import {IComment} from "../../interface/IComment";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number;
  commentList: IComment[] = [];
  commentForm: FormGroup;
  accounts: { id: number } = {id: 1}
  propertys: { id: number } = {id: 1}
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
      // this.accounts.id = this.token.getUser().id;
    console.log(this.accounts);
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
      id: [''],
      comment: ['', [Validators.required, Validators.minLength(1)]],
      account: [''],
      properties: [''],
    });

    this.getAllComment();

  }

  getAllComment(): void {
    this.commentService.getCommentPropertyId(3,this.propertyId).subscribe(result => {
      this.commentList = result;
      console.log(result);
    }, error => {
      this.commentList = [];
      console.log(error);
    });
  }

  getAccountId() {
    this.accounts.id = this.token.getUser().id;
  }

  getPropertyId() {
    this.activatedRoute.params.subscribe(next => {
      this.propertys.id = next.id;
    })
  }


  onSubmit() {
    const {value} = this.commentForm;
    this.getAccountId();
    this.getPropertyId();
    this.commentService.createComment(value).subscribe(result => {
      this.commentService.shouldRefresh.next('Gửi thông điệp gì đó!');
      console.log(result);
      this.message = 'Message Sent '
      // this.router.navigate(['/home/property/'+ this.propertyId])
      this.getAllComment();


    }, error => {
      this.onSubmit();
      console.log(error);
    });
    this.setDefaultValue(this.accounts,this.propertys);

  }

  get Field(): FormGroup {
    return this.commentForm;
  }

  setDefaultValue(idAccount:{id:number},idProperty:{id:number}): void {
    this.commentForm.get('account').setValue(idAccount);
    this.commentForm.get('properties').setValue(idProperty);
    // this.commentForm.get('id').setValue('');
  }

}
