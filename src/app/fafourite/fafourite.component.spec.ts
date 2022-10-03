import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FafouriteComponent } from './fafourite.component';

describe('FafouriteComponent', () => {
  let component: FafouriteComponent;
  let fixture: ComponentFixture<FafouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FafouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FafouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
