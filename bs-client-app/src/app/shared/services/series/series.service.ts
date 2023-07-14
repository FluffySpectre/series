import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISeries, ISeriesFilter } from './series.service.types';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  series$ = this.http.get<ISeries[]>('assets/series/series.json');

  private filterAction = new BehaviorSubject<ISeriesFilter>({
    query: '',
    genre: [],
    language: '',
    favorites: [],
    showFavorites: false,
  });
  filterAction$ = this.filterAction.asObservable();

  filteredSeries$ = combineLatest([this.series$, this.filterAction]).pipe(
    // filter((series) =>
    //   genreToFilter.some((genre) => series.genres.includes(genre))
    // ),
    map(([series, filterAction]) => {
      // text filter
      let filteredSeries = series.filter((s) =>
        filterAction.query
          ? s.title.toLowerCase().indexOf(filterAction.query.toLowerCase()) >
              -1 ||
            s.description
              .toLowerCase()
              .indexOf(filterAction.query.toLowerCase()) > -1 ||
            s.productionYears
              .toLowerCase()
              .indexOf(filterAction.query.toLowerCase()) > -1 ||
            s.genres
              .map((g) => g.toLowerCase())
              .indexOf(filterAction.query.toLowerCase()) > -1 ||
            s.languages
              .map((l) => l.toLowerCase())
              .indexOf(filterAction.query.toLowerCase()) > -1
          : true
      );
      // genre filter
      if (filterAction.genre && filterAction.genre.length > 0) {
        filteredSeries = filteredSeries.filter((s) =>
          filterAction.genre?.every((genre) => s.genres.includes(genre))
        );
      }
      // language filter
      if (filterAction.language) {
        filteredSeries = filteredSeries.filter((s) =>
          s.languages.includes(filterAction.language || '')
        );
      }
      // favorites filter
      if (filterAction.showFavorites) {
        filteredSeries = filteredSeries.filter((s) =>
          filterAction.favorites?.includes(s.title)
        );
      }
      if (filterAction.favorites) {
        filteredSeries = filteredSeries.map((s) => {
          return { ...s, favorite: filterAction.favorites?.includes(s.title) };
        });
      }

      return filteredSeries;
    })
    // map(([series, filterAction]) => series)
  );

  constructor(private http: HttpClient) {}

  setFilter(filter: ISeriesFilter) {
    const newFilter = { ...this.getFilter(), ...filter };
    this.filterAction.next(newFilter);
    localStorage.setItem('activeFilter', JSON.stringify(newFilter));
  }

  getFilter(): ISeriesFilter {
    return this.filterAction.value;
  }
}
