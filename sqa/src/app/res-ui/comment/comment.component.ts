import { Component } from '@angular/core';
import { NotesService } from '../../data/services/notes.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  sending: string = ''
  username: string = ''
  constructor(private apiNote: NotesService, private router: Router) {
  }

  onClickBtn (){
    this.username = localStorage.getItem('username')!.toString() 
    this.CreateNote (this.username, this.sending)
    console.log('penus')

  }

  CreateNote(Username: any, Name: any){
    this.apiNote.CreateNote(Username,Name).subscribe(
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
