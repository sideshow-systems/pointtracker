import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
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
import { PerformanceVoteDialogComponent } from './containers/performance-vote-dialog/performance-vote-dialog.component';
import { PerformanceVoteComponent } from './components/performance-vote/performance-vote.component';

@NgModule({
	declarations: [
		...fromContainers.containers,
		...fromComponents.components,
  PerformanceVoteDialogComponent,
  PerformanceVoteComponent,
	],
	imports: [
		CommonModule,
		StoreModule.forFeature('pointtracker', reducers),
		EffectsModule.forFeature(effects),
		PointtrackerRoutingModule,
		FontAwesomeModule,
		MatDialogModule,
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
