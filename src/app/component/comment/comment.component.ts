import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../service/comment.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
// import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentId: number;
  isShowSuccess = false;
  message: string;

  commentForm: FormGroup
  //   = new FormGroup({
  // })

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.commentId = params.id;
      this.commentService.getCommentById(this.commentId).subscribe(result => {
        this.commentForm.setValue(result);
      });
    });

    this.commentForm = this.fb.group({
      id: new FormControl(''),
      username: new FormControl('',[Validators.required,]),
      comment: new FormControl('')
    });
  }

  onSubmit() {
    if (this.commentId) {
      this.commentService.updateComment(this.commentForm.value).subscribe(result => {
        this.isShowSuccess = true;
        this.message = 'Đã cập nhật thông tin !';
      });
    } else {
      this.commentService.createComment(this.commentForm.value).subscribe(result => {
        this.isShowSuccess = true;
        this.message = 'Đã thêm !';
        this.commentService.shouldRefresh.next('Gửi thông điệp gì đó!');
      });
    }

  }

  get Field(): FormGroup {
    return this.commentForm;
  }

}
