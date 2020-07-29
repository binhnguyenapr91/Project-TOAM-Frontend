import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../service/comment.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TokenStorageService} from "../../_services/token-storage.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentabcId: number;
  propertyabcId: number;
  accountabc: { id: number } = {id: 1}
  propertyabc: { id: number } = {id: 1,}
  abc: string;


  isShowSuccess = false;
  message: string;

  commentForm: FormGroup
  //   = new FormGroup({
  // })

  constructor(private commentService: CommentService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private token: TokenStorageService,) {
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   // this.commentId = params.id;
    //   // this.commentService.getCommentById(this.commentId).subscribe(result => {
    //   //   this.commentForm.setValue(result);
    //   // });
    //   this.propertyabc.id = params.id;
    //   this.commentService.getCommentById(this.propertyabc.id).subscribe(result => {
    //     this.commentForm.setValue(result);
    //   })
    // });

    // this.accountabc.id = this.token.getUser().id;


    this.commentForm = this.fb.group({
      comment: [''],
      account: [''],
      properties: [''],
    });
  }

  onSubmit() {
    // if (this.commentId) {
    //   this.commentService.updateComment(this.commentForm.value).subscribe(result => {
    //     this.isShowSuccess = true;
    //     this.message = 'Đã cập nhật thông tin !';
    //   });
    // } else {

    const {value} = this.commentForm;
    this.commentService.createComment(value).subscribe(result => {
      // this.commentService.shouldRefresh.next('Gửi thông điệp gì đó!');
      alert("them comment");
      console.log(result);

    }, error => {
      alert("khong them comment");
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
  }
}
