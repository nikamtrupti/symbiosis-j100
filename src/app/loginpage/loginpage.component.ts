import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-loginpage',
  imports: [FormsModule, CommonModule,],
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  client = {
    client_password: '',
    client_email: '',
    clientRole: '',
  };
  constructor() {}
  onSubmit() {
    if (!this.client.clientRole) {
      alert('Please select a role to proceed.');
      return;
    }

    if (!this.client.client_email || !this.client.client_password) {
      alert('Please fill out all required fields.');
      return;
    }

    console.log('Login Successful', this.client);
    alert('Login Successful');


    
  }
}
