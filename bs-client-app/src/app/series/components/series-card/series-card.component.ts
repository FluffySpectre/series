import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISeries } from '../../../shared/services/series/series.service.types';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, SafePipe],
})
export class SeriesCardComponent implements OnInit {
  @Input()
  series!: ISeries;

  @Output()
  favoriteClick: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onFavoriteClick() {
    if (this.series.favorite === undefined) {
      this.series.favorite = false;
    }
    this.series.favorite = !this.series.favorite;
    this.favoriteClick.emit(this.series.favorite);
  }
}
