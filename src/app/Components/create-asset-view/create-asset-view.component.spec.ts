import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetViewComponent } from './create-asset-view.component';

describe('CreateAssetViewComponent', () => {
  let component: CreateAssetViewComponent;
  let fixture: ComponentFixture<CreateAssetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAssetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
