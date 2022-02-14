import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car'

import {
	Container,
	Header,
	HeaderContent,
	TotalCars,
	CarList
} from './styles';

export function Home(){
	const navigation = useNavigation();

	const carData ={
		brand: 'porshe',
		name: 'panamera',
		rent: {
			period: 'Ao Dia',
			price: 340
		},
		thumbnail: 'https://www.pngplay.com/wp-content/uploads/12/Porsche-No-Background-Clip-Art.png',
	}

	function handleCarDetails() {
    navigation.navigate('CarDetails');
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

				<CarList 
					data={[1,2,3,4,5,6,7,8,9,10]}
					keyExtractor={item => String(item)}
					renderItem={({ item }) => 
						<Car data={carData} onPress={handleCarDetails} />
					}
				/>
		</Container>
	);
}