import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Team } from 'src/app/modules/enums';

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

	constructor() {}

	ngOnInit(): void {}
}
