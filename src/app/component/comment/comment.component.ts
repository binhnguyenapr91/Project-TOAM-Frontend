import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
   propertyId: number;
   commentForm: FormGroup;
  constructor(private ) { }

  ngOnInit(): void {
  }

}
