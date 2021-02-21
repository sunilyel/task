import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Task, TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent implements OnInit, AfterViewChecked {
  data: Task[] = [];
  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(
    private cdRef: ChangeDetectorRef,
    private dataService: TaskService
  ) {}

  ngOnInit() {
    this.data = this.dataService.getTasks().subscribe((value) => {
      value.forEach((item) => {
        if (item.status === 'Completed') {
          this.done.push(item);
        } else if (item.status === 'In-progress') {
          this.inProgress.push(item);
        } else {
          this.todo.push(item);
        }
      });
      return value;
    });
    // Subscribe the Service Data
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  // @ts-ignore
  drop(event, item) {
    if (event.previousContainer === event.container) {
      // Need API
      this.updateIndex(event.container.data);
      moveItemInArray(item, event.previousIndex, event.currentIndex);
    } else {
      // This can be done
      console.log(item);
      this.updateStatus(item, event.container.id, event.previousContainer.id);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  updateIndex(data: string[]) {
    // Call API and send the entire Array of todo.
    console.log(data);
  }

  updateStatus(todo: any, newStatus: any, oldStatus: any) {
    // Call API to Change the Status of Moved Item
    console.log(todo, newStatus, oldStatus);
  }
}
