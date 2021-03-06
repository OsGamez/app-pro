import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styleUrls: []
})
export class Graficas1Component implements OnInit {
  
  graphics: any = {
    'grafico1':{
      'labels': ['Con Frijoles', 'Con Natilla', 'Con Tocino'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'legend': 'El pan se come con'
    },
    'grafico2':{
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'legend': 'Entrevistados'
    },
    'grafico3':{
      'labels': ['Si', 'No'],
      'data': [95, 5],
      'type': 'doughnut',
      'legend': 'Le dan gases los frijoles'
    },
    'grafico4':{
      'labels': ['No', 'Si'],
      'data': [85, 15],
      'type': 'doughnut',
      'legend': 'Le gustan los frijoles?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
