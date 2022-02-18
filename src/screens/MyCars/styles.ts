import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFValue(325)}px;
	background-color: ${({theme}) => theme.colors.shape_dark};

	justify-content: center;
	padding: 25px;
	padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
	color: ${({theme}) => theme.colors.shape};
	font-family: ${({theme}) => theme.fonts.secondary_600};
	font-size: ${RFValue(30)}px;

	margin-top: ${RFValue(24)}px;
`;
export const SubTitle = styled.Text`
	color: ${({theme}) => theme.colors.shape};
	font-family: ${({theme}) => theme.fonts.secondary_400};
	font-size: ${RFValue(15)}px;

	margin-top: ${RFValue(24)}px;
`;

export const Content = styled.View`
	flex: 1;
	width: 100%;
	padding: 0 ${RFValue(16)}px;
`;

export const Appointments = styled.View`
	width: 100%;

	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: ${RFValue(24)}px 0;
`;

export const AppointmentsTitle = styled.Text`
	color: ${({theme}) => theme.colors.text};
	font-family: ${({theme}) => theme.fonts.primary_400};
	font-size: ${RFValue(15)}px;
`;

export const AppointmentsQuantity = styled.Text`
	color: ${({theme}) => theme.colors.title};
	font-family: ${({theme}) => theme.fonts.primary_500};
	font-size: ${RFValue(15)}px;
`;
export const CarTest = styled.Text`
	color: ${({theme}) => theme.colors.title};
	font-family: ${({theme}) => theme.fonts.primary_500};
	font-size: ${RFValue(15)}px;
`;
