import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import packageJson from '../../../../../../package.json';

@Component({
	selector: 'app-help-and-info-page',
	templateUrl: './help-and-info-page.component.html',
	styleUrls: ['./help-and-info-page.component.scss'],
})
export class HelpAndInfoPageComponent {

	appVersion: string = packageJson.version;

	constructor(
		public bottomSheetRef: MatBottomSheetRef,
	) {}

	close() {
		this.bottomSheetRef.dismiss();
	}
}
