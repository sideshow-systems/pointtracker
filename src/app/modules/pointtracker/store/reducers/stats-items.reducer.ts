import * as fromStatsItems from '../actions/stats-items.action';
import { createReducer, on } from '@ngrx/store';
import { StatsItem } from '../../interfaces';

export interface StatsItemState {
	entities: { [id: number]: StatsItem };
	loaded: boolean;
	loading: boolean;
	error: any;
}

export const initialState: StatsItemState = {
	entities: {
		1: {
			lapNum: 1,
			active: true,
			resultNarrow: null,
			resultWide: null,
			scoreParty: null,
		},
		2: {
			lapNum: 2,
			active: false,
			resultNarrow: null,
			resultWide: null,
			scoreParty: null,
		},
		3: {
			lapNum: 3,
			active: false,
			resultNarrow: null,
			resultWide: null,
			scoreParty: null,
		},
		4: {
			lapNum: 4,
			active: false,
			resultNarrow: null,
			resultWide: null,
			scoreParty: null,
		},
		5: {
			lapNum: 5,
			active: false,
			resultNarrow: null,
			resultWide: null,
			scoreParty: null,
		},
		6: {
			lapNum: 6,
			active: false,
			resultNarrow: null,
			resultWide: null,
			scoreParty: null,
		},
	},
	loaded: false,
	loading: false,
	error: null,
};

export const reducer = createReducer(
	initialState,

	// Load stats items
	on(fromStatsItems.loadStatsItems, (state) => {
		return {
			...state,
			loading: true,
		};
	}),

	// Load stats items success
	on(fromStatsItems.loadStatsItemsSuccess, (state, { statsItems }) => {
		const entities = statsItems.reduce(
			(entities: { [lapNum: number]: StatsItem }, statsItem) => {
				return {
					...entities,
					[statsItem.lapNum]: statsItem,
				};
			},
			{
				...state.entities,
			}
		);

		return {
			...state,
			loading: false,
			loaded: true,
			entities,
		};
	}),

	// Load stats items fail
	on(fromStatsItems.loadStatsItemsFail, (state, { error }) => {
		return {
			...state,
			loading: false,
			loaded: false,
			error,
		};
	}),

	// Update stats item
	on(fromStatsItems.updateStatsItem, (state, { statsItem }) => {
		const entities = {
			...state.entities,
			[statsItem.lapNum]: statsItem,
		};

		return {
			...state,
			entities,
		};
	}),
);

export const getStatsItemsEntities = (state: StatsItemState) => state.entities;
export const getStatsItemsLoading = (state: StatsItemState) => state.loading;
export const getStatsItemsLoaded = (state: StatsItemState) => state.loaded;
export const getStatsItemsFail = (state: StatsItemState) => state.error;
