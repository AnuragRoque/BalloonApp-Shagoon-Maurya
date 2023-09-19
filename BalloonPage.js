import React, { useState } from 'react';
import { Button, View } from 'react-native';
import Animated, { Easing, withSpring, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function BalloonPage({ navigation }) {
  const size = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: size.value }],
    };
  });

  const inflateBalloon = () => {
    size.value = withTiming(3, { duration: 2000 });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          {
            width: 50,
            height: 70,
            backgroundColor: 'red',
            borderRadius: 70,
          },
          animatedStyle,
        ]}
      /><br></br><br></br><br></br><br></br>
      <Button title="Inflate Balloon" onPress={inflateBalloon} />
      <br></br>
      <br></br>
      <Button title="Go to Page 2" onPress={() => navigation.navigate('Form')} />
    </View>
  );
}
