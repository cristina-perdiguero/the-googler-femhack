import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './component/components/forms/login-form/login-form.component';
import { SignupFormComponent } from './component/components/forms/signup-form/signup-form.component';
import { LoginLayoutComponent } from './component/layout/login-layout/login-layout.component';
import { HomeComponent } from './component/layout/home/home.component';
import { TaskFormComponent } from './component/components/forms/task-form/task-form.component';
import { TagFormComponent } from './component/components/forms/tag-form/tag-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    LoginLayoutComponent,
    HomeComponent,
    TaskFormComponent,
    TagFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule , 
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
