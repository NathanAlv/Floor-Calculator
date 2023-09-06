import React from "react";
import { View, Text, StyleSheet } from "react-native";

import MyButton from "../components/MyButton";
import { styled } from "styled-components/native";

export const container = styled.container`
    flex: 1;
    align-items: center;
    padding-top: 16; 
    background-color: "#fff";
`

export const title = styled.Text`
    font-size: 24;
`

export default function HomeScreen ({ navigation }) {
  return (
    <View>
    <container>
      <title>Tela Principal</title>

      <MyButton title="Saiba a Área" onPress={() => navigation.navigate("AreaScreen")} />
      <MyButton title="Fazer o Orçamento" onPress={() => navigation.navigate("FloorScreen")} />
    </container>
    </View>
  );
}