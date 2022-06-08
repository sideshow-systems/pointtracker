import { createSelector } from '@ngrx/store';
import { Team, Vote } from 'src/app/modules/enums';
import { GameResult, Resultbox, StatsItem } from '../../interfaces';

// import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromStatsItems from '../reducers/stats-items.reducer';

import * as fromMyTeamSelector from '../selectors/my-team.selector';
import * as fromStatsItemsSelector from '../selectors/stats-items.selector';

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

export const getGameResult = createSelector(
	getResultNarrow,
	getResultWide,
	fromMyTeamSelector.getMyTeam,
	fromStatsItemsSelector.getAllStatsItems,
	(narrow, wide, myTeamSelector, statsItems) => {
		// console.log('getGameResult', narrow, wide, myTeamSelector, statsItems);

		// Date
		const date = new Date();

		// Id
		const id = parseInt(`${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getHours()}${date.getMinutes()}`, 10)

		// My team
		const myTeam = myTeamSelector.team;

		// Opponent team
		const opponentTeam = (myTeam === Team.NARROW) ? Team.WIDE : Team.NARROW;

		// Winning team
		const winningTeam = (narrow.points > wide.points) ? Team.NARROW : Team.WIDE;

		// Did I win
		const didIWin = (winningTeam === myTeam);

		const result: GameResult = {
			id,
			date,
			myTeam,
			opponentTeam,
			winningTeam,
			didIWin,
			vote: Vote.NEUTRAL,
			statsItems,
		};
		return result;
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