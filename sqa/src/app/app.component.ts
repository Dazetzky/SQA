import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteComponent } from './res-ui/note/note.component';
import { MenuComponent } from './res-ui/menu/menu.component';
import { CommentComponent } from './res-ui/comment/comment.component';
import { LoginComponent } from './pages/login/login.component';
import { EntryComponent } from './pages/entry/entry.component';
import { LayoutComponent } from './res-ui/layout/layout.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SearchComponent } from './res-ui/search/search.component';
import { LogFormComponent } from './res-ui/log-form/log-form.component';
import { ModalFormComponent } from './res-ui/modal-form/modal-form.component';
import { ModalService } from './data/services/modal.service';
import { CommonModule, NgFor } from '@angular/common';
import { NoteClearComponent } from './res-ui/note-clear/note-clear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { KeyValue } from '@angular/common';
import { NoteHistoryComponent } from './res-ui/note-history/note-history.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteComponent,NoteHistoryComponent, MenuComponent, CommentComponent, LoginComponent, EntryComponent, LayoutComponent, SearchPageComponent, HistoryPageComponent, SearchComponent, LogFormComponent, ModalFormComponent, CommonModule, NoteClearComponent, FormsModule, ReactiveFormsModule, HttpClientModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sqa';
  id: number=0

}
