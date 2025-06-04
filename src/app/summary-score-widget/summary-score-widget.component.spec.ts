import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SummaryScoreWidgetComponent } from './summary-score-widget.component';
import { SummaryScoreService } from '../services/summary-score.service';
import { of } from 'rxjs';

class MockSummaryScoreService {
  getSummaryScore() { return of(50); }
}

describe('SummaryScoreWidgetComponent', () => {
  let component: SummaryScoreWidgetComponent;
  let fixture: ComponentFixture<SummaryScoreWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryScoreWidgetComponent ],
      imports: [ MatCardModule, MatProgressSpinnerModule ],
      providers: [ { provide: SummaryScoreService, useClass: MockSummaryScoreService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryScoreWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
