import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointtrackerRoutes } from 'src/app/enums/routes';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';

const routes: Routes = [
	{
		path: PointtrackerRoutes.emptyPath,
		pathMatch: 'full',
		redirectTo: `/${PointtrackerRoutes.pointtracker}/${PointtrackerRoutes.ptDashboard}`
	}, {
		path: PointtrackerRoutes.ptDashboard,
		component: DashboardPageComponent,
		data: {
			title: 'Dashboard'
		}
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	],
})
export class PointtrackerRoutingModule {}
