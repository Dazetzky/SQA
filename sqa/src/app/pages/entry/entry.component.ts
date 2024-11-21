import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NoteComponent } from '../../res-ui/note/note.component';
import { CommentComponent } from '../../res-ui/comment/comment.component';
import { MenuComponent } from '../../res-ui/menu/menu.component';
import { ModalFormComponent } from '../../res-ui/modal-form/modal-form.component';
import { ModalService } from '../../data/services/modal.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../data/services/user.service';


@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [RouterOutlet, NoteComponent, CommentComponent, MenuComponent, ModalFormComponent, CommonModule],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent implements OnInit{
   constructor(public modalService: ModalService, private apiUser: UserService, private router: Router) {
   }
  ngOnInit(): void {
    //переброс на старницу авторизации "/login" с адреса "/", если отсутствует токен 
    if (!localStorage.getItem('my-token')) {
      this.router.navigate(['/login']);
    }
    this.getUserWithToken(localStorage.getItem('my-token'));

  }

   getUserWithToken(MyToken:any){
    this.apiUser.getUserWithToken(MyToken).subscribe(
      data => {
        console.log('token-taked')
        console.log(data);
        localStorage.setItem('username',data.username)
      },
      error => {
        this.router.navigate(['/login']);
        console.log(error);
      }
    );
  }
  
}
