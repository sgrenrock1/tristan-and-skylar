import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedGalleryComponent } from './expanded-gallery.component';

describe('ExpandedGalleryComponent', () => {
  let component: ExpandedGalleryComponent;
  let fixture: ComponentFixture<ExpandedGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandedGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
