import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssetRequestsComponent } from './user-asset-requests.component';

describe('UserAssetRequestsComponent', () => {
  let component: UserAssetRequestsComponent;
  let fixture: ComponentFixture<UserAssetRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAssetRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssetRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
