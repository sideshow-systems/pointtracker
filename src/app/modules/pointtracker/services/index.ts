import { GamesService } from "./games.service";
import { LocalStorageService } from "./local-storage.service";

export const services: any[] = [
	GamesService,
	LocalStorageService,
];

export * from './games.service';
export * from './local-storage.service';
