import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton/index';

import {
	Container,
	Content,
	Title,
	Message,
	Footer
} from './styles';

export function SchedulingComplete(){
	const { width } = useWindowDimensions();

	return (
		<Container>
			<LogoSvg width={width}/>

			<Content>
				<DoneSvg height={RFValue(80)} width={RFValue(80)} />
				<Title>Carro Alugado!</Title>

				<Message>
					Agora você só precisa ir {'\n'}
					até a concessionaria da RENTEX {'\n'}
					pegar o seu automóvel
				</Message>

				<Footer>
					<ConfirmButton title='Ok'/>
				</Footer>
			</Content>

		</Container>
	);
}