import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointtrackerRoutes } from './enums/routes';
import { CustomSerializer } from './store';

import {
	StoreRouterConnectingModule,
	RouterStateSerializer,
} from '@ngrx/router-store';

const routes: Routes = [
	{
		path: PointtrackerRoutes.emptyPath,
		pathMatch: 'full',
		redirectTo: `/${PointtrackerRoutes.pointtracker}/${PointtrackerRoutes.ptDashboard}`
	}, {
		path: PointtrackerRoutes.pointtracker,
		loadChildren: () => import('./modules/pointtracker/pointtracker.module').then(m => m.PointtrackerModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		StoreRouterConnectingModule.forRoot(),
	],
	exports: [
		RouterModule
	],
	providers: [
		{ provide: RouterStateSerializer, useClass: CustomSerializer }
	]
})
export class AppRoutingModule {}
