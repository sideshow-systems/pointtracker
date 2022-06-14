import { createSelector } from '@ngrx/store';

// import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromGames from '../reducers/games.reducer';

export const getGamesState = createSelector(
	fromFeature.getPointtrackerState,
	(state: fromFeature.PointtrackerState) => state.games
);

export const getGamesEntities = createSelector(
	getGamesState,
	fromGames.getGamesEntities,
);

export const getAllGames = createSelector(
	getGamesEntities,
	entities => {
		return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
	}
);
