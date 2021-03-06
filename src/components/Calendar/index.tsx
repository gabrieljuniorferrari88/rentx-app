import React from 'react';
import { Feather } from '@expo/vector-icons';
import { generateInterval } from './generateInterval';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ptBR } from './localeConfig';

import {
	Calendar as CustomCalendar,
	LocaleConfig,
	CalendarProps,
} from 'react-native-calendars';


LocaleConfig.locales['pt-BR'] = ptBR;
LocaleConfig.defaultLocale = 'pt-BR';

interface DayProps {
	dateString: string;
	day: number;
	month: number;
	year: number;
	timestamp: number;
}

function Calendar({ markedDates, onDayPress }: CalendarProps){
	const theme = useTheme();

	return (
		<CustomCalendar 
			renderArrow={( direction ) =>
				<Feather 
					size={RFValue(24)}
					color={theme.colors.text}
					name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
				/>
			}

			headerStyle={{ 
				backgroundColor: theme.colors.background_secondary,
				borderBottomWidth: 0.5,
				borderBottomColor: theme.colors.text_detail,
				paddingBottom: 10,
				marginBottom: 10
			}}

			theme={{
				textDayFontFamily: theme.fonts.primary_400,
				textDayHeaderFontFamily: theme.fonts.primary_500,
				textDayFontSize: RFValue(10),
				textMonthFontFamily: theme.fonts.secondary_600,
				textMonthFontSize: RFValue(20),
				monthTextColor: theme.colors.title,
				arrowStyle: {
					marginHorizontal: -15,
				}
			}}

			firstDay={1}
			minDate={String(new Date())}
			markingType="period"
			markedDates={markedDates}
			onDayPress={onDayPress}
		/>
	);
}

export {
	Calendar,
	DayProps,
	CalendarProps,
	generateInterval
}