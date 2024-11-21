import { Component } from '@angular/core';
import { LogFormComponent } from '../../res-ui/log-form/log-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
