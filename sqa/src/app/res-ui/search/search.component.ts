import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, SearchComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  search: string = "";
  isActive: boolean = false;
  @Output() onClickEvent = new EventEmitter<string>();
  @Output() onClickUp = new EventEmitter();
  @Output() onClickDown = new EventEmitter();
  onChange(event: Event) {
    console.log(this.search)
    this.onClickEvent.emit(this.search);
  }
 
  onClickBtnD(){
    this.onClickDown.emit()
    this.isActive = !this.isActive;
  }

  onClickBtnU(){
    this.onClickUp.emit()
  }


}
