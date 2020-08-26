import {
  Component,
  OnInit,
  SimpleChanges,
  Input,
  OnChanges,
} from "@angular/core";

@Component({
  selector: "app-lifecycle",
  templateUrl: "./lifecycle.component.html",
  styleUrls: ["./lifecycle.component.scss"],
})
export class LifecycleComponent implements OnInit, OnChanges {
  @Input() value;
  @Input() list;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      console.log(
        "changes:" + propName,
        changes[propName],
        "currentValue: " + changes[propName].currentValue,
        "previousValue: " + changes[propName].previousValue
      );
    }
  }
}
