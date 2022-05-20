import { createSelector } from '@ngrx/store';
import { Team } from 'src/app/modules/enums';
import { Resultbox } from '../../interfaces';

// import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromStatsItems from '../reducers/stats-items.reducer';


export const getResultStatsItemsState = createSelector(
	fromFeature.getPointtrackerState,
	(state: fromFeature.PointtrackerState) => state.statsItems
);

export const getResultStatsItemsEntities = createSelector(
	getResultStatsItemsState,
	fromStatsItems.getStatsItemsEntities
);

export const getAllResultStatsItems = createSelector(
	getResultStatsItemsEntities,
	entities => {
		return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
	}
);

export const getResultNarrow = createSelector(
	getAllResultStatsItems,
	(data) => {

		let points = 0;
		if (data !== null) {
			// TODO: do stuff here
		}

		const resultBoxNarrow: Resultbox = {
			team: Team.NARROW,
			points: points,
		};
		return resultBoxNarrow;
	}
);

export const getResultWide = createSelector(
	getAllResultStatsItems,
	(data) => {

		let points = 0;
		if (data !== null) {
			// TODO: do stuff here
		}

		const resultBoxWide: Resultbox = {
			team: Team.WIDE,
			points: points,
		};
		return resultBoxWide;
	}
);


// export const getPlannedObjectSections = createSelector(
// 	getObjectsEntities,
// 	(entities) => {
// 		const objectSections: PlannedObjectSectionInterface[] = [];

// 		const objectItems: PlannedObjectItemInterface[] = Object.keys(entities).map(id => entities[parseInt(id, 10)]);
// 		// console.log(objectItems);

// 		// Sort object items by date
// 		objectItems.sort((a, b) => {
// 			return a.date.getTime() - b.date.getTime();
// 		});
// 		// console.log(objectItems);

// 		// Group by date
// 		const groupedObjectItems = objectItems.reduce((r: any, a: any) => {
// 			const date = moment(a.date).format('YYYY-MM-DD'); // a.date.toLocaleDateString();
// 			r[date] = [...r[date] || [], a];
// 			return r;
// 		}, []);
// 		// console.log(groupedObjectItems);

// 		// Walk through grouped object items and create sections
// 		Object.keys(groupedObjectItems).forEach((date: string) => {
// 			const section: PlannedObjectSectionInterface = {
// 				date: new Date(date),
// 				title: moment(date, 'YYYY-MM-DD').format('dddd, DD. MMMM YYYY'),
// 				objects: groupedObjectItems[date]
// 			};
// 			objectSections.push(section);
// 		});
// 		// console.log(objectSections);

// 		return objectSections;
// 	}
// );

// export const getPlannedObjectHeaderDateRange = createSelector(
// 	getPlannedObjectSections,
// 	(sections) => {
// 		if (sections.length === 0) return null;

// 		return {
// 			dateFrom: sections[0].date,
// 			dateTo: sections[sections.length-1].date,
// 		};
// 	}
// );