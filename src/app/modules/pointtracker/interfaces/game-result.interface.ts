import { Team, Vote } from "../../enums";
import { StatsItem } from "./stats-item.interface";

export interface GameResult {
	id: number,
	date: Date,
	myTeam: Team,
	opponentTeam: Team,
	winningTeam: Team,
	didIWin: boolean,
	vote: Vote,
	statsItems: StatsItem[],
};