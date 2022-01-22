import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {Router} from '@angular/router';
import { TaskService } from 'src/app/service/task.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name : string = ''
  updateTask : any
  showTaskForm : boolean = false
  showAddTag : boolean = false

  constructor(
    private userService : UserService,
    private router:Router,
    public taskService : TaskService
  ) {
   }

  ngOnInit(): void {
    if( !this.userService.checkCurrentUser() ){
      this.router.navigate(['login'])
    }
    this.userService.userData = this.userService.checkCurrentUser() 
    this.userService.userData  = JSON.parse( this.userService.userData )
    this.name = this.userService.userData.name
    this.taskService.getTaskList()
  }

  showUpdateTask(id : number){
    this.updateTask = id
    this.showTaskForm = true
  }

  logOutUser(){
    this.userService.logOutUser()
    this.router.navigate(['login'])

  }

  closeTaskForm(){
    this.showTaskForm  = false
    this.updateTask = undefined
  }
}
