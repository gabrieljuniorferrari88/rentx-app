import React from 'react';

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider';

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
} from './styles';

export function CarDetails(){
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
				
					<About>
						O conversível mais potente do mundo, a nova 812 GTS. Já que o foco
						é desempenho, eu não vou te enrolar. Vamos aos números: o motor é um 6.5 V12 
						aspirado de 800 cv de potência e 73,2 kgfm de torque. O câmbio automático de 
						dupla embreagem tem sete marchas e o 0 a 100 km/h é feito em apenas 3 segundos.
						A tração é traseira e a velocidade máxima é de 340 km/h. Pronto!
					</About>
			</Content>

		</Container>
	);
}