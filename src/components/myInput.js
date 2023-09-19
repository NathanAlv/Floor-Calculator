import React from 'react';
import { View, TextInput } from 'react-native';
import { tw } from 'nativewind';

const MyInput = ({ myPlaceholder, value, onChangeText }) => {
  return (
    <View>
      <TextInput
        placeholder={myPlaceholder}
        value={value}
        onChangeText={onChangeText}
        style={tw`mt-18 w-250 p-8-4 border border-gray-300 rounded-md`}
      />
    </View>
  );
};

export default MyInput;