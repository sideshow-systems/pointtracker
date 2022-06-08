import { GamesEffects } from "./games.effect";
import { LapEffects } from "./lap.effect";
import { MyTeamEffects } from "./my-team.effect";
import { StatsItemsEffects } from "./stats-items.effect";

export const effects: any[] = [
	GamesEffects,
	LapEffects,
	MyTeamEffects,
	StatsItemsEffects,
];

export * from './games.effect';
export * from './lap.effect';
export * from './my-team.effect';
export * from './stats-items.effect';