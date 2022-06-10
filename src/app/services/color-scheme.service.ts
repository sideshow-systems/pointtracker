import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

const MODE_LIGHT = 'light';
const MODE_DARK = 'dark';
const MODE_SYSTEM = 'system';

@Injectable({
	providedIn: 'root',
})
export class ColorSchemeService {

	private renderer: Renderer2;

	// Define prefix for clearer and more readable class names in scss files
	private colorSchemePrefix = 'color-scheme-';

	mode: string = MODE_LIGHT;

	constructor(
		rendererFactory: RendererFactory2
	) {
		// Create new renderer from renderFactory, to make it possible to use renderer2 in a service
		this.renderer = rendererFactory.createRenderer(null, null);

		// Listener for change event
		this._addChangeEventListener();
	}


	private _getModeFromLocalStorage(): string | null {
		return localStorage.getItem('prefers-color-mode');
	}

	private _storeModeInLocalStorage(mode: string) {
		localStorage.setItem('prefers-color-mode', mode);
	}

	private _systemSupportsPrefersColorScheme(): boolean {
		return 'matchMedia' in window;
	}

	private _detectCurrentPrefersColorSchemeFromSystem(): string {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? MODE_DARK : MODE_LIGHT;
	}

	private _addChangeEventListener() {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e: any) => {
			if (this.mode === MODE_SYSTEM) {
				if (e.matches) {
					this.renderer.removeClass(document.body, this.colorSchemePrefix + MODE_LIGHT);
					this.renderer.addClass(document.body, this.colorSchemePrefix + MODE_DARK);
				} else {
					this.renderer.removeClass(document.body, this.colorSchemePrefix + MODE_DARK);
					this.renderer.addClass(document.body, this.colorSchemePrefix + MODE_LIGHT);
				}
			}
		});
	}

	init() {
		const modeFromLocalStorage = this._getModeFromLocalStorage();
		if (modeFromLocalStorage) {
			this.setMode(modeFromLocalStorage);
		} else {
			if (this._systemSupportsPrefersColorScheme()) {
				this.setMode(MODE_SYSTEM);
			} else {
				this.setMode(MODE_LIGHT);
			}
		}
	}

	getMode(): string {
		return this.mode;
	}

	setMode(mode: string) {
		this.mode = mode;
		this._storeModeInLocalStorage(mode);

		switch (mode) {
			case MODE_LIGHT:
				this.renderer.removeClass(document.body, this.colorSchemePrefix + MODE_DARK);
				this.renderer.addClass(document.body, this.colorSchemePrefix + MODE_LIGHT);
				break;

			case MODE_DARK:
				this.renderer.removeClass(document.body, this.colorSchemePrefix + MODE_LIGHT);
				this.renderer.addClass(document.body, this.colorSchemePrefix + MODE_DARK);
				break;

			case MODE_SYSTEM:
				const fromSystem = this._detectCurrentPrefersColorSchemeFromSystem();
				this.renderer.removeClass(document.body, this.colorSchemePrefix + MODE_LIGHT);
				this.renderer.removeClass(document.body, this.colorSchemePrefix + MODE_DARK);
				this.renderer.addClass(document.body, this.colorSchemePrefix + fromSystem);
				break;
		}
	}
}
