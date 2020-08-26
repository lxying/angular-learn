// app.module.ts用来描述应用的组件如何组装在一起
import { BrowserModule } from '@angular/platform-browser'; // 浏览器解析的模块
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AnimationBuilder } from '@angular/animations';
import { AppComponent } from './app.component';
import { LearnTypescriptComponent } from './pages/learn-typescript/learn-typescript.component';
import { LearnAngularComponent } from './pages/learn-angular/learn-angular.component';
import { LearnAngularModule } from './pages/learn-angular/learn-angular.module';
import { RxJsComponent } from './pages/rx-js/rx-js.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnTypescriptComponent,
    LearnAngularComponent,
    RxJsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LearnAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
