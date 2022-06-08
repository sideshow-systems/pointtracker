import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Team } from 'src/app/modules/enums';
import { CancelGameDialogComponent } from '../../components/cancel-game-dialog/cancel-game-dialog.component';

import * as fromStore from '../../store';

@Component({
	selector: 'pt-footer-controls',
	templateUrl: './footer-controls.component.html',
	styleUrls: ['./footer-controls.component.scss'],
})
export class FooterControlsComponent implements OnInit {

	constructor(
		private _store: Store<fromStore.PointtrackerState>,
		private _dialog: MatDialog,
	) {}

	ngOnInit(): void {}

	cancelGame() {
		const dialogRef = this._dialog.open(CancelGameDialogComponent);

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this._startNewGame();
			}
		});
	}

	private _startNewGame() {

		// Reset lap
		this._store.dispatch(fromStore.setLap({ lap: { lapNumber: 1, active: true } }));

		// Reset my team
		this._store.dispatch(fromStore.setMyTeam({ myteam: { team: Team.NARROW } }));

		// Reset stats
		this._store.dispatch(fromStore.resetStatsItems());
	}
}
