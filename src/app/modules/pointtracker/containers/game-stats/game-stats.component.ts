import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { StatsItem } from '../../interfaces';
import * as fromStore from '../../store';

@Component({
	selector: 'pt-game-stats',
	templateUrl: './game-stats.component.html',
	styleUrls: ['./game-stats.component.scss'],
})
export class GameStatsComponent {

	gameStats$: Observable<StatsItem[]> = this._store.select(fromStore.getAllStatsItems);

	constructor(
		private _store: Store<fromStore.PointtrackerState>
	) {}
}
