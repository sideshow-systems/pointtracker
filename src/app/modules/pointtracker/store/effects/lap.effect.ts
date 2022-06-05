import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

// import { objectActions } from '../actions/objects.action';
import * as lapActions from '../actions/lap.action';

import { map, switchMap, catchError } from 'rxjs/operators';
import { LocalStorageService } from '../../services';
import { SET_LAP } from '../actions';

@Injectable()
export class LapEffects {
	constructor(
		private actions$: Actions,
		private _localStorageService: LocalStorageService,
	) {}

	loadLap$ = createEffect(
		() => this.actions$.pipe(
			ofType(lapActions.LOAD_LAP),
			switchMap(() => this._localStorageService.getState('lap')),
			map((lap) => {
				if (lap) {
					return lapActions.loadLapSuccess({ lap });
				} else {
					return lapActions.loadLapFail({ error: 'No lap found' });
				}
			}),
			catchError((error) => of(lapActions.loadLapFail({ error }))),
		),
	);

	setLap$ = createEffect(
		() => this.actions$.pipe(
			ofType(SET_LAP),
			map((action: any) => {
				this._localStorageService.persistState('lap', action.lap);
				return lapActions.setLapSuccess();
			})
		)
	);

}
