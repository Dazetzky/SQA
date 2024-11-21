import { Component } from '@angular/core';
import { CommentComponent } from '../../res-ui/comment/comment.component';
import { NoteComponent } from '../../res-ui/note/note.component';
import { NoteClearComponent } from '../../res-ui/note-clear/note-clear.component';
import { NoteHistoryComponent } from '../../res-ui/note-history/note-history.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommentComponent, NoteComponent, NoteClearComponent, NoteHistoryComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {

}
