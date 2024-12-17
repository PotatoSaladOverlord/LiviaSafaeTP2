import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFilmComponent } from './no-film.component';

describe('NoFilmComponent', () => {
  let component: NoFilmComponent;
  let fixture: ComponentFixture<NoFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoFilmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
