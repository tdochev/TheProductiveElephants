import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LoadImageComponent } from './load-image.component';

describe('LoadImageComponent', () => {
  let component: LoadImageComponent;
  let fixture: ComponentFixture<LoadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
