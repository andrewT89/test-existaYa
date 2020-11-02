import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardVotesComponent } from './card-votes/card-votes.component';
import { VotesComponent } from './votes/votes.component';

const routes: Routes = [
    {
        path: 'cards-votes',
        component: CardVotesComponent
    },
    {
        path: 'votes',
        component: VotesComponent
    },
    {
        path: '',
        redirectTo: '/cards-votes',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}