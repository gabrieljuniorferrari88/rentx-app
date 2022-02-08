import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car'

import {
	Container,
	Header,
	HeaderContent,
	TotalCars,
} from './styles';

export function Home(){
	const carDataOne ={
		brand: 'AUDI',
		name: 'RS 5 Coupé',
		rent: {
			period: 'Ao Dia',
			price: 120
		},
		thumbnail: 'https://toppng.com/uploads/preview/audi-11530986691mytcdhkpad.png',
	}
	const carDataTwo ={
		brand: 'porshe',
		name: 'panamera',
		rent: {
			period: 'Ao Dia',
			price: 340
		},
		thumbnail: 'https://www.pngplay.com/wp-content/uploads/12/Porsche-No-Background-Clip-Art.png',
	}
	const carDataTree ={
		brand: 'crevrolet',
		name: 'Corvette Z06',
		rent: {
			period: 'Ao Dia',
			price: 620
		},
		thumbnail: 'https://w7.pngwing.com/pngs/860/632/png-transparent-car-2017-chevrolet-corvette-z06-2018-chevrolet-corvette-z06-car-car-mode-of-transport-performance-car.png',
	}

	return (
		<Container>
			<StatusBar 
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
				<Header>
					<HeaderContent>
						<Logo width={RFValue(108)} height={RFValue(12)}/>
						<TotalCars>
							Total de 15 carros
						</TotalCars>
					</HeaderContent>					
				</Header>

				<Car data={carDataOne}/>
				<Car data={carDataTwo}/>
				<Car data={carDataTree}/>
		</Container>
	);
}