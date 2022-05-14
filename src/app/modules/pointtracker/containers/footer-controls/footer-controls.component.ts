import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'pt-footer-controls',
	templateUrl: './footer-controls.component.html',
	styleUrls: ['./footer-controls.component.scss'],
})
export class FooterControlsComponent implements OnInit {

	faIconPrev: IconDefinition = faArrowLeft;
	faIconNext: IconDefinition = faArrowRight;

	constructor() {}

	ngOnInit(): void {}
}
