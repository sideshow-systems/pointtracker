import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import * as fromStore from '../../store';
import { Team } from 'src/app/modules/enums';
import { Store } from '@ngrx/store';
import { Lap, StatsItem } from '../../interfaces';
import { take, takeLast } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PerformanceVoteDialogComponent } from '../performance-vote-dialog/performance-vote-dialog.component';

@Component({
	selector: 'pt-lap-point-counter',
	templateUrl: './lap-point-counter.component.html',
	styleUrls: ['./lap-point-counter.component.scss'],
})
export class LapPointCounterComponent implements OnInit {

	faIconPrev: IconDefinition = faArrowLeft;
	faIconNext: IconDefinition = faArrowRight;
	faIconPlus: IconDefinition = faPlus;
	faIconMinus: IconDefinition = faMinus;
	teamInterface = Team;

	btnPrevDisabled: boolean = false;
	btnPrevLabel: string = 'Zurück';

	btnNextDisabled: boolean = false;
	btnNextLabel: string = 'Weiter';

	lap$ = this._store.select(fromStore.getCurrentLap);

	team = Team;

	lapPoints: number = 0;
	scoreTeam: Team = Team.NARROW;

	private _currentLap!: Lap;

	constructor(
		private _store: Store<fromStore.PointtrackerState>,
		private _dialog: MatDialog,
	) {}

	ngOnInit(): void {
		this.lap$.subscribe(lap => {
			this._currentLap = lap;
			this.btnPrevDisabled = (lap.lapNumber === 1);
			// this.btnNextDisabled = (lap.lapNumber === 6);

			this.btnPrevLabel = (lap.lapNumber === 1) ? 'Zurück' : 'Durchgang ' + (lap.lapNumber - 1);
			this.btnNextLabel = (lap.lapNumber === 6) ? 'Spiel beenden' : 'Durchgang ' + (lap.lapNumber + 1);
		});
	}

	btnPrevClicked(): void {
		if (this._currentLap.lapNumber > 1) {
			this._store.dispatch(fromStore.setLap({
				lap: {
					lapNumber: this._currentLap.lapNumber - 1,
					active: true,
				}
			}));

			this._resetLapPoints();
		}
	}

	btnNextClicked(): void {
		if (this._currentLap.lapNumber < 6) {
			this._store.dispatch(fromStore.setLap({
				lap: {
					lapNumber: this._currentLap.lapNumber + 1,
					active: true,
				}
			}));

			this._resetLapPoints();
		} else {
			// Show dialog to confirm end of game
			this.showVotingDialog();
		}
	}

	showVotingDialog() {
		const dialogRef = this._dialog.open(PerformanceVoteDialogComponent);

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this._saveGame(result);
			}
		});
	}

	changeTeam(team: Team): void {
		this.scoreTeam = team;
		this._writeLapToStore();
	}

	setLapPoints(points: number): void {
		this._setLapPoints(points);
	}

	increaseLapPoints(): void {
		this._setLapPoints(this.lapPoints + 1);
	}

	decreaseLapPoints(): void {
		if (this.lapPoints > 0) {
			this._setLapPoints(this.lapPoints - 1);
		}
	}

	private _setLapPoints(points: number): void {
		this.lapPoints = points;
		this._writeLapToStore();
	}

	private _resetLapPoints(): void {
		this.lapPoints = 0;
	}

	private _writeLapToStore(): void {
		// console.log('_writeLapToStore');

		// this._store.select(fromStore.getAllStatsItems).subscribe(statsItems => {

		// 	if (statsItems) {
		// 		statsItems.forEach(statsItem => {
		// 			console.log('statsItem', statsItem);

		// 			if (this.scoreTeam === Team.NARROW) {
		// 				prevPointsWide += statsItem.resultWide || 0;
		// 			} else {
		// 				prevPointsNarrow += statsItem.resultNarrow || 0;
		// 			}
		// 		});
		// 	}
		// });

		let prevPointsNarrow = 0;
		let prevPointsWide = 0;

		const resultNarrow = (this.scoreTeam === Team.NARROW) ? this.lapPoints : prevPointsNarrow;
		const resultWide = (this.scoreTeam === Team.WIDE) ? this.lapPoints : prevPointsWide;

		const statsItem: StatsItem = {
			lapNum: this._currentLap.lapNumber,
			active: true,
			resultNarrow,
			resultWide,
			scoreParty: this.scoreTeam,
		};

		this._store.dispatch(fromStore.updateStatsItem({
			statsItem,
		}));
	}

	private _saveGame(vote: any) {
		console.log('_saveGame', vote);
		this._store.select(fromStore.getGameResult).subscribe(gameResult => {

			// Set current vote to result
			gameResult.vote = vote;

			console.log('gameResult', gameResult);

			// this._store.dispatch(fromStore.saveGame({
		});
	}
}
