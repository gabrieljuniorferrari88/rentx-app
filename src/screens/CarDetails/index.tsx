import React from 'react';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

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
	About,
	Accessories,
	Footer
} from './styles';

export function CarDetails(){
	const navigation = useNavigation();

	function handleConfirmRental() {
		navigation.navigate('Scheduling');
	}

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

					<About>
						O conversível mais potente do mundo, a nova 812 GTS. Já que o foco
						é desempenho, eu não vou te enrolar. Vamos aos números: o motor é um 6.5 V12 
						aspirado de 800 cv de potência e 73,2 kgfm de torque. O câmbio automático de 
						dupla embreagem tem sete marchas e o 0 a 100 km/h é feito em apenas 3 segundos.
						A tração é traseira e a velocidade máxima é de 340 km/h. Pronto!
					</About>
			</Content>

			<Footer>
				<Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
			</Footer>

		</Container>
	);
}