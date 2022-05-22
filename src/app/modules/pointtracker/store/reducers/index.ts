import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromStatsItems from './stats-items.reducer';
import * as fromLap from './lap.reducer';

export interface PointtrackerState {
	statsItems: fromStatsItems.StatsItemState;
	lap: fromLap.LapState;
}

export const reducers: ActionReducerMap<PointtrackerState> = {
	statsItems: fromStatsItems.reducer,
	lap: fromLap.reducer,
};

export const getPointtrackerState = createFeatureSelector<PointtrackerState>('pointtracker');
