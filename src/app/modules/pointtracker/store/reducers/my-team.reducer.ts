import * as fromMyteam from '../actions/my-team.action';
import { createReducer, on } from '@ngrx/store';
import { MyTeam } from '../../interfaces/my-team.interface';
import { Team } from 'src/app/modules/enums';

export interface MyTeamState {
	myteam: MyTeam;
	loaded: boolean;
	loading: boolean;
	error: any;
}

export const initialState: MyTeamState = {
	myteam: {
		team: Team.NARROW,
	},
	loaded: false,
	loading: false,
	error: null,
};

export const reducer = createReducer(
	initialState,

	// Load myteam
	on(fromMyteam.loadMyTeam, (state) => {
		return {
			...state,
			loading: true,
		};
	}),

	// Load myteam success
	on(fromMyteam.loadMyTeamSuccess, (state, { myteam }) => {
		return {
			...state,
			loading: false,
			loaded: true,
			myteam: myteam,
		};
	}),

	// Load myteam fail
	on(fromMyteam.loadMyTeamFail, (state, { error }) => {
		return {
			...state,
			loading: false,
			loaded: false,
			error,
		};
	}),

	// Set myteam
	on(fromMyteam.setMyTeam, (state, { myteam }) => {
		return {
			...state,
			myteam,
		};
	}),

	// Set myteam success
	on(fromMyteam.setMyTeamSuccess, (state) => {
		return {
			...state,
		};
	}),
);

export const getMyteam = (state: MyTeamState) => state.myteam;
export const getMyteamLoading = (state: MyTeamState) => state.loading;
export const getMyteamLoaded = (state: MyTeamState) => state.loaded;
export const getMyteamFail = (state: MyTeamState) => state.error;
