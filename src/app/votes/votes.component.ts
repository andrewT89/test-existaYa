import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  superHeroes: any[];

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('superHeroes')) {
      this.superHeroes = JSON.parse(localStorage.getItem('superHeroes'));
    }
  }

}
