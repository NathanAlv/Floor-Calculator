import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

const MyButton = ({ title, onPress }) => {
  const nativeWindStyleSheet = new NativeWindStyleSheet();

  const styles = nativeWindStyleSheet.create({
    mt18: {
      marginTop: 18,
    },
    w200: {
      width: 200,
    },
    p8: {
      padding: 8,
    },
    bgBlue500: {
      backgroundColor: 'blue-500',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    itemsCenter: {
      alignItems: 'center',
    },
    roundedMd: {
      borderRadius: 4,
    },
    textWhite: {
      color: 'white',
    },
    fontSize20: {
      fontSize: 20,
    },
  });

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.mt18, styles.w200, styles.p8, styles.bgBlue500, styles.justifyCenter, styles.itemsCenter, styles.roundedMd]}
      >
        <Text style={[styles.textWhite, styles.fontSize20]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;
