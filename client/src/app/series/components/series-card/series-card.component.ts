import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISeries } from '../../../shared/services/series/series.service.types';
import { IonicModule } from '@ionic/angular';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, NgIf, NgClass, SafePipe],
})
export class SeriesCardComponent {
  @Input()
  series!: ISeries;

  @Input()
  selected: boolean = false;

  @Output()
  favoriteClick: EventEmitter<boolean> = new EventEmitter();

  @Output()
  toggleDescription: EventEmitter<ISeries> = new EventEmitter();

  loadCoverFailed = false;

  onFavoriteClick() {
    if (this.series.favorite === undefined) {
      this.series.favorite = false;
    }
    this.series.favorite = !this.series.favorite;
    this.favoriteClick.emit(this.series.favorite);
  }

  onToggleDescription() {
    this.toggleDescription.emit(this.series);
  }
}
