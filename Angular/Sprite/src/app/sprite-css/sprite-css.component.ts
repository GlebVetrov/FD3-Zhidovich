import { Component, Input, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'sprite-css',
  templateUrl: './sprite-css.component.html',
  styleUrls: ['./sprite-css.component.scss']
})
export class SpriteCssComponent implements OnChanges {

  @Input()
  private options: object;

  @Output()
  private clicked: EventEmitter<void> = new EventEmitter<void>();

  getUrl() {
    return this.options;
  }

  ngOnChanges(changes: { [property: string]: SimpleChanges | any}): void {
      const key = 'options';
      const change: SimpleChanges = changes[key];
  }
}
