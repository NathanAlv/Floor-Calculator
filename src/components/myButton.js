import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styled } from "styled-components/native";

export const button = styled.Button`
    margin-top: 18;
    width: 200;
    padding: 8;
    background-color: "#0000FF";
    justify-content: "center";
    align-items: "center";
    border-radius: 8;
`
export const buttonTitle = styled.Text`
    color: white;
    font-size: 20;
`

export default function MyButton(props) {
  return (
    <View>
      <button onPress={props.onPress}>
        <buttonTitle>{props.title}</buttonTitle>
      </button>
    </View>
  )
}
