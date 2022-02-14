import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

export function Load(){
	const theme = useTheme();
	return (
		<ActivityIndicator 
			color={theme.colors.main}
			size={RFValue(35)}
			style={{ flex: 1}}
		/>
	);
}