import { createSelector } from '@ngrx/store';
import { Team } from 'src/app/modules/enums';
import { Resultbox, StatsItem } from '../../interfaces';

// import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromStatsItems from '../reducers/stats-items.reducer';


export const getResultStatsItemsState = createSelector(
	fromFeature.getPointtrackerState,
	(state: fromFeature.PointtrackerState) => state.statsItems
);

export const getResultStatsItemsEntities = createSelector(
	getResultStatsItemsState,
	fromStatsItems.getStatsItemsEntities
);

export const getAllResultStatsItems = createSelector(
	getResultStatsItemsEntities,
	entities => {
		return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
	}
);

export const getResultNarrow = createSelector(
	getAllResultStatsItems,
	(data) => {
		let points = 0;
		if (data !== null) {
			points = calcSumForTeam(data, Team.NARROW);
		}

		const resultBoxNarrow: Resultbox = {
			team: Team.NARROW,
			points: points,
		};
		return resultBoxNarrow;
	}
);

export const getResultWide = createSelector(
	getAllResultStatsItems,
	(data) => {

		let points = 0;
		if (data !== null) {
			points = calcSumForTeam(data, Team.WIDE);
		}

		const resultBoxWide: Resultbox = {
			team: Team.WIDE,
			points: points,
		};
		return resultBoxWide;
	}
);

const calcSumForTeam = (data: StatsItem[], team: Team) => {
	return data.reduce((sum, item) => {
		if (item.scoreParty === team) {
			const pointsNarrow = (item.resultNarrow !== null) ? item.resultNarrow : 0;
			const pointsWide = (item.resultWide !== null) ? item.resultWide : 0;
			return sum + (item.scoreParty === Team.NARROW ? pointsNarrow : pointsWide);
		} else {
			return sum;
		}
	}, 0);
};