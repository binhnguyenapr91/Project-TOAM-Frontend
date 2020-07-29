import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../service/comment.service";
import {IComment} from "../../interface/IComment";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  commentList: IComment[]=[];
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    this.commentService.getListComment().subscribe(result => {
      this.commentList = result;
      console.log(result);
    }, error => {
      this.commentList = [];
    });

  }

}
