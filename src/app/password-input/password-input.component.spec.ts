import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputComponent } from './password-input.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;
  let fixture: ComponentFixture<PasswordInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, FontAwesomeModule],
      declarations: [ PasswordInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be by default in hidden state', () => {
    expect(component.isVisible).toEqual(false);
  });

  it('should go to cleartext', () => {
    component.toggle();
    expect(component.isVisible).toEqual(true);
  });

  it('should go to hidden', () => {
    component.isVisible = true;
    component.toggle();
    expect(component.isVisible).toEqual(false);
  });

  it('should go to hidden with hide method (#234)', () => {
    component.isVisible = true;
    component.hide();
    expect(component.isVisible).toEqual(false);
  });


});
