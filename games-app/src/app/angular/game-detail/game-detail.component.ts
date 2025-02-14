import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../models/game';


@Component({
  selector: 'app-game-detail',
  imports: [],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent implements OnInit {

  game: Game | undefined;

  constructor(private gameService: GameService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const gameId: string = this.route.snapshot.paramMap.get('id')!;
    this.gameService.getGameById(gameId).subscribe(game => {
      console.log(game);
      this.game = game;
    });
  }

}
