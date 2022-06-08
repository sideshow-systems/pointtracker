import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-service-worker-dialog',
	templateUrl: './service-worker-dialog.component.html',
	styleUrls: ['./service-worker-dialog.component.scss'],
})
export class ServiceWorkerDialogComponent {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}
}
