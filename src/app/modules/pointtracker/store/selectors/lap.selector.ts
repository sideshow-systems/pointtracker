import { createSelector } from '@ngrx/store';

// import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromLap from '../reducers/lap.reducer';

export const getLapState = createSelector(
	fromFeature.getPointtrackerState,
	(state: fromFeature.PointtrackerState) => state.lap
);

export const getCurrentLap = createSelector(
	getLapState,
	fromLap.getLap
);