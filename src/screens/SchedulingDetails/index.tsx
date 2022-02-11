import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
	Container,
	Header,
	CarImages,
	Content, 
	Details,
	Description,
	Brand,
	Name,
	Rent,
	Period,
	Price,
	Accessories,
	Footer
} from './styles';

export function SchedulingDetails(){
	const theme = useTheme();

	return (
		<Container>
			<Header> 
				<BackButton onPress={() => {}}/>
			</Header>

			<CarImages>
				<ImageSlider imagesUrl={['https://www.pngplay.com/wp-content/uploads/12/Porsche-No-Background-Clip-Art.png']} />
			</CarImages>

			<Content>
				<Details>					
					<Description>

						<Brand>Ferrari</Brand>
						<Name>812 GTS</Name>
					</Description>

					<Rent>
						<Period>Ao dia</Period>
						<Price>R$ 580</Price>
					</Rent>

				</Details>

				<Accessories>
					<Accessory name="300km/h" icon={SpeedSvg} />
					<Accessory name="3.2s" icon={AccelerationSvg} />
					<Accessory name="800 HP" icon={ForceSvg} />
					<Accessory name="Gasolina" icon={GasolineSvg} />
					<Accessory name="Auto" icon={ExchangeSvg} />
					<Accessory name="2 pessoas" icon={PeopleSvg} />
				</Accessories>

				<RentalPeriod>

					<CalendarIcon>
						<Feather
							name='calendar'
							size={RFValue(24)}
							color={theme.colors.shape}
						/>
					</CalendarIcon>

					<DateInfo>
						<DateTitle>DE</DateTitle>
						<DateValue>11/02/2022</DateValue>
					</DateInfo>

					<Feather
							name='chevron-right'
							size={RFValue(10)}
							color={theme.colors.text}
						/>

					<DateInfo>
						<DateTitle>ATÉ</DateTitle>
						<DateValue>12/02/2022</DateValue>
					</DateInfo>

				</RentalPeriod>
				
			</Content>

			<Footer>
				<Button title="Confirmar"/>
			</Footer>

		</Container>
	);
}