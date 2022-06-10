import { ColorSchemeService } from "./color-scheme.service";
import { ServiceWorkerService } from "./service-worker.service";
import { StorageService } from "./storage.service";

export const services: any[] = [
	ColorSchemeService,
	ServiceWorkerService,
	StorageService,
];

export * from './color-scheme.service';
export * from './service-worker.service';
export * from './storage.service';
