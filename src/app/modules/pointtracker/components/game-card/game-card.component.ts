import { Component, Input } from '@angular/core';
import { GameResult } from '../../interfaces';

@Component({
	selector: 'pt-game-card',
	templateUrl: './game-card.component.html',
	styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {

	@Input() game: GameResult | null = null;

}
