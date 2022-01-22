import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private password : string | undefined
  public passwordPattern : any = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/

  constructor(){}

  getPassword(){
    return this.password
  }

  setPassword( password : string ){
    this.password = password
  }

  getPasswordPattern(){
    return this.passwordPattern
  }

  checkPasswordMatch( password : string , confirmPassword : string ){
    return password === confirmPassword
  }
}
