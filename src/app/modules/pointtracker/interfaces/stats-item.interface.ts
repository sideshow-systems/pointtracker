import { Team } from "../../enums";

export interface StatsItem {
	lapNum: number;
	resultNarrow: number | null;
	resultWide: number | null;
	scoreParty: Team | null
}