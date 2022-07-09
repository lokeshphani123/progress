import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioluminescenetParkHomeComponent } from './bioluminescenet-park-home.component';

describe('BioluminescenetParkHomeComponent', () => {
  let component: BioluminescenetParkHomeComponent;
  let fixture: ComponentFixture<BioluminescenetParkHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioluminescenetParkHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioluminescenetParkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
