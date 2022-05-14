import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointtrackerRoutes } from './enums/routes';

const routes: Routes = [
	{
		path: PointtrackerRoutes.emptyPath,
		pathMatch: 'full',
		redirectTo: `/${PointtrackerRoutes.pointtracker}`
	}, {
		path: PointtrackerRoutes.pointtracker,
		loadChildren: () => import('./modules/pointtracker/pointtracker.module').then(m => m.PointtrackerModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
})
export class AppRoutingModule {}
