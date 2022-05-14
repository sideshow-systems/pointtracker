import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { PointtrackerRoutingModule } from './pointtracker-routing.module';

@NgModule({
	declarations: [
		DashboardPageComponent
	],
	imports: [
		CommonModule,
		PointtrackerRoutingModule,
	],
})
export class PointtrackerModule {}
