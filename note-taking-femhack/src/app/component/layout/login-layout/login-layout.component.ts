import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

  viewComponent : string = "signup"
  signUpOk : boolean     = false

  
  constructor(
    private userService : UserService,
    private router:Router
  ){ 
    sessionStorage.removeItem('current_user')
  }

  ngOnInit(): void {
    if ( this.userService.checkUserListSessionstorage() ){
      this.viewComponent = "login"
      let user = this.userService.checkUserListSessionstorage()
      if (user){
        user = JSON.parse(user)
        this.userService.userData = user
      }
      console.log(this.userService.userData )
    } 
  }

  changeViewComponent( component : string){
    this.viewComponent = component
  }

  signupSuccess(){
    this.signUpOk = true
    this.viewComponent = 'login'
  }

  loginSuccess(){
    this.router.navigate([''])
  }

}
