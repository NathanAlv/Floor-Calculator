import React from 'react';
import MyButton from '../components/MyButton';
import { Text, View } from '../components/nativeWind';

const HomeScreen = ({ navigation }) => {
  return (
    <View className={`flex:1 items-center pt-16 bg-white`}>
      <Text className={`font-size:24`}>Tela Principal</Text>

      <MyButton title="Saiba a Área" onPress={() => navigation.navigate('AreaScreen')} />
      <MyButton title="Fazer o Orçamento" onPress={() => navigation.navigate('FloorScreen')} />
    </View>
  );
};

export default HomeScreen;