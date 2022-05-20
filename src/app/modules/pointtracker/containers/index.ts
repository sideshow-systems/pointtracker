import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { FooterControlsComponent } from "./footer-controls/footer-controls.component";
import { GameStatsComponent } from "./game-stats/game-stats.component";
import { LapPointCounterComponent } from "./lap-point-counter/lap-point-counter.component";
import { LapStatusComponent } from "./lap-status/lap-status.component";
import { ResultComponent } from "./result/result.component";

export const containers: any[] = [
	DashboardPageComponent,
	FooterControlsComponent,
	GameStatsComponent,
	LapPointCounterComponent,
	LapStatusComponent,
	ResultComponent,
];

export * from './dashboard-page/dashboard-page.component';
export * from './footer-controls/footer-controls.component';
export * from './game-stats/game-stats.component';
export * from './lap-point-counter/lap-point-counter.component';
export * from './lap-status/lap-status.component';
export * from './result/result.component';