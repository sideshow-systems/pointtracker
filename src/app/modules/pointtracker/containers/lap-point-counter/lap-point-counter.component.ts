import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import * as fromStore from '../../store';
import { Team } from 'src/app/modules/enums';
import { Store } from '@ngrx/store';

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

	lap$ = this._store.select(fromStore.getCurrentLap);

	constructor(
		private _store: Store<fromStore.PointtrackerState>
	) {}

	ngOnInit(): void {}
}
