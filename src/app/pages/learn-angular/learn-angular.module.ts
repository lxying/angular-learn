import { NgModule, SimpleChanges } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';
import { ComponentComponent } from './component/component.component';
import { CommonModule } from '@angular/common';
import { CustomEventComponent } from './../../components/custom-event/custom-event.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const COMPONENTS = [
  LifecycleComponent,
  ComponentComponent,
  CustomEventComponent,
];
@NgModule({
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, FormsModule],
  exports: [...COMPONENTS, FormsModule],
  declarations: [...COMPONENTS],
})
export class LearnAngularModule {}
