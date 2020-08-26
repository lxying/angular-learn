import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-event',
  templateUrl: './custom-event.component.html',
  styleUrls: ['./custom-event.component.scss'],
})
export class CustomEventComponent implements OnInit {
  @Input() customValue;
  @Output() customEvent = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  changeCustom() {
    this.customEvent.emit();
  }
}
