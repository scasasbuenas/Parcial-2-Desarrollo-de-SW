import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];
  selected: Boolean = false;
  selectedSerie!: Serie;
  cantTotalEp: number = 0;
  calificacionPromedio: number = 0;

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series; });
  }

  showDetail(serie: any) {
    this.selectedSerie = serie;
  }

  onSelected(series: Serie): void {
    this.selected = true;
    this.selectedSerie = series;
    console.log(series);
  }


  ngOnInit() {
    this.getSeries();
  }

}
