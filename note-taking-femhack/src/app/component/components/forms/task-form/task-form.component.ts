import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  taskForm = this.formBuilder.group({
    title       : ['', [Validators.required]],
    description : ['', [Validators.required]]
  })

  @Input() updateTask : any;
  @Output() emitClose = new EventEmitter<boolean>();


  
  constructor(
    private formBuilder: FormBuilder,
    private taskService : TaskService
  ){

  }

  ngOnInit(): void {
  }

  saveTask(){
    let title       = this.taskForm.get(['title'])!.value
    let description = this.taskForm.get(['description'])!.value
    console.log(this.updateTask)
    if(this.updateTask !== undefined){
      this.taskService.updateTask(this.updateTask, title, description)
    } else{
      this.taskService.setTask( title, description )
    }
    this.updateTask  = undefined
    this.emitClose.emit(true)
  }

  closeModal(){
    this.emitClose.emit(true)
  }
  
}
