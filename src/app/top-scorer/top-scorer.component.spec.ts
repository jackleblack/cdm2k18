import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScorerComponent } from './top-scorer.component';

describe('TopScorerComponent', () => {
  let component: TopScorerComponent;
  let fixture: ComponentFixture<TopScorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopScorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopScorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
