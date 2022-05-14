import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { PointtrackerRoutingModule } from './pointtracker-routing.module';
import { LapStatusComponent } from './containers/lap-status/lap-status.component';
import { ResultComponent } from './containers/result/result.component';
import { LapPointCounterComponent } from './containers/lap-point-counter/lap-point-counter.component';
import { GameStatsComponent } from './containers/game-stats/game-stats.component';
import { FooterControlsComponent } from './containers/footer-controls/footer-controls.component';

@NgModule({
	declarations: [
		DashboardPageComponent,
		LapStatusComponent,
		ResultComponent,
		LapPointCounterComponent,
		GameStatsComponent,
		FooterControlsComponent
	],
	imports: [
		CommonModule,
		PointtrackerRoutingModule,
	],
})
export class PointtrackerModule {}
