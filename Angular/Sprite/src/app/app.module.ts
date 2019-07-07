import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SpriteComponent } from './sprite.component';
import { SpriteCssComponent } from './sprite-css/sprite-css.component';

@NgModule({
  declarations: [
    SpriteComponent, SpriteCssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SpriteComponent]
})
export class AppModule { }
