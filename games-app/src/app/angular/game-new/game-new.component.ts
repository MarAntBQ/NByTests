import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../models/game';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-new',
  imports: [FormsModule, RouterModule],
  templateUrl: './game-new.component.html',
  styleUrl: './game-new.component.css'
})
export class GameNewComponent {

   game: Game = { id: 0, name: '', description: '' };
  
    constructor(
      private gameService: GameService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
    
  onSubmit(): void {
    if (this.game) {
      this.gameService.createGame(this.game).subscribe(game => {
        console.log(game);
        this.router.navigate(['/']);
      });
    }
  }
}
