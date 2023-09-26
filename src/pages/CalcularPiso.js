import React, { useState } from 'react';
import { Button } from 'react-native';
import { Picker as StyledPicker, Text, TextInput, View } from '../components/nativeWind';
import { Picker } from '@react-native-picker/picker';
import { withExpoSnack } from 'nativewind';

const Calculate_floor = () => {
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [priceType, setPriceType] = useState('35.00');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    const totalPrice = parseFloat(width) * parseFloat(length) * parseFloat(priceType);
    setResult(`O preço total é: R$ ${totalPrice.toFixed(2)}`);
  };

  return (
    <View className={`padding:20`}>
      <Text className={`font-size:20 mb-10 items-center justify-center`}>Orçamento dos Pisos Disponíveis</Text>

      <View>
        <Text>Largura m²:</Text>
        <TextInput
          keyboardType="numeric"
          value={width}
          onChangeText={setWidth}
          className={`border-gray-400 border-width:1 padding:3 mt-10`}
        />
      </View>

      <View>
        <Text>Comprimento m²:</Text>
        <TextInput
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
          className={`border-gray-400 border-width:1 padding:3 mt-10`}
        />
      </View>

      <View>
        <Text>Tipo de Pisos:</Text>
        <StyledPicker
          selectedValue={priceType}
          onValueChange={(itemValue) => setPriceType(itemValue)}
          className={`mt-10`}
        >
          <Picker.Item label="Cerâmica" value="35.00" />
          <Picker.Item label="Porcelanato" value="125.00" />
          <Picker.Item label="Madeira" value="330.00" />
        </StyledPicker>
      </View>

      <View>
        <Button title="Calcular Preço" onPress={calculateResult} />
      </View>

      <Text className={`mt-10`}>{result}</Text>
    </View>
  );
};

export default withExpoSnack (Calculate_floor);