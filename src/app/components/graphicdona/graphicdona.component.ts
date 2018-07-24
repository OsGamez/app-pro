import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphicdona',
  templateUrl: './graphicdona.component.html',
  styleUrls: []
})
export class GraphicdonaComponent implements OnInit {

 @Input('chartLabels') public doughnutChartLabels:string[] = [];
 @Input('chartData') public doughnutChartData:number[] = [];
 @Input('chartType') public doughnutChartType:string = '';

  constructor() { }

  ngOnInit() {
  }

}
