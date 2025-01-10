import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


export const routes: Routes = [
{path: '', component:FrontpageComponent },
{ path: 'loginpage', component: LoginpageComponent },
{path: 'register',component:RegisterComponent },


];
