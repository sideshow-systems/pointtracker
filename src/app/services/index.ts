import { ServiceWorkerService } from "./service-worker.service";
import { StorageService } from "./storage.service";

export const services: any[] = [
	ServiceWorkerService,
	StorageService,
];

export * from './service-worker.service';
export * from './storage.service';
