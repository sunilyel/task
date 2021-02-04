import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
