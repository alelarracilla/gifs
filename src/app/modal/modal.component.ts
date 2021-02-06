import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private _imageUrl: string;
  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  set imageUrl(value) {
    this._imageUrl = value;
  }
  get imageUrl() {
    return this._imageUrl;
  }
  @Input()
  open: boolean;
  @Output()
  openChange = new EventEmitter();
  
  closeModal() {
    this.openChange.emit(false);
  }
}
