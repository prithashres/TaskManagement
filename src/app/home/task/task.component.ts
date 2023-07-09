import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  taskValidation = this.fb.group({
    taskName: ['', [Validators.required, Validators.maxLength(20)]],
    taskDescription: ['', Validators.required],
    taskPriority: ['', Validators.required],
    dueDate: ['', Validators.required],
    subTask: ['', Validators.required],
    assignee:['',Validators.required]
  });

isSubmitted=false;

  constructor(private fb: FormBuilder){}

  create(){
    this.isSubmitted=true;
  }

}
