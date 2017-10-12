import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  place: string;
  language: string;

  constructor() {}
  ngOnInit() {}

  search(place: string, language: string) {
    this.place = place;
    this.language = language;
    console.log(this.place, this.language);
  }
}
