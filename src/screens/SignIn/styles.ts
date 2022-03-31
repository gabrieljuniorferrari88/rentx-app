import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
	flex: 1;
	padding: 0 ${RFValue(24)}px;

	background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
	width: 100%;
	margin-top: ${getStatusBarHeight() + RFValue(115)}px;
`;

export const Title = styled.Text`
	font-size: ${RFValue(40)}px;
	font-family: ${({theme}) => theme.fonts.secondary_600};
	color: ${({theme}) => theme.colors.title};
`;
export const SubTitle = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({theme}) => theme.fonts.primary_400};
	color: ${({theme}) => theme.colors.text_detail};
	line-height: ${RFValue(25)}px;

	margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
	margin: ${RFValue(64)}px 0;

	flex-direction: column;
`;

export const Footer = styled.View``;
