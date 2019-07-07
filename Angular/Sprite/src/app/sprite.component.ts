import { Component } from '@angular/core';

interface IOptions {
  url: string, 
    'offset-x': string, 
    'offset-y': string, 
    width: string, 
    height: string
}

@Component({
  selector: 'sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent {  

  private options: IOptions = {
    url: 'http://fe.it-academy.by/Examples/cards2.png', 
    'offset-x': '0px', 
    'offset-y': '0px', 
    width: '145px', 
    height: '195px'
  }

  getOptions():object {
    return this.options;
  }

  setNewOptions():void {
    this.options = {
      url: 'http://fe.it-academy.by/Examples/cards2.png', 
      'offset-x': '-145px', 
      'offset-y': '-195px', 
      width: '145px', 
      height: '195px'
    }
  }
}
