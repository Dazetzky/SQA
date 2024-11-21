import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../data/services/modal.service';
import { NotesService } from '../../data/services/notes.service';

@Component({
  selector: 'child-comp',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './note-clear.component.html',
  styleUrl: './note-clear.component.css'
})

export class NoteClearComponent implements OnInit {
  notes: any = [];
  tempnotes: any = [];
  searchinput: string = ""
  @Input() userInput: string = "";
  constructor(public modalService: ModalService, private apiNote: NotesService) {
  }
  // поиск по имени пользователя
  oninputstr(str: string) {
    this.notes = this.tempnotes
    this.searchinput = str
    if (str != "") {
      this.notes = this.notes.filter((item: { username: string; }) => item.username == this.searchinput);
    }
    
  }
  onClickBtnD(){
    console.log('ggg')
    this.notes=this.notes.reverse()
  }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
    this.apiNote.getAllNotes().subscribe(
      data => {
        console.log(data);
        this.notes =  (data);
        this.tempnotes =  (data);
        console.log(this.notes);
      },
      error => {
        console.log(error);
      }
    );
  }
}
