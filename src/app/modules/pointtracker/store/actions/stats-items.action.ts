import { createAction, props } from '@ngrx/store';
import { StatsItem } from '../../interfaces';


// Load stats items
export const LOAD_STATS_ITEMS = '[Dashboard] Load Stats Items';
export const LOAD_STATS_ITEMS_FAIL = '[Dashboard] Load Stats Items Fail';
export const LOAD_STATS_ITEMS_SUCCESS = '[Dashboard] Load Stats Items Success';

export const UPDATE_STATS_ITEM = '[Dashboard] Update Stats Item';
export const UPDATE_STATS_ITEM_SUCCESS = '[Dashboard] Update Stats Item Success';

export const loadStatsItems = createAction(
	LOAD_STATS_ITEMS
);

export const loadStatsItemsFail = createAction(
	LOAD_STATS_ITEMS_FAIL,
	props<{ error: any }>()
);

export const loadStatsItemsSuccess = createAction(
	LOAD_STATS_ITEMS_SUCCESS,
	props<{ statsItems: StatsItem[] }>()
);

export const updateStatsItem = createAction(
	UPDATE_STATS_ITEM,
	props<{ statsItem: StatsItem }>()
);

export const updateStatsItemSuccess = createAction(
	UPDATE_STATS_ITEM_SUCCESS,
);