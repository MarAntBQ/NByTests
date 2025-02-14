import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-listing',
  imports: [],
  templateUrl: './game-listing.component.html',
  styleUrl: './game-listing.component.css'
})
export class GameListingComponent implements OnInit {

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      console.log(games);
    });
  }
}
