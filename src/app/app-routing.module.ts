import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SampleComponent } from './sample/sample.component';
import { ShowTaskComponent } from './show-task/show-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'showtask', component: ShowTaskComponent },
  { path: 'delete/:taskId', component: DeleteComponent },
  { path: 'edit/:taskId', component: EditComponent },
  { path: 'sample', component: SampleComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
