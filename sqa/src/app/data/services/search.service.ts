import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
searchinput: string = ""
setsearchinput(input: string){
  this.searchinput = input
}
  constructor() { }
}
