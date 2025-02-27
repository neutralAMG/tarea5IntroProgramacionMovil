import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyExperiencePage } from './my-experience.page';

describe('MyExperiencePage', () => {
  let component: MyExperiencePage;
  let fixture: ComponentFixture<MyExperiencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
