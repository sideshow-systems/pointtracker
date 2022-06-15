import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
	selector: 'pt-prev-games-page',
	templateUrl: './prev-games-page.component.html',
	styleUrls: ['./prev-games-page.component.scss'],
})
export class PrevGamesPageComponent {

	faIconClose: IconDefinition = faTimes;

	games$ = this._store.select(fromStore.getPrevGames);

	constructor(
		private _bottomSheetRef: MatBottomSheetRef,
		private _store: Store<fromStore.PointtrackerState>
	) {}

	close() {
		this._bottomSheetRef.dismiss();
	}
}
