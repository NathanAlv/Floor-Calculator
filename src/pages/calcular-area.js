import React, { useState } from 'react';
import { Button } from 'react-native';
import { Text, TextInput, View } from '../components/nativeWind';

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
    <View className={`padding:20`}>
      <Text className={`font-size:20 mb-10`}>Cálculo de Largura e Comprimento por m²</Text>

      <View>
        <Text>Área (metros):</Text>
        <TextInput
          keyboardType="numeric"
          value={area}
          onChangeText={setArea}
          className={`border-gray-400 border-width:1 padding:5 mt-10`}
        />
      </View>

      <View>
        <Button title="Calcular" onPress={calculateResult} />
      </View>

      <Text className={`mt-10`}>{result}</Text>
    </View>
  );
};

export default Calculate_area;