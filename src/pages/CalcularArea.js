import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { tw } from 'nativewind';

const Calculate_area = () => {
  const [area, setArea] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    if (area) {
      const areaInSquareMeters = parseFloat(area.replace(',', '.'));
      const sideLength = Math.sqrt(areaInSquareMeters);

      setResult(
        `Área Total: ${areaInSquareMeters.toFixed(2)} m²\nLargura por m²: ${sideLength.toFixed(2)} m\nComprimento por m²: ${sideLength.toFixed(2)} m`
      );
    } else {
      setResult('Por favor, insira a área em metros.');
    }
  };

  return (
    <View style={tw`padding:20`}>
      <Text style={tw`font-size:20 mb-10`}>Cálculo de Largura e Comprimento por m²</Text>

      <View>
        <Text>Área (metros):</Text>
        <TextInput
          keyboardType="numeric"
          value={area}
          onChangeText={setArea}
          style={tw`border-gray-400 border-width:1 padding:5 mt-10`}
        />
      </View>

      <View>
        <Button title="Calcular" onPress={calculateResult} />
      </View>

      <Text style={tw`mt-10`}>{result}</Text>
    </View>
  );
};

export default Calculate_area;