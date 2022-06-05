import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from 'src/app/modules/enums';

import { Resultbox } from '../../interfaces';
import { MyTeam } from '../../interfaces/my-team.interface';
import * as fromStore from '../../store';

@Component({
	selector: 'pt-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.scss'],
})
export class ResultComponent {

	resultBoxNarrow$: Observable<Resultbox> = this._store.select(fromStore.getResultNarrow);
	resultBoxWide$: Observable<Resultbox> = this._store.select(fromStore.getResultWide);

	isMyTeamNarrow$: Observable<boolean> = this._store.select(fromStore.isMyTeamNarrow);
	isMyTeamWide$: Observable<boolean> = this._store.select(fromStore.isMyTeamWide);

	constructor(
		private _store: Store<fromStore.PointtrackerState>
	) {}

	onTeamChange(team: Team) {
		const myTeam: MyTeam = {
			team: team,
		};
		this._store.dispatch(fromStore.setMyTeam({ myteam: myTeam }));
	}
}
