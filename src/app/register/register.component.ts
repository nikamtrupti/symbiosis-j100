
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormsModule, NgForm ,} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  myForm!: FormGroup;
  client={
    client_name :'',
    client_mobileno :'',  
    client_password : '',
    client_email : '',
    clientRole:''
  
  }
  
  private   baseUrl = 'http://localhost:9006/api/CreateClient'; // Adjust the URL if needed
  
  constructor(private http: HttpClient,  private router: Router)  { }

  ngOnInit(): void {
  const group =this.myForm.get('group');
  }
 
  onSubmit(form: NgForm) {
    if (form.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post(this.baseUrl, this.client, { headers }).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          alert('Registration successful!');
          this.router.navigate(['/loginpage']).then(() => {
            console.log('Navigation completed');
          }).catch(err => {
            console.error('Navigation error:', err);
          });
        },
        error: (error) => {
          console.error('Error during registration:', error);
          alert('Registration failed.');
        }
      });
    }
  }
  
}


