import { createReducer, on } from '@ngrx/store';
import { GameResult } from '../../interfaces';
import * as fromGames from '../actions/games.action';

export interface GamesState {
	entities: { [id: number]: GameResult };
	loaded: boolean;
	loading: boolean;
	error: any;
}

export const initialState: GamesState = {
	entities: {},
	loaded: false,
	loading: false,
	error: null,
};

export const reducer = createReducer(
	initialState,

	// Load games
	on(fromGames.loadGames, (state) => {
		return {
			...state,
			loading: true,
		};
	}),

	// Load games success
	on(fromGames.loadGamesSuccess, (state, { gameResult }) => {
		const entities = gameResult.reduce(
			(entities: { [id: number]: GameResult }, gameResult) => {
				return {
					...entities,
					[gameResult.id]: gameResult,
				};
			},
			{
				...state.entities,
			}
		);

		return {
			...state,
			loading: false,
			loaded: true,
			entities,
		};
	}),

	// Load games fail
	on(fromGames.loadGamesFail, (state, { error }) => {
		return {
			...state,
			loading: false,
			loaded: false,
			error,
		};
	}),

	// Create game success
	on(fromGames.createGameSuccess, (state, { gameResult }) => {
		const entities = {
			...state.entities,
			[gameResult.id]: gameResult,
		};

		return {
			...state,
			entities,
		};
	}),

);

export const getGamesEntities = (state: GamesState) => state.entities;
export const getGamesLoading = (state: GamesState) => state.loading;
export const getGamesLoaded = (state: GamesState) => state.loaded;
export const getGamesFail = (state: GamesState) => state.error;
