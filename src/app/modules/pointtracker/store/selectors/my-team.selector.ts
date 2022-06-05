import { createSelector } from '@ngrx/store';
import { Team } from 'src/app/modules/enums';
import { MyTeam } from '../../interfaces/my-team.interface';

// import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromMyTeam from '../reducers/my-team.reducer';


export const getMyTeamState = createSelector(
	fromFeature.getPointtrackerState,
	(state: fromFeature.PointtrackerState) => state.myTeam
);

export const getMyTeam = createSelector(
	getMyTeamState,
	(state: fromMyTeam.MyTeamState) => state.myteam
);

export const isMyTeamNarrow = createSelector(
	getMyTeam,
	(myTeam: MyTeam) => myTeam.team === Team.NARROW
);

export const isMyTeamWide = createSelector(
	getMyTeam,
	(myTeam: MyTeam) => myTeam.team === Team.WIDE
);