import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit {
  @Input() tagId : any;
  
  tagForm = this.formBuilder.group({
    text : ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private taskService : TaskService
  ) { }

  ngOnInit(): void {
  }

  addTag(){
    this.taskService.addTag( this.tagId, this.tagForm.get(['text'])!.value )
  }

}
