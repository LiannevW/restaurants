import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSevenComponent } from './top-seven.component';

describe('TopSevenComponent', () => {
  let component: TopSevenComponent;
  let fixture: ComponentFixture<TopSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
