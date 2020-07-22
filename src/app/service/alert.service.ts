import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
// @ts-ignore
import {Alert, AlertType} from 'src/app/model/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();
  private defaultId = 'default-alert';

  alert(alert: Alert): void {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }

  clear(id = this.defaultId): void {
    this.subject.next(new Alert({id}));
  }

  error(message: string, options?: any): void {
    this.alert(new Alert({...options, type: AlertType.Error, message}));
  }

  constructor() {
  }
}
