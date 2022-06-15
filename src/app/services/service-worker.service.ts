import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiceWorkerDialogComponent } from '../components';
import { StorageService } from './storage.service';

@Injectable({
	providedIn: 'root',
})
export class ServiceWorkerService {

	private _updateDialogOpen: boolean = false;
	private _serviceWorkerEnabled: boolean = false;
	private _doneKey: string = '__sw_update_done';

	constructor(
		public dialog: MatDialog,
		private _swUpdate: SwUpdate,
		private _storageService: StorageService,
	) {
		this._serviceWorkerEnabled = environment.production && 'serviceWorker' in navigator;
	}

	init() {
		if (this._serviceWorkerEnabled) {

			// Show update dialog if update is available
			this._swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
				if (!this._updateDialogOpen && event.type === 'VERSION_READY') {
					console.log(`Downloading new app version: ${event.latestVersion.hash}`, event);
					this._showUpdateDialog();
				}
			});

			// Show update done dialog if update was already done
			if (this._storageService.getLocalStorageValueByKey(this._doneKey) === 'true') {
				this._showUpdateDoneDialog();
				this._storageService.removeLocalStorageValueByKey(this._doneKey);
			}

			this._swUpdate.activateUpdate().then(() => {
				console.log('[ServiceWorkerService] ServiceWorker updated');
			});

			this._swUpdate.checkForUpdate().then(() => {
				console.log('[ServiceWorkerService] ServiceWorker update check completed');
			});
		}
	}

	checkForUpdate(): Promise<boolean> {
		return this._swUpdate.checkForUpdate();
	}

	/**
	 * Register update interval
	 *
	 * @param intervalInSeconds Refresh interval in seconds
	 */
	registerUpdateInterval(intervalInSeconds: number) {
		if (this._serviceWorkerEnabled) {
			interval(intervalInSeconds * 1000).subscribe(() => {
				this._swUpdate.checkForUpdate().then();
			});
		}
	}

	private _showUpdateDialog() {
		console.log('[ServiceWorkerService] ServiceWorker update available');

		this._updateDialogOpen = true;

		this.dialog.open(ServiceWorkerDialogComponent, {
			width: '90vw',
			closeOnNavigation: false,
			disableClose: true,
			data: {
				title: 'Update verfügbar',
				text: 'Es ist ein Update verfügbar. Um die Funktionalität der Anwendung zu gewährleisten, ist eine Aktualisierung notwendig.',
				btnText: 'Aktualisieren',
			}
		}).afterClosed().subscribe(() => {
			this._updateDialogOpen = false;

			this._swUpdate.activateUpdate().then(() => {
				this._storageService.writeDataToLocalStorage(this._doneKey, 'true');
				window.location.reload();
			});
		});
	}

	private _showUpdateDoneDialog() {
		console.log('[ServiceWorkerService] ServiceWorker update done');

		this._updateDialogOpen = true;

		this.dialog.open(ServiceWorkerDialogComponent, {
			width: '90vw',
			closeOnNavigation: false,
			disableClose: true,
			data: {
				title: 'Update erfolgreich',
				text: 'Die Anwendung wurde erfolgreich aktualisiert. Die neue Version ist aktiv.',
				btnText: 'Ok',
			}
		}).afterClosed().subscribe(() => {
			this._updateDialogOpen = false;
		});
	}
}
