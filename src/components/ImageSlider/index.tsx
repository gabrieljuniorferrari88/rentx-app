import React from 'react';
import { FlatList } from 'react-native';

import {
	Container,
	ImageIndexes,
	ImageIndex,
	CarImageWrapper,
	CarImage,
} from './styles';

interface Props {
	imagesUrl: string[];
	// imagesUrl: {
	// 	id: string;
	// 	photo: string;
	// }[];
}

export function ImageSlider({ imagesUrl }: Props){
	return (
		<Container>
			
			<ImageIndexes>
				{
					imagesUrl.map((_, index) => (
						<ImageIndex 
							key={String(index)}
							active={true} 
						/>
					))
				}
			</ImageIndexes>

			<FlatList
        data={imagesUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage resizeMode="contain" source={{ uri: item }} />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        // onViewableItemsChanged={indexChanged.current}
        decelerationRate="fast"
      />

		</Container>
	);
}