import React from 'react';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { useNavigation, useRoute } from '@react-navigation/native';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import { CarDTO } from '../../dtos/CarDTO';

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
	About,
	Accessories,
	Footer
} from './styles';

interface Params {
	car: CarDTO;
}

export function CarDetails(){
	const navigation = useNavigation();
	const route = useRoute();
	const { car } = route.params as Params;

	function handleConfirmRental() {
		navigation.navigate('Scheduling');
	}

	function handleBack() {
		navigation.goBack();
	}

	return (
		<Container>
			<Header> 
				<BackButton onPress={handleBack}/>
			</Header>

			<CarImages>
				<ImageSlider imagesUrl={['https://www.pngplay.com/wp-content/uploads/12/Porsche-No-Background-Clip-Art.png']} />
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
					<Accessory name={car.name} icon={SpeedSvg} />
				</Accessories>

					<About>{car.about}</About>
			</Content>

			<Footer>
				<Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
			</Footer>

		</Container>
	);
}