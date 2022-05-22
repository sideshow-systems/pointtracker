import { Component, Input, OnInit } from '@angular/core';
import { faAngleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/modules/enums';
import { StatsItem } from '../../interfaces';

@Component({
	selector: 'pt-stats-item',
	templateUrl: './stats-item.component.html',
	styleUrls: ['./stats-item.component.scss'],
})
export class StatsItemComponent implements OnInit {

	@Input() statItem: StatsItem = {
		lapNum: 0,
		active: false,
		resultNarrow: null,
		resultWide: null,
		scoreParty: null,
	};

	faAngleRight: IconDefinition = faAngleRight;
	teamInterface = Team;

	constructor() {}

	ngOnInit(): void {}
}
