import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFaceAngry, faFaceFrown, faFaceGrin, faFaceMeh, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

import { Team, Vote } from 'src/app/modules/enums';
import { GameResult, StatsItem } from '../../interfaces';

@Component({
	selector: 'pt-game-card',
	templateUrl: './game-card.component.html',
	styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {

	@Input() game: GameResult | null = null;

	faIconVeryGood: IconDefinition = faFaceGrin;
	faIconGood: IconDefinition = faFaceSmile;
	faIconEven: IconDefinition = faFaceMeh;
	faIconBad: IconDefinition = faFaceFrown;
	faIconVeryBad: IconDefinition = faFaceAngry;

	votes = Vote;
	team = Team;

	getVoteIcon(vote: number | undefined): IconDefinition {
		let result: IconDefinition = this.faIconEven;

		if (vote) {
			switch (vote) {
				case Vote.VERYGOOD:
					result = this.faIconVeryGood;
					break;
				case Vote.GOOD:
					result = this.faIconGood;
					break;
				case Vote.NEUTRAL:
					result = this.faIconEven;
					break;
				case Vote.BAD:
					result = this.faIconBad;
					break;
				case Vote.VERYBAD:
					result = this.faIconVeryBad;
					break;
			}
		}

		return result;
	}

	generateResult(items: StatsItem[] | undefined): string {
		let result = '-:-';

		if (items) {
			const resultNarrow = items.reduce((acc, item) => acc + (item.resultNarrow ? item.resultNarrow : 0), 0);
			const resultWide = items.reduce((acc, item) => acc + (item.resultWide ? item.resultWide : 0), 0);
			result = `${resultNarrow}:${resultWide}`;
		}

		return result;
	}
}
