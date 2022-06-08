import { createSelector } from '@ngrx/store';

// import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromStatsItems from '../reducers/stats-items.reducer';

import * as fromLapSelector from '../selectors/lap.selector';


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

export const getStatsItemsEntity = (id: number) => createSelector(
	getStatsItemsEntities,
	entities => entities[id]
);

export const nextBtnDisabled = createSelector(
	getAllStatsItems,
	fromLapSelector.getCurrentLap,
	(statsItems, currentLap) => {

		if (currentLap.lapNumber < 6) return false;

		return !(statsItems.every(statsItem => statsItem.scoreParty !== null));
	}
);