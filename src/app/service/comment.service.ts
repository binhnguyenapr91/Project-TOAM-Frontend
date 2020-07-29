import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {IComment} from "../interface/IComment";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {IPropertyType} from "../interface/IPropertyType";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  shouldRefresh = new Subject<any>();

  constructor(private http:HttpClient) { }
  getComment(count = 10): Observable<IComment[]> {
    return this.http.get<IComment[]>(environment.apiComment).pipe(
      map(response => response.filter((comment, i) => i < count))
    );
  }
  getCommentById(id: number): Observable<IComment> {
    return this.http.get<IComment>(`${environment.apiComment}/${id}`);
  }
  createComment(comment: IComment): Observable<IComment> {
    return this.http.post<IComment>(`${environment.apiComment}`, comment);
  }
  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${environment.apiComment}/${id}`);
  }
  updateComment(comment: IComment): Observable<IComment> {
    return this.http.put<IComment>(`${environment.apiComment}/${comment.id}`, comment);
  }

  getListComment(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`http://localhost:8080/api/comments`);
  }
}
