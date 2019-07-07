import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sprite-css',
  templateUrl: './sprite-css.component.html',
  styleUrls: ['./sprite-css.component.scss']
})
export class SpriteCssComponent {
   
  @Input()
  private options: object;
  
  @Output('clicked')
  private clicked: EventEmitter<void> = new EventEmitter<void>();

  getUrl() {      
    return this.options;
  }

  ngOnChanges(changes: { [property: string] :SimpleChanges}) {
      let change: SimpleChanges = changes["options"];
      console.log(change.previousValue, change.currentValue);
  }
}
