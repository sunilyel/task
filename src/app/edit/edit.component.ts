import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  public receiveData: any;
  constructor(
    private myVar: ActivatedRoute,
    private serve: TaskService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // console.log(this.myVar.snapshot.params);
    let editTask = this.myVar.snapshot.params['taskId'];
    // console.log(editTask);
    this.serve.getdata('task/' + editTask).subscribe((res) => {
      // console.log(res);
      this.receiveData = res;
    });
  }
  edit(rec1, rec2, rec3) {
    // console.log(rec1.value, rec2.value, rec3.value);
    let obj = {
      title: rec1.value,
      details: rec2.value,
      status: rec3.value,
    };
    let editTask = this.myVar.snapshot.params['taskId'];
    this.serve.editData('task', editTask, obj).subscribe((res) => {
      // console.log(res);
      this.route.navigate(['/showtask']);
    });
  }
}
