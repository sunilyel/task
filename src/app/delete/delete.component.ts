import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  constructor(
    private myVar: ActivatedRoute,
    private serve: TaskService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // console.log(this.myVar);

    let id = this.myVar.snapshot.params['taskId'];
    // console.log(id);
    this.serve.deleteData('task', id).subscribe((res) => {
      // console.log(res);
      this.route.navigate(['/showtask']);
    });
  }
}
