import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lap } from '../../interfaces';

@Component({
	selector: 'pt-lap-indicator',
	templateUrl: './lap-indicator.component.html',
	styleUrls: ['./lap-indicator.component.scss'],
})
export class LapIndicatorComponent {

	@Input() lap: Lap = {
		lapNumber: 0,
		active: false,
	};

	@Output() onLapClicked: EventEmitter<number> = new EventEmitter<number>();

	clickedLap(): void {
		this.onLapClicked.emit(this.lap.lapNumber);
	}
}
