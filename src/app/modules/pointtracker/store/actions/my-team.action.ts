import { createAction, props } from '@ngrx/store';
import { MyTeam } from '../../interfaces/my-team.interface';


// Load my team
export const LOAD_MYTEAM = '[Dashboard] Load My Team';
export const LOAD_MYTEAM_FAIL = '[Dashboard] Load My Team Fail';
export const LOAD_MYTEAM_SUCCESS = '[Dashboard] Load My Team Success';

export const SET_MYTEAM = '[Dashboard] Set My Team';
export const SET_MYTEAM_SUCCESS = '[Dashboard] Set My Team Success';

export const loadMyTeam = createAction(
	LOAD_MYTEAM
);

export const loadMyTeamFail = createAction(
	LOAD_MYTEAM_FAIL,
	props<{ error: any }>()
);

export const loadMyTeamSuccess = createAction(
	LOAD_MYTEAM_SUCCESS,
	props<{ myteam: MyTeam }>()
);

export const setMyTeam = createAction(
	SET_MYTEAM,
	props<{ myteam: MyTeam }>()
);

export const setMyTeamSuccess = createAction(
	SET_MYTEAM_SUCCESS,
);