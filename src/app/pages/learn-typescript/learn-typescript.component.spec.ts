import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTypescriptComponent } from './learn-typescript.component';

describe('LearnTypescriptComponent', () => {
  let component: LearnTypescriptComponent;
  let fixture: ComponentFixture<LearnTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
