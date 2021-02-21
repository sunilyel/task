import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private link = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getdata(path) {
    let finalLink = this.link + path;
    return this.http.get(finalLink);
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.link + 'task');
  }

  updateTaskStatus(id, data) {
    return this.editData('task', id, data);
  }

  postData(path, data) {
    let finalLink = this.link + path;
    return this.http.post(finalLink, data);
  }
  deleteData(path, id) {
    // http://localhost:3000/2
    let finalLink = this.link + path + '/' + id;
    // console.log(finalLink);
    return this.http.delete(finalLink);
  }
  editData(path, id, data) {
    // http://localhost:3000/2
    let finalLink = this.link + path + '/' + id;
    // console.log(finalLink);
    return this.http.put(finalLink, data);
  }
}

export interface Task {
  title: string;
  details: string;
  status: TaskStatus;
  id: number;
}

export enum TaskStatus {
  completed = 'Completed',
  inProgress = 'In-progress',
  open = 'Open',
}
