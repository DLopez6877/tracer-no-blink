import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  constructor() { }
  
  @ViewChild('searchInput') searchInput: ElementRef;

  ngOnInit(): void {
  }

  search() {
    const input = this.searchInput.nativeElement.value
    const queryString = input.replace(/\s/g , "+");
    const url = `https://lmgtfy.com/?q=${queryString}&s=&qtype=search&ovr=1`;
    window.location.replace(url);
  }

  keyPressed(event: any) {
    if (event.key === "Enter" && event.isTrusted) {
      this.search();
    }
  }
}
