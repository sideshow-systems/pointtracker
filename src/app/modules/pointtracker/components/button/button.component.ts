import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'pt-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

	@Input() disabled: boolean = false;
	@Input() showIcon: boolean = false;
	@Input() faIcon: IconDefinition = faArrowRight;
	@Input() inverted: boolean = false;
	@Input() iconOnRightSide: boolean = false;
	@Input() inactive: boolean = false;

	constructor() {}

	ngOnInit(): void {}
}
