import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NumwordPipe';
  private num = 0;

  setNum(event) {
    const num = parseInt(event.target.value, 10);
    if (!isNaN(num)) {
      this.num = num;
    }
    return;
  }
}
