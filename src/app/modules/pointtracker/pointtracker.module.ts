import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointtrackerRoutingModule } from './pointtracker-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { reducers, effects } from './store';

// Containers
import * as fromContainers from './containers';

// Components
import * as fromComponents from './components';

// Services
import * as fromServices from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	declarations: [
		...fromContainers.containers,
		...fromComponents.components,
	],
	imports: [
		CommonModule,
		StoreModule.forFeature('pointtracker', reducers),
		// EffectsModule.forFeature(effects),
		PointtrackerRoutingModule,
		FontAwesomeModule,
	],
	exports: [
		...fromContainers.containers,
		...fromComponents.components,
	],
	providers: [
		...fromServices.services,
	],
})
export class PointtrackerModule {}
