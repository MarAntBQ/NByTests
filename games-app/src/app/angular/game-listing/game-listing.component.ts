import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../models/game';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-game-listing',
  imports: [RouterModule],
  templateUrl: './game-listing.component.html',
  styleUrl: './game-listing.component.css'
})
export class GameListingComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      console.log(games);
      this.games = games;
    });
  }
}
