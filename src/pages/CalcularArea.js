import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styled } from 'styled-components/native';

export const textArea = styled.Text`
    border-color: gray;
    border-width: 1;
    padding: 5;
    margin-top: 10;
`

export const buttonArea = styled.Button`
    margin-top: 10;
`

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
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Cálculo de Largura e Comprimento por m²</Text>
      
      <View>
        <Text>Área (metros):</Text>
        <textArea
          keyboardType="numeric"
          value={area}
          onChangeText={setArea}
        />
      </View>
      
      <View> 
        <buttonArea>
        <Button title="Calcular" onPress={calculateResult} />
        </buttonArea>
      </View>
      
      <Text><buttonArea>{result}</buttonArea></Text>
    </View>
  );
};

export default Calculate_area;
