import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../_services/token-storage.service';
import {PropertyService} from "../service/property.service";
import {IProperty} from "../interface/iproperty";
import {IPropertyType} from "../interface/IPropertyType";
import {CommentService} from "../service/comment.service";
import {IComment} from "../interface/IComment";
import {ContractService} from "../service/contract.service";
import {IContract} from "../interface/IContract";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  properties: IProperty[] = [];
  contracts: IContract[] = [];
  isRoleList: [{ name: string }, { name: string }] = [{name: 'ROLE_HOST'}, {name: 'ROLE_RENTER'}]
  comments: IComment[] = [];
  compareComments: IComment[] = [];
  propertiesType: IPropertyType [] = [];
  currentUser: any;

  constructor(private token: TokenStorageService,
              private propertyService: PropertyService,
              private commentService: CommentService,
              private contractService: ContractService) {
  }

  getPropertyByHostId(): void {
    this.propertyService.getPropertyByHostId(this.currentUser.id).subscribe(result => {
      this.properties = result;
      console.log(result);
    }, error => {
      this.properties = [];
      console.log(error);
    });
  }
  getContractByRenterId():void{
    this.contractService.getContractAccountId(this.currentUser.id).subscribe(result => {
      this.contracts = result;
      console.log(result);
    }, error => {
      this.contracts = [];
      console.log(error);
    });
  }

  getCommentByHostIds(): void {
    this.commentService.getCommentHostId(this.currentUser.id).subscribe(result => {
      this.comments = result;
    }, error => {
      this.comments = [];
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getPropertyByHostId();
    this.getCommentByHostIds();
    this.getContractByRenterId();
    this.propertyService.shouldRefresh.subscribe(result => {
      this.getPropertyByHostId();
      console.log(result);
    });
    console.log(this.comments[0]);
  }

  deleteProperty(id: number): void {
    if (confirm('Delete Confirmation ?')) {
      this.propertyService.deleteProperty(id).subscribe(result => {
        this.propertyService.shouldRefresh.next();
        console.log(result)
      });
    }
  }
}
