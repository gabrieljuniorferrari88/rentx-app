import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;
	background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFValue(325)}px;
	background-color: ${({theme}) => theme.colors.shape_dark};

	justify-content: center;
	padding: 25px;
`;

export const Title = styled.Text`
	color: ${({theme}) => theme.colors.shape};
	font-family: ${({theme}) => theme.fonts.secondary_600};
	font-size: ${RFValue(34)}px;

	margin-top: 24px;
`;