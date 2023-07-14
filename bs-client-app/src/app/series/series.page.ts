import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SeriesCardComponent } from './components/series-card/series-card.component';
import { SeriesService } from '../shared/services/series/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, SeriesCardComponent, ScrollingModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesPage implements OnInit {
  filteredSeries$ = this.seriesService.filteredSeries$;

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {}

  onFavoriteClick(seriesTitle: string, favorite: boolean) {
    const filter = this.seriesService.getFilter();
    let favorites = filter.favorites?.filter(
      (f) => (f === seriesTitle && favorite) || f !== seriesTitle
    );
    if (!favorites?.includes(seriesTitle) && favorite) {
      favorites = [...(favorites || []), seriesTitle];
    }
    this.seriesService.setFilter({ ...filter, favorites });
  }
}
