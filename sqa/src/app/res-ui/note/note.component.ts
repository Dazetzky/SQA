import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalService } from '../../data/services/modal.service';
import { NotesService } from '../../data/services/notes.service';
import {NgFor} from "@angular/common";
import { CommonModule } from '@angular/common';
import { KeyValue } from '@angular/common';
import { AppComponent } from '../../app.component';



@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit {
  notes: any = [];
  @Output() onClickEvent = new EventEmitter<number>();
  
  constructor(public modalService: ModalService, private apiNote: NotesService) {
  
  }
 
  onClickBtn(username: any, id: any){
    if (localStorage.getItem('username') == username) {
      this.modalService.showDialog = true
      this.onClickEvent.emit(id)
      this.modalService.setData(id)
    }
    console.log(username, id)
  }

  onClickBtn2(id:number, username: string){
    if (localStorage.getItem('username') == username){
      this.delNote(id)
      console.log(id)
    }
  }

  ngOnInit(): void {
    this.getAllNotes();
  }
  //получение всех записей
  getAllNotes(){
    this.apiNote.getAllNotes().subscribe(
      data => {
        console.log(data);
        this.notes =  (data);
        console.log(this.notes);
      },
      error => {
        console.log(error);
      }
    );
  }

  delNote(id: number){
    this.apiNote.DelNote(id).subscribe(
      data => {
        console.log(data)
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

}
