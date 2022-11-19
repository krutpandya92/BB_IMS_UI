import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPlanSuggestionComponent } from './buy-plan-suggestion.component';

describe('BuyPlanSuggestionComponent', () => {
  let component: BuyPlanSuggestionComponent;
  let fixture: ComponentFixture<BuyPlanSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPlanSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPlanSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
