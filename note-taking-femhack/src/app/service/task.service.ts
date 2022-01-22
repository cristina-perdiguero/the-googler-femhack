import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task : any = {
    title       : undefined,
    description : undefined,
    tag_list: []
  }

  taskList : any = []

  constructor() { }

  getTask( id : number){
    return this.taskList[id]
  }

  getTaskList(){
    this.getSessionStorageList()
    return this.taskList
  }

  setTask( taskTitle : string, taskDescription : string ){
    this.task.title       = taskTitle
    this.task.description = taskDescription
    this.taskList.push( this.task )
    this.updateSessionStorageList()
  }

  updateTask( id : number, newTitle : string, newDescription : string ){
    this.taskList[id].title       = newTitle
    this.taskList[id].description = newDescription
    this.updateSessionStorageList()
  }

  deleteTask( id : number ){
    this.taskList.splice( id, 1)
    this.updateSessionStorageList()
  }

  addTag( id : number, text : string  ){
    this.taskList[id].tag_list.push( text )
    this.updateSessionStorageList()
    console.log(this.taskList)
  }

  getSessionStorageList(){
    if(sessionStorage.getItem('task_list')){
      let list = sessionStorage.getItem('task_list')
      if(list){
        list = JSON.parse(list)
      }
      this.taskList = list
    }
  }

  updateSessionStorageList(){
    if(sessionStorage.getItem('task_list')){
      sessionStorage.removeItem('task_list')
    }
    sessionStorage.setItem('task_list', JSON.stringify(this.taskList))
  }


}
