import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
	Container,
	InputText,
	IconContainer
} from './styles';

interface Props extends TextInputProps { 
	iconName: React.ComponentProps<typeof Feather>['name']	
}

export function PasswordInput({
	iconName,
	...rest
}: Props){
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const theme = useTheme();

	function handlePasswordVisibilityChange(){
		setIsPasswordVisible(prevState => !prevState);
	}

	return (
		<Container>
			<IconContainer>
				<Feather 
					name={iconName}
					size={RFValue(24)}
					color={theme.colors.text_detail}
				/>
			</IconContainer>

			<InputText 
				secureTextEntry={isPasswordVisible}
				{...rest}
			/>

			<BorderlessButton onPress={handlePasswordVisibilityChange}>
				<IconContainer>
					<Feather 
							name={isPasswordVisible ? 'eye' : 'eye-off'}
							size={RFValue(24)}
							color={theme.colors.text_detail}
						/>
				</IconContainer>
			</BorderlessButton>
		</Container>
	);
}