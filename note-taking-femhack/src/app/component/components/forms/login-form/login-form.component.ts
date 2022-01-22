import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlContainer, FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/service/password.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email : ['', [Validators.required, Validators.minLength(5), Validators.email]],
    password : ['', [Validators.required, Validators.pattern(this.passwordService.passwordPattern)]]
  })

  showLoginAlert : boolean = false;

  @Output() emitSuccess = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private passwordService : PasswordService,
    private userService : UserService
  ) {

  }

  ngOnInit(): void {
  }

  loginUser(){
    let user     = this.loginForm.get(['email'])!.value
    let password = this.loginForm.get(['password'])!.value
    if ( this.userService.checkUserEmail( user ) && this.passwordService.checkPasswordMatch( password , this.userService.userData.password) ){
      this.emitSuccess.emit( true )
      sessionStorage.setItem( 'current_user', JSON.stringify(this.userService.userData) )
    } else {
      this.showLoginAlert = true
    }
  }
}
