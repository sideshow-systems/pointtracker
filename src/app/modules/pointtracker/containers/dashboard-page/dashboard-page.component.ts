import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Team } from 'src/app/modules/enums';
import { Lap } from '../../interfaces';
import { MyTeam } from '../../interfaces/my-team.interface';
import { LocalStorageService } from '../../services';

import * as fromStore from '../../store';

@Component({
	selector: 'pt-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {

	constructor(
		private _store: Store<fromStore.PointtrackerState>,
		private _localStorageService: LocalStorageService,
	) {}

	ngOnInit(): void {

		// Check local storage for stored values and initialize them
		const storedLap = this._localStorageService.getValueByKey('lap');
		if (!storedLap) {
			const lap: Lap = {
				lapNumber: 1,
				active: true,
			};
			this._store.dispatch(fromStore.setLap({ lap }));
		}

		const storedMyTeam = this._localStorageService.getValueByKey('myteam');
		if (!storedMyTeam) {
			const myteam: MyTeam = {
				team: Team.NARROW,
			};
			this._store.dispatch(fromStore.setMyTeam({ myteam }));
		}

		// this._store.dispatch(fromStore.loadStatsItems());
		this._store.dispatch(fromStore.loadLap());
		this._store.dispatch(fromStore.loadMyTeam());
	}
}
