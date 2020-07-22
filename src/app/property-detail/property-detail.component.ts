import {Component, OnInit} from '@angular/core';
import {IProperty} from '../iproperty';
import {PropertyService} from '../service/property.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  propertyId: number;
  property: IProperty;

  constructor(private propertyService: PropertyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.propertyId = params.id;
      this.propertyService.getPropertyById(this.propertyId).subscribe(result => {
        // this.bookForm.setValue(result);
        this.property = result;
      });
    });
  }

  // backToList() {
  //   this.router.navigate(['/']);
  // }

}
