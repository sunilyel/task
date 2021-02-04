import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css'],
})
export class ShowTaskComponent implements OnInit {
  public taskOpen: any;
  constructor(private my: TaskService) {}

  ngOnInit(): void {
    this.my.getdata('task').subscribe((res) => {
      // console.log(res);
      this.taskOpen = res;
    });
  }
}
