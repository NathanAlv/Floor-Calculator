import React from 'react';
import { View, Text } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import MyButton from '../components/MyButton';

const HomeScreen = ({ navigation }) => {
  const nativeWindStyleSheet = new NativeWindStyleSheet();

  const styles = nativeWindStyleSheet.create({
    flex: 1,
    itemsCenter: 'center',
    pt: 16,
    bgWhite: 'white',
    fontSize: 24,
  });

  return (
    <View style={styles}>
      <Text style={styles.fontSize}>Tela Principal</Text>

      <MyButton title="Saiba a Área" onPress={() => navigation.navigate('AreaScreen')} />
      <MyButton title="Fazer o Orçamento" onPress={() => navigation.navigate('FloorScreen')} />
    </View>
  );
};

export default HomeScreen;
