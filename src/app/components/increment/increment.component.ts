import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: []
})
export class IncrementComponent implements OnInit {

  @ViewChild('lblProgress') lblprogress: ElementRef;

  @Input('name') legend: string = 'Legend';
  @Input() progress: number = 50;
  
  @Output('updateValue') changeVal: EventEmitter<number> = new EventEmitter();


  constructor() {
    console.log('legend', this.legend);
    console.log('progress', this.progress);
   }

  ngOnInit() {
    //console.log('Legend',this.legend);
    //console.log('Progress', this.progress);
  }

  onChanges(newValue: number)
  {
    //let elemHTML: any = document.getElementsByName('progress')[0];
   

    if(newValue >=100)
    {
      this.progress = 100;
    }else if(newValue<=0){
      this.progress = 0;
    }else{
      this.progress = newValue;
    }
    //elemHTML.value = Number(this.progress);
    this.lblprogress.nativeElement.value = this.progress;

    this.changeVal.emit(this.progress);
  }

  changeValue(value)
  {
    if(this.progress>= 100 && value>0){
      this.progress = 100;
      return;
    }
    if(this.progress<= 0 && value<0){
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;

    this.changeVal.emit(this.progress);

    this.lblprogress.nativeElement.focus();
  }
}
