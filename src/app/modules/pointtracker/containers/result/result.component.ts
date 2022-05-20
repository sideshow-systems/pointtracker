import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from 'src/app/modules/enums';

import { Resultbox } from '../../interfaces';
import * as fromStore from '../../store';

@Component({
	selector: 'pt-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {

	resultBoxNarrow$: Observable<Resultbox> = this._store.select(fromStore.getResultNarrow);
	resultBoxWide$: Observable<Resultbox> = this._store.select(fromStore.getResultWide);

	constructor(
		private _store: Store<fromStore.PointtrackerState>
	) {}

	ngOnInit(): void {
		this._store.select(fromStore.getResultNarrow).subscribe(result => {
			console.log('--> result', result);
		});
	}
}
