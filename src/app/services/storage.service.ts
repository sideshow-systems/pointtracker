import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class StorageService {

	private readonly documentIsAccessible: boolean;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		@Inject(PLATFORM_ID) private platformId: InjectionToken<object>
	) {
		this.documentIsAccessible = isPlatformBrowser(this.platformId);
	}

	/**
	 * Get cookie Regular Expression
	 *
	 * @param name Cookie name
	 * @returns property RegExp
	 */
	private static getCookieRegExp(name: string): RegExp {
		const escapedName: string = name.replace(/([[\]{}()|=;+?,.*^$])/gi, '\\$1');
		return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
	}

	private static safeDecodeURIComponent(encodedURIComponent: string): string {
		try {
			return decodeURIComponent(encodedURIComponent);
		} catch {
			// Probably it is not uri encoded. return as is
			return encodedURIComponent;
		}
	}

	/**
	 * Return `true` if document is accessible, otherwise return `false`
	 *
	 * @param name Cookie name
	 * @returns boolean - whether cookie with specified name exists
	 */
	checkCookie(name: string): boolean {
		if (!this.documentIsAccessible) {
			return false;
		}
		name = encodeURIComponent(name);
		const regExp: RegExp = StorageService.getCookieRegExp(name);
		return regExp.test(this.document.cookie);
	}

	/**
	 * Set cookie
	 *
	 * @param name
	 * @param value
	 * @param expires
	 * @returns
	 */
	setCookie(name: string, value: string, expires?: number | Date, path?: string, domain?: string): void {
		if (!this.documentIsAccessible) {
			return;
		}

		let cookieString: string = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';

		if (expires) {
			if (typeof expires === 'number') {
				const dateExpires: Date = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
				cookieString += 'expires=' + dateExpires.toUTCString() + ';';
			} else {
				cookieString += 'expires=' + expires.toUTCString() + ';';
			}
		}

		if (path) {
			cookieString += 'path=' + path + ';';
		} else {
			cookieString += 'path=/;';
		}

		if (domain) {
			cookieString += 'domain=' + domain + ';';
		}

		this.document.cookie = cookieString;
	}

	/**
	 * Get cookie by name
	 *
	 * @param name Cookie name
	 * @returns property value
	 */
	getCookie(name: string): string {
		if (this.documentIsAccessible && this.checkCookie(name)) {
			name = encodeURIComponent(name);

			const regExp: RegExp = StorageService.getCookieRegExp(name);
			const result: any = regExp.exec(this.document.cookie);

			return result[1] ? StorageService.safeDecodeURIComponent(result[1]) : '';
		} else {
			return '';
		}
	}

	/**
	 * Delete cookie
	 *
	 * @param name
	 */
	deleteCookie(name: string): void {
		if (!this.documentIsAccessible) {
			return;
		}
		const expiresDate = new Date('Thu, 01 Jan 1970 00:00:01 GMT');
		this.setCookie(name, '', expiresDate);
	}

	/**
	 * Write data to session storage
	 *
	 * @param key Key
	 * @param value Value
	 */
	writeDataToSessionStorage(key: string, value: string): void {
		sessionStorage.setItem(key, value);
	}

	/**
	 * Get session value by key
	 *
	 * @param key Key
	 * @returns The value as string or null
	 */
	getSessionValueByKey(key: string): string | null {
		return sessionStorage.getItem(key);
	}

	/**
	 * Remove session value by key
	 *
	 * @param key Key
	 */
	removeSessionValueByKey(key: string): void {
		sessionStorage.removeItem(key);
	}

	/**
	 * Write data to local storage
	 *
	 * @param key Key
	 * @param value Value
	 */
	writeDataToLocalStorage(key: string, value: string): void {
		localStorage.setItem(key, value);
	}

	/**
	 * Get local storage value by key
	 *
	 * @param key Key
	 * @returns The value as string or null
	 */
	getLocalStorageValueByKey(key: string): string | null {
		return localStorage.getItem(key);
	}

	/**
	 * Remove local storage value by key
	 *
	 * @param key Key
	 */
	removeLocalStorageValueByKey(key: string): void {
		localStorage.removeItem(key);
	}
}
