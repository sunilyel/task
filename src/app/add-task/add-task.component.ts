import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  addtask: FormGroup;
  public msg;
  constructor(private fb: FormBuilder, private my: TaskService) {}

  ngOnInit(): void {
    this.addtask = this.fb.group({
      title: ['', Validators.required],
      details: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  add_task() {
    // console.log(this.addtask.value);

    this.my.postData('task', this.addtask.value).subscribe(
      (res) => {
        console.log(res);
        this.msg = 'Task Added Successfully';
      },
      (error) => {
        alert('Please Check URL path');
      }
    );
  }
}
