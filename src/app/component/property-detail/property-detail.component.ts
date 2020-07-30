import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IProperty} from '../../interface/iproperty';
import {PropertyService} from '../../service/property.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {TokenStorageService} from '../../_services/token-storage.service';
import {CommentService} from '../../service/comment.service';
import {IComment} from '../../interface/IComment';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number;
  commentList: IComment[] = [];
  commentForm: FormGroup;
  propertyabcId: number;
  accountabc: { id: number } = {id: 1};
  propertyabc: { id: number } = {id: 1};


  message: string;

  property: IProperty;
// khai biến để lấy next property
  nextPropertyId: number;
  nextProperty: IProperty;


  constructor(private propertyService: PropertyService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public sanitizer: DomSanitizer,
              private fb: FormBuilder,
              private token: TokenStorageService,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.accountabc.id = this.token.getUser().id;
    console.log(this.accountabc);
    this.activatedRoute.params.subscribe(params => {
// lấy về property theo id
      this.propertyId = params.id;

      this.propertyabc.id = params.id;

      this.propertyService.getPropertyById(this.propertyId).subscribe(result => {
        this.property = result;
      });
// tslint:disable-next-line:radix
      this.nextPropertyId = parseInt(params.id) + 1;
      this.propertyService.getPropertyById(this.nextPropertyId).subscribe(result => {
        this.nextProperty = result;
      });
//
    });
    //

    this.commentForm = this.fb.group({
      id: [''],
      comment: ['', [Validators.required, Validators.minLength(1)]],
      account: [''],
      properties: [''],
    });

    this.commentService.getCommentByPropertyId(this.propertyId).subscribe(result => {
      this.commentList = result;
      console.log(result);
    }, error => {
      this.commentList = [];
    });

  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const {value} = this.commentForm;
    this.commentService.createComment(value).subscribe(result => {
      // this.commentService.shouldRefresh.next('Gửi thông điệp gì đó!');
      console.log(result);
      this.message = 'Đã gửi bình luận ';

    }, error => {
      this.message = 'Bạn cần có ký hợp đồng với chủ sở hữu để bình luận ';
      console.log(error);
    });
    this.setDefaultValue();

    console.log('ID account la: ' + this.accountabc.id);
    console.log('id property la: ' + this.propertyabc.id);

    // }

  }

  get Field(): FormGroup {
    return this.commentForm;
  }

  setDefaultValue(): void {
    this.commentForm.get('account').setValue(this.accountabc);
    this.commentForm.get('properties').setValue(this.propertyabc);
    // this.commentForm.get('id').setValue('');
  }

}
