import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  id: number = 0
  showDialog = false
  constructor() { }
  private _data = new BehaviorSubject<number>(0);
  data$ = this._data.asObservable();

  setData(newData: number) {
    this._data.next(newData);
  }

  getData(): number {
    return this._data.getValue();
  }
}
