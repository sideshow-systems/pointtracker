import { Component, EventEmitter, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFaceAngry, faFaceFrown, faFaceGrin, faFaceMeh, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'pt-performance-vote',
	templateUrl: './performance-vote.component.html',
	styleUrls: ['./performance-vote.component.scss'],
})
export class PerformanceVoteComponent {

	@Output() voteEmitter: EventEmitter<number> = new EventEmitter<number>();

	faIconVeryGood: IconDefinition = faFaceGrin;
	faIconGood: IconDefinition = faFaceSmile;
	faIconEven: IconDefinition = faFaceMeh;
	faIconBad: IconDefinition = faFaceFrown;
	faIconVeryBad: IconDefinition = faFaceAngry;

	private _selected: number = 3;

	vote(vote: number): void {
		this._selected = vote;
		this.voteEmitter.emit(vote);
	}

	isActive(vote: number): boolean {
		return this._selected === vote;
	}
}
