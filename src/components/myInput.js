import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { styled } from "styled-components/native";

export default function MyInput(props) {
  return (
    <View>
      <V
        placeholder={props.myPlaceholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  )
}

export const V = styled.TextInput`
    margin-top: 18;
    width: 250;
    padding: 8 4;
    border-width: 1;
    border-color: "#d6d6d6";
    border-radius: 4;
`
