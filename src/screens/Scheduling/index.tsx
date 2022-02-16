import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import {
	Calendar, 
	DayProps, 
	generateInterval,
	CalendarProps
} from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';

import {
	Container,
	Header,
	Title,
	RentalPeriod,
	DateInfo,
	DateTitle,
	DateValue,
	Content,
	Footer,
} from './styles';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format, parseISO } from 'date-fns';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod {
	startFormatted: string;
	endFormatted: string;
}

interface Params {
	car: CarDTO;
}

export function Scheduling(){
	const [ lastSelectDate, setLastSelectDate ] = useState<DayProps>({} as DayProps);
	const [ markedDates, setMarkedDates ] = useState<CalendarProps>({} as CalendarProps);
	const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriod>({} as RentalPeriod);

	const theme = useTheme();
	const navigation = useNavigation();
	const route = useRoute();
	const { car } = route.params as Params;

	function handleConfirmRental() {
		navigation.navigate('SchedulingDetails', { car });
	}

	function handleBack() {
		navigation.goBack();
	}

	function handleChangeDate(date: DayProps) {
		let start = !lastSelectDate.timestamp ? date : lastSelectDate;
		let end = date;

		if(start.timestamp > end.timestamp) {
			start = end;
			end = start;
		}

		setLastSelectDate(end);
		const interval = generateInterval(start, end);

		setMarkedDates(interval);

		const firstDate = Object.keys(interval)[0];
		const endDate = Object.keys(interval)[Object.keys(interval).length -1];

		setRentalPeriod({
			startFormatted: format(getPlatformDate(parseISO(firstDate)), 'dd/MM/yyyy'),
			endFormatted: format(getPlatformDate(parseISO(endDate)), 'dd/MM/yyyy'),
		})

	}

	return (
		<Container>
			<Header>
				<StatusBar 
					barStyle='light-content'
					translucent
					backgroundColor='transparent'					
				/>
				<BackButton 
					onPress={handleBack}
					color={theme.colors.shape}
				/>

				<Title>
					Escolha uma{'\n'}
					data de início e{'\n'}
					fim do aluguel
				</Title>

				<RentalPeriod>
					<DateInfo>
						<DateTitle>DE</DateTitle>
						<DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
					</DateInfo>

					<ArrowSvg />

					<DateInfo>
						<DateTitle>ATÉ</DateTitle>
						<DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
					</DateInfo>

				</RentalPeriod>
			</Header>

			<Content>
				<Calendar 	
					markedDates={markedDates}
					onDayPress={handleChangeDate}
				/>
			</Content>

			<Footer>
				<Button title="Confirmar" onPress={handleConfirmRental}/>
			</Footer>

		</Container>
	);
}