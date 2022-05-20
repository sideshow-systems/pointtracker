import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Lap } from '../../interfaces';
import * as fromStore from '../../store';
@Component({
	selector: 'pt-lap-status',
	templateUrl: './lap-status.component.html',
	styleUrls: ['./lap-status.component.scss'],
})
export class LapStatusComponent implements OnInit {

	lapStatus: Lap[] = [
		{ lapNumber: 1, active: false },
		{ lapNumber: 2, active: false },
		{ lapNumber: 3, active: false },
		{ lapNumber: 4, active: false },
		{ lapNumber: 5, active: false },
		{ lapNumber: 6, active: false },
	];

	constructor(
		private _store: Store<fromStore.PointtrackerState>
	) {}

	ngOnInit(): void {
		this._store.select(fromStore.getCurrentLap).subscribe(lap => {

			// Reset every active flag in lapStatus to false
			this.lapStatus.forEach(lapStatus => {
				lapStatus.active = false;

				// Set the active flag to true for the current lap
				if (lapStatus.lapNumber === lap.lapNumber) {
					lapStatus.active = true;
				}
			});
		});
	}
}
