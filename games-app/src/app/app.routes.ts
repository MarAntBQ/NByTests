import { Routes } from '@angular/router';
import { GameListingComponent } from './angular/game-listing/game-listing.component';
import { GameNewComponent } from './angular/game-new/game-new.component';
import { GameDetailComponent } from './angular/game-detail/game-detail.component';

export const routes: Routes = [
  {  
    path: '',
    component: GameListingComponent
  },
  {
    path: 'add-new',
    component: GameNewComponent
  },
  {
    path: 'edit/:id',
    component: GameDetailComponent
  }
];
