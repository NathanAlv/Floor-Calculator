import React from 'react';
import { View } from 'react-native';
import { Text, TouchableOpacity } from './nativeWind';

const MyButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} className={`mt-18 w-200 p-8 bg-blue-500 justify-center items-center rounded-md`}>
        <Text className={`text-white font-size:20`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;