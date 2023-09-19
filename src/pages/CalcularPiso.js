import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';
import { tw } from 'nativewind';

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
    <View style={tw`padding:20`}>
      <Text style={tw`font-size:20 mb-10`}>Orçamento dos Pisos Disponíveis</Text>

      <View>
        <Text>Largura m²:</Text>
        <TextInput
          keyboardType="numeric"
          value={width}
          onChangeText={setWidth}
          style={tw`border-gray-400 border-width:1 padding:5 mt-10`}
        />
      </View>

      <View>
        <Text>Comprimento m²:</Text>
        <TextInput
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
          style={tw`border-gray-400 border-width:1 padding:5 mt-10`}
        />
      </View>

      <View>
        <Text>Tipo de Pisos:</Text>
        <Picker
          selectedValue={priceType}
          onValueChange={(itemValue) => setPriceType(itemValue)}
          style={tw`mt-10`}
        >
          <Picker.Item label="Cerâmica" value="35.00" />
          <Picker.Item label="Porcelanato" value="125.00" />
          <Picker.Item label="Madeira" value="330.00" />
        </Picker>
      </View>

      <View>
        <Button title="Calcular Preço" onPress={calculateResult} />
      </View>

      <Text style={tw`mt-10`}>{result}</Text>
    </View>
  );
};

export default Calculate_floor;