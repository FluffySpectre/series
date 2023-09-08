import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SeriesCardComponent } from './components/series-card/series-card.component';
import { SeriesService } from '../shared/services/series/series.service';
import { ISeries } from '../shared/services/series/series.service.types';
import { SafePipe } from '../shared/pipes/safe.pipe';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import packageJSON from '../../../package.json';

const SERIES_ELEMENTS_PER_PAGE = 25;

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    SeriesCardComponent,
    ScrollingModule,
    SafePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesPage {
  private seriesAmount = new BehaviorSubject<number>(0);

  filteredSeriesTotal$ = this.seriesService.filteredSeries$;
  favoriteSeriesTotal$ = this.seriesService.favoriteSeries$;

  filteredSeries$ = combineLatest([
    this.seriesService.filteredSeries$,
    this.seriesAmount,
  ]).pipe(
    map(([filteredSeries, seriesAmount]) =>
      filteredSeries.filter(
        (s, i) => i < seriesAmount + SERIES_ELEMENTS_PER_PAGE
      )
    )
  );
  favoriteSeries$ = combineLatest([
    this.seriesService.favoriteSeries$,
    this.seriesAmount,
  ]).pipe(
    map(([favoriteSeries, seriesAmount]) =>
      favoriteSeries.filter(
        (s, i) => i < seriesAmount + SERIES_ELEMENTS_PER_PAGE
      )
    )
  );

  filter$ = this.seriesService.filterAction$;

  selectedSeries?: ISeries;

  constructor(private seriesService: SeriesService) {}

  onFavoriteClick(seriesTitle: string, favorite: boolean) {
    const favorites = this.seriesService.getFavorites();
    let newFavorites = favorites?.filter(
      (f) => (f === seriesTitle && favorite) || f !== seriesTitle
    );
    if (!favorites?.includes(seriesTitle) && favorite) {
      newFavorites = [...(favorites || []), seriesTitle];
    }
    this.seriesService.setFavorite(newFavorites);
  }

  onToggleDescription(series: ISeries) {
    if (!this.selectedSeries || this.selectedSeries?.nr !== series.nr) {
      this.selectedSeries = { ...series };
    } else {
      this.selectedSeries = undefined;
    }
  }

  getCastOfSelectedSeries(): string[] {
    if (!this.selectedSeries) {
      return [];
    }
    return this.selectedSeries.cast || [];
  }

  onIonInfinite(evt: Event) {
    this.seriesAmount.next(this.seriesAmount.value + SERIES_ELEMENTS_PER_PAGE);
    setTimeout(() => (evt as InfiniteScrollCustomEvent).target.complete());
  }

  getSeriesUpdateDate(): string {
    return packageJSON.seriesUpdateDate;
  }
}
