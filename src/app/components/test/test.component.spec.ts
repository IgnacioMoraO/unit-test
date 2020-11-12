import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestService } from 'src/app/services/test.service';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Function tests', () => {
  let componente: TestComponent;
  const servicio = new TestService();
  beforeEach(() => {
    componente = new TestComponent(servicio);
  });
  it('ReturnFive test', () => {
    const resp = componente.returnFive();
    spyOn(servicio, 'returnFiveService').and.returnValue(5);
    expect(resp).toBe(5);
  });

});
