import React from 'react';

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider';

import {
	Container,
	Header,
	CarImages
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

		</Container>
	);
}