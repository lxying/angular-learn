import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnTypescriptComponent } from './pages/learn-typescript/learn-typescript.component';
import { LearnAngularComponent } from './pages/learn-angular/learn-angular.component';
// import { IndexComponent } from './pages/learn-index/index.component';
import { LearningComponent } from './pages/learning/learning.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnTypescriptComponent,
    LearnAngularComponent,
    // IndexComponent,
    LearningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
