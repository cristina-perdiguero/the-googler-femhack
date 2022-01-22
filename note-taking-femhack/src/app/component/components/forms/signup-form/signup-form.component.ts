import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/service/password.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signupForm = this.formBuilder.group({
    name : ['', [Validators.required]],
    surname : ['', [Validators.required]],
    phone : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    email : ['', [Validators.required, Validators.minLength(5), Validators.email]],
    password : ['', [Validators.required, Validators.pattern(this.passwordService.passwordPattern)]],
    confirm_password : ['', [Validators.required, Validators.pattern(this.passwordService.passwordPattern)]]
  })

  showPasswordAlert : boolean = false;

  @Output() emitSuccess = new EventEmitter<boolean>();


  constructor(
    private formBuilder: FormBuilder,
    private passwordService : PasswordService,
    private userService : UserService
  ){

  }

  ngOnInit(): void {
  }


  signUpUser(){
    if( this.passwordService.checkPasswordMatch( this.signupForm.get(['password'])!.value , this.signupForm.get(['confirm_password'])!.value) ){
      this.userService.userData = {
        name       : this.signupForm.get(['name'])!.value,
        surname    : this.signupForm.get(['surname'])!.value,
        phone      : this.signupForm.get(['phone'])!.value,
        email      : this.signupForm.get(['email'])!.value,
        password   : this.signupForm.get(['password'])!.value,
        created_at : new Date().toLocaleString()
      }
      this.emitSuccess.emit( true )
      sessionStorage.setItem( 'user', JSON.stringify(this.userService.userData) )
    } else {
      this.showPasswordAlert = true;
    }
  }



}
