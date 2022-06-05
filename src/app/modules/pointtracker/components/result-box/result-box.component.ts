import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/modules/enums';
import { Resultbox } from '../../interfaces';

@Component({
	selector: 'pt-result-box',
	templateUrl: './result-box.component.html',
	styleUrls: ['./result-box.component.scss'],
})
export class ResultBoxComponent {

	@Input() myTeam: boolean | null = false;
	@Input() result: Resultbox | null = {
		team: Team.NARROW,
		points: 0,
	};
	@Output() teamChange: EventEmitter<Team> = new EventEmitter<Team>();

	faTeamIcon: IconDefinition = faUserGroup;

	teamInterface = Team;

	teamChangeTrigger() {
		if (this.result) {
			this.teamChange.emit(this.result.team);
		}
	}
}
