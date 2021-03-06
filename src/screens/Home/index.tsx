import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { BackHandler, StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler';

import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring
} from 'react-native-reanimated';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';

import {
	Container,
	Header,
	HeaderContent,
	TotalCars,
	CarList,
} from './styles';

export function Home(){
	const [cars, setCars] = useState<CarDTO[]>([]);
	const [loading, setLoading] = useState(true);
	const navigation = useNavigation();
	
	const positionY = useSharedValue(0);
	const positionX = useSharedValue(0);

	const myCarsButtonStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateX: positionX.value },
				{ translateY: positionY.value }
			]
		}
	});

	const onGestureEvent = useAnimatedGestureHandler({
		onStart(_, ctx: any) {
			ctx.positionX = positionX.value;
			ctx.positionY = positionY.value;
		},
		onActive(event, ctx: any) {
			positionX.value = ctx.positionX + event.translationX;
			positionY.value = ctx.positionY + event.translationY;
		},
		onEnd() {
			positionX.value = withSpring(0);
			positionY.value = withSpring(0);
		},
	});
	
	const theme = useTheme();

	function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

	function handleOpenMyCars() {
		navigation.navigate('MyCars');
	}
	
	useEffect(() => {
		async function fetchCars() {
			try {
			const response = await api.get('/cars');
			setCars(response.data);

			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		fetchCars();
	},[]);

	useFocusEffect(() => {
		const backHandler = BackHandler.addEventListener(
				'hardwareBackPress',
				() => true
		);
		return () => backHandler.remove();
});

	return (
		<Container>
			<StatusBar 
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			<Header>
				<HeaderContent>
					<Logo width={RFValue(108)} height={RFValue(12)}/>
					{
						!loading &&
						<TotalCars>
							Total de {cars.length} carros
						</TotalCars>
					}
				</HeaderContent>					
			</Header>

			{ loading ? <LoadAnimation /> :
				<CarList 
					data={cars}
					keyExtractor={item => String(item.id)} 
					renderItem={({ item }) => 
						<Car data={item} onPress={() => handleCarDetails(item)} />
						}
				/>
				}
			<PanGestureHandler onGestureEvent={onGestureEvent}>
				<Animated.View
					style={[
						myCarsButtonStyle,
						{
							position: 'absolute',
							bottom: RFValue(13),
							right: RFValue(22),
						}
					]}
				>
					<ButtonAnimated 
						onPress={handleOpenMyCars}
						style={[styles.button, {backgroundColor: theme.colors.main}]}
					>
						<Ionicons 
							name="ios-car-sport"
							size={RFValue(32)}
							color={theme.colors.shape}
						/>
					</ButtonAnimated>
				</Animated.View>
			</PanGestureHandler>
			
		</Container>
	);
}

const styles = StyleSheet.create({
	button: {
		width: RFValue(60),
		height: RFValue(60),
		borderRadius: RFValue(30),
		justifyContent: 'center',
		alignItems: 'center'
	}
})