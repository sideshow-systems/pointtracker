import { Component, OnInit } from '@angular/core';
import { Lap } from '../../interfaces';

@Component({
	selector: 'pt-lap-status',
	templateUrl: './lap-status.component.html',
	styleUrls: ['./lap-status.component.scss'],
})
export class LapStatusComponent implements OnInit {

	lapStatus: Lap[] = [
		{ lapNumber: 1, active: true },
		{ lapNumber: 2, active: false },
		{ lapNumber: 3, active: false },
		{ lapNumber: 4, active: false },
		{ lapNumber: 5, active: false },
		{ lapNumber: 6, active: false },
	];

	constructor() {}

	ngOnInit(): void {}
}
