import { Component } from '@angular/core';
import { RouterOutlet ,Router, RouterModule} from '@angular/router';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FrontpageComponent } from './frontpage/frontpage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BeautyParlor';
}
