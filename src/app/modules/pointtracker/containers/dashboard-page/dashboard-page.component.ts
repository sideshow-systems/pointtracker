import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
	selector: 'pt-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {

	constructor(
		private _store: Store<fromStore.PointtrackerState>
	) {}

	ngOnInit(): void {
		// this._store.dispatch(fromStore.loadStatsItems());
		this._store.dispatch(fromStore.loadLap());
	}
}
