import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CardVotesComponent } from '../card-votes/card-votes.component';
import { LikeDislikeComponent } from '../like-dislike/like-dislike.component';
import { VotesComponent } from '../votes/votes.component';
import { RouterModule } from '@angular/router';

const materialModules = [
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatProgressBarModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [
    SideNavComponent,
    CardVotesComponent,
    LikeDislikeComponent,
    VotesComponent,
  ],
  imports: [
    CommonModule,
    ...materialModules,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ...materialModules,
    SideNavComponent,
    CardVotesComponent,
    LikeDislikeComponent,
    VotesComponent,
  ]
})
export class MaterialModule {}
