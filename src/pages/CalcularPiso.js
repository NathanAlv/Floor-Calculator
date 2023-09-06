import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';
import { styled } from 'styled-components/native';

export const abacate = styled.TextInput`
    border-color: gray;
    border-width: 1;
    padding: 5;
`
export const abacateButton = styled.Button`
    margin-top: 10;
`
export const abacateText = styled.Text`
    font-size: 20;
    margin-bottom: 10;
`

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
    <View style={{ padding: 20 }}>
      <abacateText>Orçamento dos Pisos Disponíveis</abacateText>
      
      <View>
        <Text>Largura m²:</Text>
        <abacate
          keyboardType="numeric"
          value={width}
          onChangeText={setWidth}
        />
      </View>
      
      <View>
        <Text>Comprimento m²:</Text>
        <abacate
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
        />
      </View>
      
      <View>
        <Text>Tipo de Pisos:</Text>
        <Picker
          selectedValue={priceType}
          onValueChange={(itemValue) => setPriceType(itemValue)}
        >
          <Picker.Item label="Cerâmica" value="35.00" />
          <Picker.Item label="Porcelanato" value="125.00" />
          <Picker.Item label="Madeira" value="330.00" />
        </Picker>
      </View>
      
      <View >
        <abacateButton>
        <Button title="Calcular Preço" onPress={calculateResult} />
        </abacateButton>
      </View>
      
      <abacateText>{result}</abacateText>
    </View>
  );
};

export default Calculate_floor;