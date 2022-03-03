import React from 'react';
import { StatusBar, Button, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import {
	Container
} from './styles';

export function Splash(){
	return (
		<Container>
			<StatusBar 
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>

			<Animated.View style={styles.box}/>

			<Button title='Mover' onPress={()=> {}}/>
		</Container>
	);
}

const styles = StyleSheet.create({
	box: {
		width: 100,
		height: 100,
		backgroundColor: 'red'
	}
})