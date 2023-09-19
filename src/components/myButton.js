import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { tw } from 'nativewind';

const MyButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={tw`mt-18 w-200 p-8 bg-blue-500 justify-center items-center rounded-md`}>
        <Text style={tw`text-white font-size:20`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;