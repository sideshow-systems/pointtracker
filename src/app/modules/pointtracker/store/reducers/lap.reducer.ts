import * as fromLap from '../actions/lap.action';
import { createReducer, on } from '@ngrx/store';
import { Lap } from '../../interfaces';

export interface LapState {
	lap: Lap;
	loaded: boolean;
	loading: boolean;
	error: any;
}

export const initialState: LapState = {
	lap: {
		lapNumber: 1,
		active: true,
	},
	loaded: false,
	loading: false,
	error: null,
};

export const reducer = createReducer(
	initialState,

	// Load lap
	on(fromLap.loadLap, (state) => {
		return {
			...state,
			loading: true,
		};
	}),

	// Load lap success
	on(fromLap.loadLapSuccess, (state, { lap }) => {
		return {
			...state,
			loading: false,
			loaded: true,
			lap: lap,
		};
	}),

	// Load lap fail
	on(fromLap.loadLapFail, (state, { error }) => {
		return {
			...state,
			loading: false,
			loaded: false,
			error,
		};
	}),

	// Set lap
	on(fromLap.setLap, (state, { lap }) => {
		return {
			...state,
			lap,
			// lap: {
			// 	lapNumber: lap.lapNumber,
			// 	active: lap.active,
			// }
		};
	}),
);

export const getLap = (state: LapState) => state.lap;
export const getLapLoading = (state: LapState) => state.loading;
export const getLapLoaded = (state: LapState) => state.loaded;
export const getLapFail = (state: LapState) => state.error;
