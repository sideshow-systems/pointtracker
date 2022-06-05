import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import * as statsItemsActions from '../actions/stats-items.action';

import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { LocalStorageService } from '../../services';
import { SET_LAP } from '../actions';
import { MyTeam } from '../../interfaces/my-team.interface';
import * as fromStore from '../../store';
import { StatsItem } from '../../interfaces';

@Injectable()
export class StatsItemsEffects {
	constructor(
		private actions$: Actions,
		private _store: Store<fromStore.PointtrackerState>,
		private _localStorageService: LocalStorageService,
	) {}

	loadStatsItems$ = createEffect(
		() => this.actions$.pipe(
			ofType(statsItemsActions.LOAD_STATS_ITEMS),
			switchMap(() => this._localStorageService.getState('statsitems')),
			map((statsItems: StatsItem[]) => {
				if (statsItems) {
					return statsItemsActions.loadStatsItemsSuccess({ statsItems });
				} else {
					return statsItemsActions.loadStatsItemsFail({ error: 'No stats items found' });
				}
			}),
			catchError((error) => of(statsItemsActions.loadStatsItemsFail({ error }))),
		),
	);

	updateStatsItem$ = createEffect(
		() => this.actions$.pipe(
			ofType(statsItemsActions.UPDATE_STATS_ITEM),
			switchMap(() => this._store.select(fromStore.getAllStatsItems)),
			map((statsItems: StatsItem[]) => {
				this._localStorageService.persistState('statsitems', statsItems);
				return statsItemsActions.updateStatsItemSuccess();
			})
		)
	);

}
