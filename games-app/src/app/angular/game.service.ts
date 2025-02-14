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

  getGameById(gameId: number) {
    const url = `${this.gamesUrl}/${gameId}`;
    return this.http.get<Game>(url);
  }

  createGame(game: Game) {
    return this.http.post<Game>(this.gamesUrl, game, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  updateGame(game: Game) {
    console.log(game);  
    const url = `${this.gamesUrl}/${game.id}`;
    return this.http.put<Game>(url, game, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteGame(gameId: number): Observable<void> {
    const url = `${this.gamesUrl}/${gameId}`;
    return this.http.delete<void>(url, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
