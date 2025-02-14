import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../models/game';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game: Game = { id: 0, name: '', description: '' };

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const gameId: number = +this.route.snapshot.paramMap.get('id')!;
    this.gameService.getGameById(gameId).subscribe(game => {
      console.log(game);
      this.game = game;
    });
  }

  onSubmit(): void {
    if (this.game) {
      this.gameService.updateGame(this.game).subscribe(game => {
        console.log(game);
        this.game = game;
        this.router.navigate(['/']);
      });
    }
  }
}