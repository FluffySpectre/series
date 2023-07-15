import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SeriesCardComponent } from './components/series-card/series-card.component';
import { SeriesService } from '../shared/services/series/series.service';
import { ISeries } from '../shared/services/series/series.service.types';
import { SafePipe } from '../shared/pipes/safe.pipe';

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
  filteredSeries$ = this.seriesService.filteredSeries$;
  favoriteSeries$ = this.seriesService.favoriteSeries$;
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
}
