import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import * as fromStore from '../../store';
import { Team } from 'src/app/modules/enums';
import { Store } from '@ngrx/store';
import { Lap } from '../../interfaces';

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

	private _currentLap!: Lap;

	constructor(
		private _store: Store<fromStore.PointtrackerState>
	) {}

	ngOnInit(): void {
		this.lap$.subscribe(lap => {
			this._currentLap = lap;
			this.btnPrevDisabled = (lap.lapNumber === 1);
			this.btnNextDisabled = (lap.lapNumber === 6);

			this.btnPrevLabel = (lap.lapNumber === 1) ? 'Zurück' : 'Durchgang ' + (lap.lapNumber - 1);
			this.btnNextLabel = (lap.lapNumber === 6) ? 'Weiter' : 'Durchgang ' + (lap.lapNumber + 1);
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
		}
	}
}
