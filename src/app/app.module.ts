import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MetaReducer, StoreModule } from '@ngrx/store';

import { reducers } from './store';

// Not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

// This would be done dynamically with webpack for builds
const environment = {
	development: true,
	production: false
};

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
		environment.development ? StoreDevtoolsModule.instrument() : [],
	],
	providers: [],
	bootstrap: [
		AppComponent
	],
})
export class AppModule {}
