import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ImageIndexProps {
	active: boolean;
}

export const Container = styled.View`
	width: 100%;
`;

export const ImageIndexes = styled.View`
	flex-direction: row;
	align-self: flex-end;
	padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
	width: ${RFValue(6)}px;
	height: ${RFValue(6)}px;

	background-color: ${({ theme, active }) => 
	active ? theme.colors.title : theme.colors.text_detail};

	margin-left: 8px;
	border-radius: ${RFValue(3)}px;
`;

export const CarImageWrapper = styled.View`
	width: ${Dimensions.get('window').width}px;
	height: ${RFValue(132)}px;

	justify-content: center;
	align-items: center;
`;

export const CarImage = styled.Image`
	width: ${RFValue(280)}px;
	height: ${RFValue(132)}px;
`;
