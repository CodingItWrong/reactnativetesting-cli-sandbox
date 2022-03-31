import React from 'react';
import {Text, View} from 'react-native';

export default function Hello({name}) {
  return (
    <View>
      <Text>Hello, {name}!</Text>
    </View>
  );
}
