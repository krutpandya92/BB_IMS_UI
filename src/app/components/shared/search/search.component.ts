import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeholder: any = 'Search...';
  @Output() searchInputChanged = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput: ElementRef | any;

  searchValue: string = '';

  constructor() { }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(600)
    ).subscribe(() => {
      this.searchInputChanged.emit(
        (this.searchValue).toLocaleLowerCase()
      )
    });
  }

  ngOnInit(): void {
  }

}
