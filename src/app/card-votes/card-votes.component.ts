import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LikeDislikeComponent } from '../like-dislike/like-dislike.component';


@Component({
  selector: 'app-card-votes',
  templateUrl: './card-votes.component.html',
  styleUrls: ['./card-votes.component.scss'],
})
export class CardVotesComponent implements OnInit {
  superHeroes: any = [
    {
      name: 'Capitan America',
      img: 'assets/images/capitan_america.jpg',
      cardIconLike: 'royalblue',
      positiveVotes: 0,
      negativeVotes: 0,
      isLiked: false,
    },
    {
      name: 'Hombre Araña',
      img: 'assets/images/hombre_araña.jpg',
      cardIconLike: 'royalblue',
      positiveVotes: 0,
      negativeVotes: 0,
      isLiked: false,
    },
    {
      name: 'Los Increibles',
      img: 'assets/images/los_increibles.jpeg',
      cardIconLike: 'royalblue',
      positiveVotes: 0,
      negativeVotes: 0,
      isLiked: false,
    },
    {
      name: 'Super Man',
      img: 'assets/images/superman.jpg',
      cardIconLike: 'royalblue',
      positiveVotes: 0,
      negativeVotes: 0,
      isLiked: false,
    },
  ];

  constructor(
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('superHeroes')) {
      this.superHeroes = JSON.parse(localStorage.getItem('superHeroes'));
    }
  }

  changeColor(index: number, isLiked: boolean): void {
    for (let idx = 0; idx < this.superHeroes.length; idx++) {
      if (index === idx && isLiked && this.superHeroes[idx].positiveVotes < 100) {
        this.superHeroes[idx].cardIconLike = 'blue';
        this.superHeroes[idx].positiveVotes += 1;
        this.showMessageSnackBar(true);
      } else {
        this.superHeroes[idx].cardIconLike = 'royalblue';
      }
    }
    localStorage.setItem('superHeroes', JSON.stringify(this.superHeroes));
  }

  disLiked(index: number): void {
    for (let idx = 0; idx < this.superHeroes.length; idx++) {
      if (index === idx && this.superHeroes[idx].negativeVotes < 100) {
        this.superHeroes[idx].negativeVotes += 1;
        this.showMessageSnackBar(false);
      }
    }
    localStorage.setItem('superHeroes', JSON.stringify(this.superHeroes));
  }

  showMessageSnackBar(like: boolean): void {
    if (like) {
      this.snackBar.openFromComponent(LikeDislikeComponent, {
        data: {
          message: 'Tu voto ha sido registrado!',
          icon: 'thumb_up',
          color: 'blue'
        },
        duration: 3000,
      });
    } else {
      this.snackBar.openFromComponent(LikeDislikeComponent, {
        data: {
          message: 'Tu voto ha sido registrado!',
          icon: 'thumb_down',
          color: 'royalblue'
        },
        duration: 3000,
      });
    }
  }
}
