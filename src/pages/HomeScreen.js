import React from 'react';
import { View, Text } from 'react-native';
import { tw } from 'nativewind';

import MyButton from '../components/MyButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={tw`flex:1 items-center pt-16 bg-white`}>
      <Text style={tw`font-size:24`}>Tela Principal</Text>

      <MyButton title="Saiba a Área" onPress={() => navigation.navigate('AreaScreen')} />
      <MyButton title="Fazer o Orçamento" onPress={() => navigation.navigate('FloorScreen')} />
    </View>
  );
};

export default HomeScreen;