import { Component, OnInit } from '@angular/core';
import { SummaryScoreService } from '../services/summary-score.service';

@Component({
  selector: 'app-summary-score-widget',
  templateUrl: './summary-score-widget.component.html',
  styleUrls: ['./summary-score-widget.component.scss']
})
export class SummaryScoreWidgetComponent implements OnInit {
  score = 0;

  constructor(private summaryScoreService: SummaryScoreService) {}

  ngOnInit(): void {
    this.summaryScoreService.getSummaryScore().subscribe(value => this.score = value);
  }
}
