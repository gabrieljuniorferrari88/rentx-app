import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import {
	useFonts,
	Archivo_400Regular,
	Archivo_500Medium,
	Archivo_600SemiBold
} from '@expo-google-fonts/archivo';
import {
	Inter_400Regular,
	Inter_500Medium
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';

export default function App() {
	const [fontsLoaded] = useFonts({
		Archivo_400Regular,
		Archivo_500Medium,
		Archivo_600SemiBold,
		Inter_400Regular,
		Inter_500Medium
	});

	if(!fontsLoaded){
		return <AppLoading />
	}

  return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</NavigationContainer>
  );
}
