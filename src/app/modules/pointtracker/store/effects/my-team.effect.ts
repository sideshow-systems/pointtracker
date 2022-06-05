import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as myTeamActions from '../actions/my-team.action';

import { map, switchMap, catchError } from 'rxjs/operators';
import { LocalStorageService } from '../../services';
import { SET_LAP } from '../actions';
import { MyTeam } from '../../interfaces/my-team.interface';

@Injectable()
export class MyTeamEffects {
	constructor(
		private actions$: Actions,
		private _localStorageService: LocalStorageService,
	) {}

	loadMyTeam$ = createEffect(
		() => this.actions$.pipe(
			ofType(myTeamActions.LOAD_MYTEAM),
			switchMap(() => this._localStorageService.getState('myteam')),
			map((myteam: MyTeam) => {
				if (myteam) {
					return myTeamActions.loadMyTeamSuccess({ myteam });
				} else {
					return myTeamActions.loadMyTeamFail({ error: 'No lap found' });
				}
			}),
			catchError((error) => of(myTeamActions.loadMyTeamFail({ error }))),
		),
	);

	setMyTeam$ = createEffect(
		() => this.actions$.pipe(
			ofType(myTeamActions.SET_MYTEAM),
			map((action: any) => {
				this._localStorageService.persistState('myteam', action.myteam);
				return myTeamActions.setMyTeamSuccess();
			})
		)
	);

}
