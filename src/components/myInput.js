import React from 'react';
import { View } from 'react-native';
import { TextInput } from './nativeWind';

const MyInput = ({ myPlaceholder, value, onChangeText }) => {
  return (
    <View>
      <TextInput
        placeholder={myPlaceholder}
        value={value}
        onChangeText={onChangeText}
        className={`mt-18 w-250 p-8-4 border border-gray-300 rounded-md`}
      />
    </View>
  );
};

export default MyInput;