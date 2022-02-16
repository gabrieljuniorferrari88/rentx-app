import React, {useEffect, useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { CarDTO } from '../../dtos/CarDTO';

import { getAccessoryeIcon } from '../../utils/getAccessoryeIcon';

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
	RentalPeriod,
	CalendarIcon,
	DateInfo,
	DateTitle,
	DateValue,
	RentalPrice,
	RentalPriceLabel,
	RentalPriceDetails,
	RentalPriceQuota,
	RentalPriceTotal,
	Footer
} from './styles';
import { format, parseISO } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';

interface Params {
	car: CarDTO;
	dates: string[];
}

interface RentalPeriod {
	start: string;
	end: string;
}

export function SchedulingDetails(){
	const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

	const theme = useTheme();
	const navigation = useNavigation();
	const route = useRoute();
	const { car, dates } = route.params as Params;

	const rentalTotalDiarias = Number(dates.length);
	const rentalTotal = Number(rentalTotalDiarias * car.rent.price);

	function handleConfirmRental() {
		navigation.navigate('SchedulingComplete');
	}

	function handleBack() {
		navigation.goBack();
	}

	useEffect(() => {
		setRentalPeriod({
			start: format(getPlatformDate(parseISO(dates[0])), 'dd/MM/yyyy'),
			end: format(getPlatformDate(parseISO(dates[dates.length - 1])), 'dd/MM/yyyy'),
		})
	},[])

	return (
		<Container>
			<Header> 
				<BackButton onPress={handleBack}/>
			</Header>

			<CarImages>
				<ImageSlider imagesUrl={car.photos} />
			</CarImages>

			<Content>
				<Details>					
					<Description>

						<Brand>{car.brand}</Brand>
						<Name>{car.name}</Name>
					</Description>

					<Rent>
						<Period>{car.rent.period}</Period>
						<Price>R$ {car.rent.price}</Price>
					</Rent>

				</Details>

				<Accessories>
					{
						car.accessories.map(accessory => (
							<Accessory 
								key={accessory.type}
								name={accessory.name} 
								icon={getAccessoryeIcon(accessory.type)} 
							/>
						))
					}
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
						<DateValue>{rentalPeriod.start}</DateValue>
					</DateInfo>

					<Feather
							name='chevron-right'
							size={RFValue(10)}
							color={theme.colors.text}
						/>

					<DateInfo>
						<DateTitle>ATÉ</DateTitle>
						<DateValue>{rentalPeriod.end}</DateValue>
					</DateInfo>

				</RentalPeriod>

				<RentalPrice>
					<RentalPriceLabel>TOTAL</RentalPriceLabel>
					<RentalPriceDetails>
						<RentalPriceQuota>R$ {car.rent.price} x{rentalTotalDiarias} diárias</RentalPriceQuota>
						<RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
					</RentalPriceDetails>
				</RentalPrice>
				
			</Content>

			<Footer>
				<Button title="Alugar agora" color={theme.colors.success} onPress={handleConfirmRental} />
			</Footer>

		</Container>
	);
}