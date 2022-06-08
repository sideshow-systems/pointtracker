import { createAction, props } from '@ngrx/store';
import { GameResult } from '../../interfaces';


// Load games
export const LOAD_GAMES = '[Dashboard] Load Games';
export const LOAD_GAMES_FAIL = '[Dashboard] Load Games Fail';
export const LOAD_GAMES_SUCCESS = '[Dashboard] Load Games Success';

export const CREATE_GAME = '[Dashboard] Create Game';
export const CREATE_GAME_FAIL = '[Dashboard] Create Game Fail';
export const CREATE_GAME_SUCCESS = '[Dashboard] Create Game Success';


export const loadGames = createAction(
	LOAD_GAMES
);

export const loadGamesFail = createAction(
	LOAD_GAMES_FAIL,
	props<{ error: any }>()
);

export const loadGamesSuccess = createAction(
	LOAD_GAMES_SUCCESS,
	props<{ gameResult: GameResult[] }>()
);

export const createGame = createAction(
	CREATE_GAME,
	props<{ gameResult: GameResult }>()
);

export const createGameFail = createAction(
	CREATE_GAME_FAIL,
	props<{ error: any }>()
);

export const createGameSuccess = createAction(
	CREATE_GAME_SUCCESS,
	props<{ gameResult: GameResult }>()
);