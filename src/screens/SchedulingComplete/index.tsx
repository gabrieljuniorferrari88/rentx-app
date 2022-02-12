import React from 'react';
import { useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
	Container
} from './styles';

export function SchedulingComplete(){
	return (
		<Container>
			<LogoSvg />
		</Container>
	);
}