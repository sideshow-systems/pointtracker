import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromStatsItems from './stats-items.reducer';
import * as fromLap from './lap.reducer';
import * as fromMyTeam from './my-team.reducer';
import * as fromGames from './games.reducer';

export interface PointtrackerState {
	statsItems: fromStatsItems.StatsItemState;
	lap: fromLap.LapState;
	myTeam: fromMyTeam.MyTeamState;
	games: fromGames.GamesState;
}

export const reducers: ActionReducerMap<PointtrackerState> = {
	statsItems: fromStatsItems.reducer,
	lap: fromLap.reducer,
	myTeam: fromMyTeam.reducer,
	games: fromGames.reducer,
};

export const getPointtrackerState = createFeatureSelector<PointtrackerState>('pointtracker');
