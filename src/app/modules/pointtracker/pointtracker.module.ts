import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PointtrackerRoutingModule } from './pointtracker-routing.module';

import { reducers, effects } from './store';

// Containers
import * as fromContainers from './containers';

// Components
import * as fromComponents from './components';

// Services
import * as fromServices from './services';

@NgModule({
	declarations: [
		...fromContainers.containers,
		...fromComponents.components,
	],
	imports: [
		CommonModule,
		StoreModule.forFeature('pointtracker', reducers),
		EffectsModule.forFeature(effects),
		PointtrackerRoutingModule,
		FontAwesomeModule,
		MatDialogModule,
		MatBottomSheetModule,
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
