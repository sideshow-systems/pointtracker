import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { PointtrackerRoutingModule } from './pointtracker-routing.module';
import { LapStatusComponent } from './containers/lap-status/lap-status.component';
import { ResultComponent } from './containers/result/result.component';
import { LapPointCounterComponent } from './containers/lap-point-counter/lap-point-counter.component';
import { GameStatsComponent } from './containers/game-stats/game-stats.component';
import { FooterControlsComponent } from './containers/footer-controls/footer-controls.component';
import { LapIndicatorComponent } from './components/lap-indicator/lap-indicator.component';
import { SpacerLineComponent } from './components/spacer-line/spacer-line.component';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatsItemComponent } from './components/stats-item/stats-item.component';

@NgModule({
	declarations: [
		DashboardPageComponent,
		LapStatusComponent,
		ResultComponent,
		LapPointCounterComponent,
		GameStatsComponent,
		FooterControlsComponent,
		LapIndicatorComponent,
		SpacerLineComponent,
		ResultBoxComponent,
		ButtonComponent,
		StatsItemComponent,
	],
	imports: [
		CommonModule,
		PointtrackerRoutingModule,
		FontAwesomeModule,
	],
})
export class PointtrackerModule {}
