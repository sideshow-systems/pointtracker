import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/modules/enums';
import { Resultbox } from '../../interfaces';

@Component({
	selector: 'pt-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {

	resultBoxNarrow: Resultbox = {
		team: Team.NARROW,
		points: 5,
	}

	resultBoxWide: Resultbox = {
		team: Team.WIDE,
		points: 3,
	}


	constructor() {}

	ngOnInit(): void {}
}
