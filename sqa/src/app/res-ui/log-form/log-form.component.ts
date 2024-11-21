import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../data/services/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './log-form.component.html',
  styleUrl: './log-form.component.css'
})
export class LogFormComponent implements OnInit {
  
  

  constructor(private apiUser: UserService, private router: Router) {}

  formRegister = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
  })

  ngOnInit(): void {}

  login() {
    console.log("login")
    this.getToken(
      'test@ws.ru',
      this.formRegister.value.username,
      this.formRegister.value.password
    );

    //const formData = this.formRegister.value;
    //console.log(formData);
    /*this.createUser('test@ws.ru', formData.username, formData.password);*/
  }

  getToken(Email: any, Username: any, Password: any){
    this.apiUser.getToken(Email,Username,Password).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('my-token', data.auth_token);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }


}
