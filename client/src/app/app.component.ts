import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SeriesService } from './shared/services/series/series.service';
import { map } from 'rxjs';
import packageJSON from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  version: string = packageJSON.version;

  genres$ = this.seriesService.series$.pipe(
    map((series) => {
      let genres: string[] = [];
      for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series[i].genres.length; j++) {
          genres.push(series[i].genres[j]);
        }
      }
      return [...new Set(genres)];
    }),
    map((genres) => genres.sort())
  );
  languages$ = this.seriesService.series$.pipe(
    map((series) => {
      let languages: string[] = [];
      for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series[i].languages.length; j++) {
          languages.push(series[i].languages[j]);
        }
      }
      return [...new Set(languages)];
    }),
    map((languages) => languages.sort())
  );

  activeFilter$ = this.seriesService.filterAction$;
  private dampTimeout: number = 0;

  constructor(private seriesService: SeriesService) {
    const activeFilterStorage = localStorage.getItem('activeFilter');
    if (activeFilterStorage) {
      this.seriesService.setFilter(JSON.parse(activeFilterStorage));
    }

    const favoritesStorage = localStorage.getItem('favorites');
    if (favoritesStorage) {
      this.seriesService.setFavorite(JSON.parse(favoritesStorage));
    }
  }

  onFilterQueryInput(evt: any) {
    window.clearTimeout(this.dampTimeout);
    this.dampTimeout = window.setTimeout(
      () => this.seriesService.setFilter({ query: evt.detail.value }),
      200
    );
  }

  onGenreFilterChange(evt: any) {
    this.seriesService.setFilter({ genre: evt.detail.value });
  }

  onLanguageFilterChange(evt: any) {
    this.seriesService.setFilter({ language: evt.detail.value });
  }

  onFSK18Change(evt: any) {
    this.seriesService.setFilter({ fsk18: evt.detail.checked });
  }

  onFavoritesChange(evt: any) {
    const checked = evt.detail.checked;
    this.seriesService.setFilter({ showFavorites: checked });
  }

  onSortingChange(evt: any) {
    this.seriesService.setFilter({ sortAfterProperty: evt.detail.value });
  }

  onSortingDescendChange(evt: any) {
    this.seriesService.setFilter({ sortDescending: evt.detail.checked });
  }

  clearFilter(filter: string) {
    if (filter === 'query') {
      this.seriesService.setFilter({ query: '' });
    } else if (filter === 'genre') {
      this.seriesService.setFilter({ genre: [] });
    } else if (filter === 'language') {
      this.seriesService.setFilter({ language: [] });
    }
  }
}
