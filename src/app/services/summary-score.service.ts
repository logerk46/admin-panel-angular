import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryScoreService {

  constructor() { }

  getSummaryScore(): Observable<number> {
    return of(75); // mocked score between 0 and 100
  }
}
