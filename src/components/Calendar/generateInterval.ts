import { eachDayOfInterval, format, parseISO } from 'date-fns';

import { CalendarProps, DayProps } from '.';
import { getPlatformDate } from '../../utils/getPlatformDate';
import  theme from '../../styles/theme';

export function generateInterval(start: DayProps, end: DayProps){
	let interval: CalendarProps = {};

	eachDayOfInterval({ start: parseISO(start.dateString), end: parseISO(end.dateString)})
	.forEach(( item ) => {
		const date = format(getPlatformDate(item), 'yyyy-MM-dd');

		interval = {
			...interval, 
			[date]: {
				color: start.dateString === date || end.dateString === date
				? theme.colors.main
				: theme.colors.main_ligth,

				textColor: start.dateString === date || end.dateString === date
				? theme.colors.main_ligth
				: theme.colors.main,
			}
		}
	});

	return interval;
}
