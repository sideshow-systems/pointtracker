import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import packageJson from '../../../../../../package.json';

@Component({
	selector: 'pt-help-and-info-page',
	templateUrl: './help-and-info-page.component.html',
	styleUrls: ['./help-and-info-page.component.scss'],
})
export class HelpAndInfoPageComponent {

	faIconClose: IconDefinition = faTimes;
	appVersion: string = packageJson.version;

	constructor(
		private _bottomSheetRef: MatBottomSheetRef,
	) {}

	close() {
		this._bottomSheetRef.dismiss();
	}
}
