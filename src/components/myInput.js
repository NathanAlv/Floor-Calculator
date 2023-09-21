import React from 'react';
import { View, TextInput } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

const MyInput = ({ myPlaceholder, value, onChangeText }) => {
  const nativeWindStyleSheet = new NativeWindStyleSheet();

  const styles = nativeWindStyleSheet.create({
    mt18: {
      marginTop: 18,
    },
    w250: {
      width: 250,
    },
    p84: {
      padding: 8,
    },
    border: {
      borderWidth: 1,
    },
    borderGray300: {
      borderColor: 'gray-300',
    },
    roundedMd: {
      borderRadius: 4,
    },
  });

  return (
    <View>
      <TextInput
        placeholder={myPlaceholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.mt18, styles.w250, styles.p84, styles.border, styles.borderGray300, styles.roundedMd]}
      />
    </View>
  );
};

export default MyInput;
