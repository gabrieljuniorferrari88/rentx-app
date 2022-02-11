import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../components/BackButton';

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
import { Button } from '../../components/Button';

export function Scheduling(){
	const theme = useTheme();
	return (
		<Container>
			<Header>
				<StatusBar 
					barStyle='light-content'
					translucent
					backgroundColor='transparent'					
				/>
				<BackButton 
					onPress={() => {}}
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

			</Content>

			<Footer>
				<Button title="Confirmar" />
			</Footer>

		</Container>
	);
}