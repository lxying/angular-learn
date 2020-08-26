import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnTypescriptComponent } from './pages/learn-typescript/learn-typescript.component';
import { LearnAngularComponent } from './pages/learn-angular/learn-angular.component';
import { RxJsComponent } from './pages/rx-js/rx-js.component';

const routes: Routes = [
  {
    path: 'ts',
    component: LearnTypescriptComponent,
  },
  {
    path: 'angular',
    component: LearnAngularComponent,
  },
  {
    path: 'rxJs',
    component: RxJsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
