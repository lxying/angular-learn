// import { LearningComponent } from './pages/learning/learning.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnTypescriptComponent } from './pages/learn-typescript/learn-typescript.component';
import { LearnAngularComponent } from './pages/learn-angular/learn-angular.component';
import { LearningComponent } from './pages/learning/learning.component';

const routes: Routes = [
  {
    path: 'ts',
    component: LearningComponent,
  },
  {
    path: 'ts',
    component: LearnTypescriptComponent,
  },
  {
    path: 'angular',
    component: LearnAngularComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
