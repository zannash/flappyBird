import React from 'react';
import { View, StyleSheet } from 'react-native';

const Bird = ({ birdBottom, birdLeft }) => {
    const birdWidth = 40
    const birdHeight = 40
    return (
        <View style={{
            position: 'absolute',
            left: birdLeft - (birdWidth / 2),
            bottom: birdBottom - (birdHeight / 2),
            width: birdWidth,
            height: birdHeight,
            backgroundColor: 'blue' // Just for visualization, you can remove this
        }}>
            {/* Add any content you want to render inside the View */}
        </View>
    )
}

export default Bird;
