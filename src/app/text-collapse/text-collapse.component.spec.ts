import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCollapseComponent } from './text-collapse.component';

describe('TextCollapseComponent', () => {
  let component: TextCollapseComponent;
  let fixture: ComponentFixture<TextCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
