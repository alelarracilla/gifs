import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output()
  onSearchGifs = new EventEmitter();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  onEnter($event) {
    this.dataService.searchGifs($event.target.value).then(d => {
      this.onSearchGifs.emit(d.data)
    });
  }

}
