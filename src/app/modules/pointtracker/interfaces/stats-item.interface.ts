import { Team } from "../../enums";

export interface StatsItem {
	lapNum: number;
	active: boolean;
	resultNarrow: number | null;
	resultWide: number | null;
	scoreParty: Team | null
}