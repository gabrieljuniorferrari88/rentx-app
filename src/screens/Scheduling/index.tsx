import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

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

export function Scheduling(){
	const [ lastSelectDate, setLastSelectDate ] = useState<DayProps>({} as DayProps);
	const [ markedDates, setMarkedDates ] = useState<CalendarProps>({} as CalendarProps);

	const theme = useTheme();
	const navigation = useNavigation();

	function handleConfirmRental() {
		navigation.navigate('SchedulingDetails');
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
						<DateValue selected={false}>11/02/2022</DateValue>
					</DateInfo>

					<ArrowSvg />

					<DateInfo>
						<DateTitle>ATÉ</DateTitle>
						<DateValue selected={false}>12/02/2022</DateValue>
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