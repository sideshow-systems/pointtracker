import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as gamesActions from '../actions/games.action';

import { GamesService } from '../../services';
import { GameResult } from '../../interfaces';

@Injectable()
export class GamesEffects {
	constructor(
		private actions$: Actions,
		private _gamesService: GamesService,
	) {}

	loadGames$ = createEffect(
		() => this.actions$.pipe(
			ofType(gamesActions.loadGames),
			switchMap(() => this._gamesService.getGames()),
			map((gameResult: GameResult[]) => gamesActions.loadGamesSuccess({ gameResult })),
			catchError(error => of(gamesActions.loadGamesFail({ error })))
		),
	);

	createGame$ = createEffect(
		() => this.actions$.pipe(
			ofType(gamesActions.createGame),
			switchMap((action) => this._gamesService.addGameToStorage(action.gameResult)),
			map((gameResult) => gamesActions.createGameSuccess({ gameResult })),
		),
	);

}
