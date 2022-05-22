import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// import { objectActions } from '../actions/objects.action';

import { map, switchMap, catchError } from 'rxjs/operators';
import { SET_LAP } from '../actions';

@Injectable()
export class LapEffects {
	constructor(
		private actions$: Actions,
	) {}

	// setLap$ = createEffect(
	// 	() => this.actions$.pipe(
	// 		ofType(SET_LAP),
	// 		map((action: pizzaActions.CreatePizzaSuccess) => action.payload),

	// loadObjects$ = createEffect(
	// 	() => this.actions$.pipe(
	// 		ofType(LOAD_OBJECTS),
	// 		switchMap((action: any) => {
	// 			return this._objectsService
	// 				.getObjects(action.dateFrom, action.dateTo)
	// 				.pipe(
	// 					map(objects => loadObjectsSuccess({ objects })),
	// 					catchError(async (error) => loadObjectsFail({ error })),
	// 				);
	// 		})
	// 	)
	// );

}
