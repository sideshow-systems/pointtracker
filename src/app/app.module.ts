import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MetaReducer, StoreModule } from '@ngrx/store';

import { reducers, effects } from './store';

// Not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FontAwesomeModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot(effects),
		environment.production ? [] : StoreDevtoolsModule.instrument(),
	],
	providers: [],
	bootstrap: [
		AppComponent
	],
})
export class AppModule {}
