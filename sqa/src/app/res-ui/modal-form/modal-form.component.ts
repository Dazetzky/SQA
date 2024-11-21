import { Component } from '@angular/core';
import { ModalService } from '../../data/services/modal.service';
import { NotesService } from '../../data/services/notes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css'
})
export class ModalFormComponent {
  constructor(public modalService: ModalService, private apiNote: NotesService) {

  }
  editText: string= ''

  onClickBtn(){
    this.EditTx(this.editText, this.modalService.getData())
    console.log(this.modalService.getData())
  }

  EditTx(Name: any, Id: number){
    this.apiNote.EditNote(Name, Id).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
}
}
