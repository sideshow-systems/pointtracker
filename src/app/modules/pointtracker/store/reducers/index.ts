import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromStatsItems from './stats-items.reducer';

export interface PointtrackerState {
	statsItems: fromStatsItems.StatsItemState;
}

export const reducers: ActionReducerMap<PointtrackerState> = {
	statsItems: fromStatsItems.reducer,
};

export const getPointtrackerState = createFeatureSelector<PointtrackerState>('pointtracker');
