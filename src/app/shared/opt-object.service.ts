import { Injectable , } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptObjectService {
  private optDataSource:any = new BehaviorSubject<any>("");
  currentObj = this.optDataSource.asObservable();
  constructor() { }

  changeObject(value:any){
    this.optDataSource.next(value);
  }

}
