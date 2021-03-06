import { createAction, props } from '@ngrx/store';
import { Lap } from '../../interfaces';


// Load lap
export const LOAD_LAP = '[Dashboard] Load Lap';
export const LOAD_LAP_FAIL = '[Dashboard] Load Lap Fail';
export const LOAD_LAP_SUCCESS = '[Dashboard] Load Lap Success';

export const SET_LAP = '[Dashboard] Set Lap';
export const SET_LAP_SUCCESS = '[Dashboard] Set Lap Success';

export const loadLap = createAction(
	LOAD_LAP
);

export const loadLapFail = createAction(
	LOAD_LAP_FAIL,
	props<{ error: any }>()
);

export const loadLapSuccess = createAction(
	LOAD_LAP_SUCCESS,
	props<{ lap: Lap }>()
);

export const setLap = createAction(
	SET_LAP,
	props<{ lap: Lap }>()
);

export const setLapSuccess = createAction(
	SET_LAP_SUCCESS,
);