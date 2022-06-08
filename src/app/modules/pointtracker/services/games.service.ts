import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameResult } from '../interfaces';

@Injectable({
	providedIn: 'root',
})
export class GamesService {

	addGameToStorage(gameResult: GameResult): Observable<GameResult> {
		const games = this.getGamesFromStorage();
		games.push(gameResult);
		localStorage.setItem('games', JSON.stringify(games));
		return of(gameResult);
	}

	getGamesFromStorage(): GameResult[] {
		const games = localStorage.getItem('games');
		if (games) {
			return JSON.parse(games);
		}
		return [];
	}

	getGames(): Observable<GameResult[]> {
		return of(this.getGamesFromStorage());
	}

}
