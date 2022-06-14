import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faInfo, faTableList } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Team } from 'src/app/modules/enums';
import { CancelGameDialogComponent } from '../../components/cancel-game-dialog/cancel-game-dialog.component';

import * as fromStore from '../../store';
import { HelpAndInfoPageComponent } from '../help-and-info-page/help-and-info-page.component';
import { PrevGamesPageComponent } from '../prev-games-page/prev-games-page.component';

@Component({
	selector: 'pt-footer-controls',
	templateUrl: './footer-controls.component.html',
	styleUrls: ['./footer-controls.component.scss'],
})
export class FooterControlsComponent implements OnInit {

	faHelpIcon: IconDefinition = faInfo;
	faPrevGamesIcon: IconDefinition = faTableList;

	constructor(
		private _store: Store<fromStore.PointtrackerState>,
		private _dialog: MatDialog,
		private _bottomSheet: MatBottomSheet,
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

	showHelp() {
		this._bottomSheet.open(HelpAndInfoPageComponent, {
			backdropClass: 'pt-bottom-sheet-backdrop',
			panelClass: 'pt-bottom-sheet-panel',
		});
	}

	showPrevGames() {
		this._bottomSheet.open(PrevGamesPageComponent, {
			backdropClass: 'pt-bottom-sheet-backdrop',
			panelClass: 'pt-bottom-sheet-panel',
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
