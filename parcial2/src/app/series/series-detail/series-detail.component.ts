import { Component, OnInit, Input } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {
  selectedSerie!: Serie;
  selected = false;

  @Input() seriesDetail!: Serie;

  constructor() { }

  onSelected(serie: Serie): void {
    this.selected = true;
    this.selectedSerie = serie;
  }

  ngOnInit() {
  }

}
