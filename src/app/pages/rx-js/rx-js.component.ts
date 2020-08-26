import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss'],
})
export class RxJsComponent implements OnInit {
  constructor() {}
  public filterValue = '';

  public myObservable = new Subject();

  public subscription$: Subscription;

  public seconds = 0;

  ngOnInit() {
    this.eventing();
    this.filter();
    this.delay();
    this.subscriptFn();
  }

  create() {
    const observeObj = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('一秒钟之后-123');
      }, 1000);
      observer.next('456');
    });
    console.log('start');
    observeObj.subscribe((value) => {
      console.log(value);
    });
    console.log('end');
  }

  eventing() {
    const button = document.getElementById('eventLinster');
    fromEvent(button, 'click').subscribe(() => console.log('Clicked!'));
  }
  filter() {
    const filterBtn = document.getElementById('filterBtn');
    const inputVal = fromEvent(filterBtn, 'input');
    // inputVal.map((event: KeyboardEvent) => event.target.value);
  }
  delay() {
    // this.myObservable.create(() => {});
    // const filterBtn = document.getElementById('filterBtn');
    // filterBtn.delay();
  }

  // 订阅 subscription
  subscriptFn() {
    // 每200毫秒执行一次subscription
    this.subscription$ = interval(200).subscribe((value) => {
      console.log('this.seconds', value);
    });
    // 1000毫秒之后取消订阅
    setTimeout(() => this.subscription$.unsubscribe(), 1000);
  }
}
