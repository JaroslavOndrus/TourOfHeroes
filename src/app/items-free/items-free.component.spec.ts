import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFreeComponent } from './items-free.component';

describe('ItemsFreeComponent', () => {
  let component: ItemsFreeComponent;
  let fixture: ComponentFixture<ItemsFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
