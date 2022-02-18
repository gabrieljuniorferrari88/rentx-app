import React from 'react';
import { useTheme } from 'styled-components';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
	Container,
	Title
} from './styles';

interface Props extends RectButtonProps{
	title: string;
	color?: string;
	enabled?: boolean;
}

export function Button({
	title,
	color,
	enabled = true,
	...rest
}: Props){

	const theme = useTheme();

	return (
		<Container {...rest} 
			color={color ? color : theme.colors.main}
			enabled={enabled}
			style={{ opacity: enabled ? 1 : .5 }} 
		>
			<Title>{title}</Title>
		</Container>
	);
}