import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/modules/enums';
import { StatsItem } from '../../interfaces';

@Component({
	selector: 'pt-game-stats',
	templateUrl: './game-stats.component.html',
	styleUrls: ['./game-stats.component.scss'],
})
export class GameStatsComponent implements OnInit {

	gameStats: StatsItem[] = [
		{
			lapNum: 1,
			resultNarrow: 5,
			resultWide: 0,
			scoreParty: Team.NARROW,
		},
		{
			lapNum: 2,
			resultNarrow: 5,
			resultWide: 3,
			scoreParty: Team.WIDE,
		},
		{
			lapNum: 3,
			resultNarrow: 5,
			resultWide: 11,
			scoreParty: Team.WIDE,
		},
		{
			lapNum: 4,
			resultNarrow: 8,
			resultWide: 11,
			scoreParty: Team.NARROW,
		},
		{
			lapNum: 5,
			resultNarrow: null,
			resultWide: null,
			scoreParty: null,
		},
		{
			lapNum: 6,
			resultNarrow: null,
			resultWide: null,
			scoreParty: null,
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
