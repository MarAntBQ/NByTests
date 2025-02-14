import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesUrl = "https://netby-api.marantbq.dev/api/games";

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  getGameById(gameId: string) {
    const url = `${this.gamesUrl}/${gameId}`;
    return this.http.get<Game>(url);
  }

  createGame(game: Game) {
    throw new Error("Not implemented yet");
  }

  updateGame(game: Game) {
    throw new Error("Not implemented yet");
  }

  deleteGame(gameId: string) {
    throw new Error("Not implemented yet");
  }
}
