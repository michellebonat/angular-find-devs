import { Component, OnInit, Input } from '@angular/core';
import { SearchUsersService } from '../search-users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  place: string;
  language: string;

  results: any[] = []; // Holds the data coming from the service
  selected: boolean = false; // Flag to check if a user is clicked or not
  selectedUser: any; // Selected user details
  error_text: string = ""; // Error reporing text to the end user

  constructor(private searchService: SearchUsersService) {}
  ngOnInit() {}

  search(place: string, language: string) {
    this.selected = false;
    this.error_text = "";
    if (place || language) {
      this.place = place;
      this.language = language;
      this.searchService.getUsersByPlaceAndLanguage(place, language).subscribe(
        users => {
          this.results = users;
        },
        error => {
          this.results = [];
          this.error_text = "Drat! No Users found with those parameters. Please try again with a different combination.";
          console.error(error);
        }
      )
    }
  }
}
