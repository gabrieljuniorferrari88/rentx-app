import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled(RectButton)`
	width: ${RFValue(80)}px;
	height: ${RFValue(56)}px;
	background-color: ${({ theme }) => theme.colors.shape_dark};

	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.shape};
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_500};
`;