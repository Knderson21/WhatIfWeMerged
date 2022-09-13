import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungchadComponent } from './youngchad.component';

describe('YoungchadComponent', () => {
  let component: YoungchadComponent;
  let fixture: ComponentFixture<YoungchadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoungchadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungchadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
