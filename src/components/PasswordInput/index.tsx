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
	iconName: React.ComponentProps<typeof Feather>['name'];
	value?: string;
}

export function PasswordInput({
	iconName,
	value,
	...rest
}: Props){
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const theme = useTheme();

	function handlePasswordVisibilityChange(){
		setIsPasswordVisible(prevState => !prevState);
	}

	function handleInputFocus(){ 
		setIsFocused(true);
	}

	function handleInputBlur(){ 
		setIsFocused(false);
		setIsFilled(!!value);
	}

	return (
		<Container>
			<IconContainer isFocused={isFocused}>
				<Feather 
					name={iconName}
					size={RFValue(24)}
					color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
				/>
			</IconContainer>

			<InputText
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				isFocused={isFocused}
				secureTextEntry={isPasswordVisible}
				{...rest}
			/>

			<BorderlessButton onPress={handlePasswordVisibilityChange}>
				<IconContainer isFocused={isFocused}>
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