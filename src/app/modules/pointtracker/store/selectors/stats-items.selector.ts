import { createSelector } from '@ngrx/store';
import { Team } from 'src/app/modules/enums';
import { Resultbox } from '../../interfaces';

// import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromStatsItems from '../reducers/stats-items.reducer';


export const getStatsItemsState = createSelector(
	fromFeature.getPointtrackerState,
	(state: fromFeature.PointtrackerState) => state.statsItems
);

export const getStatsItemsEntities = createSelector(
	getStatsItemsState,
	fromStatsItems.getStatsItemsEntities
);

export const getAllStatsItems = createSelector(
	getStatsItemsEntities,
	entities => {
		return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
	}
);
