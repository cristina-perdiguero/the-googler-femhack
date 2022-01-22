import { Injectable } from '@angular/core';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData : any = {
    name: undefined,
    surname : undefined,
    phone : undefined,
    email : undefined,
    password : undefined,
    created_at: undefined,
    taskList : this.taskService.taskList
  }

  constructor(
    private taskService : TaskService
  ){ 
    
  }

  getUserData(){
    return this.userData
  }

  getUseraName(){
    return this.userData.name
  }

  setUserData( newName : string, newSurname : string, newPhone : number ){
    this.userData.name     = newName
    this.userData.surname  = newSurname
    this.userData.newPhone = newPhone
  }

  setUserPassword( newPassword : string ){
    this.userData.password = newPassword
  }

  checkUserEmail( userToCheck : string ){
    return this.userData.email === userToCheck
  }

  checkUserListSessionstorage(){
    return sessionStorage.getItem('user')
  }

  checkCurrentUser(){
    return sessionStorage.getItem('current_user')
  }

  logOutUser(){
    if( this.checkCurrentUser() ){
      sessionStorage.removeItem('current_user')  
    }
  }
}
