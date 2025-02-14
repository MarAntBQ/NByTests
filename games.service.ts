// filepath: /D:/Repositories/GITHUB/NByTests/my-angular-app/src/services/games.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private apiUrl = 'https://netby-api.marantbq.dev/api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  getGameById(gameId: string): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${gameId}`);
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game);
  }

  updateGame(game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/${game.id}`, game);
  }

  deleteGame(gameId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${gameId}`);
  }
}