import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarruselComponent } from './page-carrusel.component';

describe('PageCarruselComponent', () => {
  let component: PageCarruselComponent;
  let fixture: ComponentFixture<PageCarruselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCarruselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
