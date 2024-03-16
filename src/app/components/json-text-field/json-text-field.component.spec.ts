import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTextFieldComponent } from './json-text-field.component';

describe('JsonTextFieldComponent', () => {
  let component: JsonTextFieldComponent;
  let fixture: ComponentFixture<JsonTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonTextFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
