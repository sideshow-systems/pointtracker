import { Component, Input } from '@angular/core';
import { Team } from 'src/app/modules/enums';
import { Resultbox } from '../../interfaces';

@Component({
	selector: 'pt-result-box',
	templateUrl: './result-box.component.html',
	styleUrls: ['./result-box.component.scss'],
})
export class ResultBoxComponent {

	@Input() result: Resultbox = {
		team: Team.NARROW,
		points: 0,
	};

	teamInterface = Team;
}
