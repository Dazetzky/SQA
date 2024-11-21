import { Component, Input } from '@angular/core';
import { SearchComponent } from '../../res-ui/search/search.component';
import { NoteComponent } from '../../res-ui/note/note.component';
import { NoteClearComponent } from '../../res-ui/note-clear/note-clear.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [SearchComponent,NoteComponent, NoteClearComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  @Input() inputStr: string = '';
  handleChildEvent(event: string) {
    console.log('Родитель получил событие:', event);
    // Обработка события
    this.inputStr= event;
}
}
