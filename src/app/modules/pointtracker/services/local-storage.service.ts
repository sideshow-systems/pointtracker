import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {

	persistState(key: string, value: any) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	getState(key: string): Observable<any | null> {
		const data = localStorage.getItem(key);
		return data ? of(JSON.parse(data)) : of(null);
	}
}
