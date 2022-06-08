import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MetaReducer, StoreModule } from '@ngrx/store';

import { reducers, effects } from './store';

// Not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';
import { ServiceWorkerService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatDialogModule } from '@angular/material/dialog';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

// Components
import * as fromComponents from './components';

// Services
import * as fromServices from './services';

@NgModule({
	declarations: [
		AppComponent,
		...fromComponents.components,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		MatDialogModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot(effects),
		environment.production ? [] : StoreDevtoolsModule.instrument(),
		BrowserAnimationsModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000'
		}),
	],
	providers: [
		...fromServices.services,
	],
	bootstrap: [
		AppComponent
	],
})
export class AppModule {
	constructor(private _serviceWorkerService: ServiceWorkerService) {
		// Initialize service worker update
		this._serviceWorkerService.init();
		this._serviceWorkerService.registerUpdateInterval(
			environment.serviceWorkerUpdateInterval
		);
	}
}
