import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, animate, style } from '@angular/animations';
interface Item {
  name: string;
  singer: string;
  id: number;
}

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
})
export class ComponentComponent implements OnInit {
  @ViewChild('animateEle', { static: true }) animateEle: ElementRef;

  public trackByItems = [
    { name: '稻香', singer: '周杰伦', id: 1 },
    { name: '千里之外', singer: '费玉清', id: 2 },
  ];
  public customEventValue = '自定义事件';

  constructor(private builder: AnimationBuilder) {}

  ngOnInit() {}

  trackBy(index: number, item: Item): number {
    return item.id;
  }

  makeAnimation() {
    console.log(this.animateEle.nativeElement);
    const animationPlayer = this.builder.build([
      style({ with: 0 }),
      animate(1000, style({ width: '100px' })),
    ]);
    let ele = this.animateEle.nativeElement;
    animationPlayer.create(ele).play();
  }

  onCustomEvent(event) {
    this.customEventValue = '修改之后';
  }
}
