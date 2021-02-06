import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  private _gifs;
  @Input()
  set gifs(value) {
    console.log('input', value)
    this._gifs = value;
  }
  get gifs() {
    return this._gifs;
  }

  openModal = false;
  imageUrl = '';

  openGif(imageUrl) {
    this.openModal = true;
    this.imageUrl = imageUrl;
  }

}
