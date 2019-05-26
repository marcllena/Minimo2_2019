import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationListPage } from './station-list.page';

describe('StationListPage', () => {
  let component: StationListPage;
  let fixture: ComponentFixture<StationListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
