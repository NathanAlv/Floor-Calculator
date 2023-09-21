import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

const Calculate_area = () => {
  const nativeWindStyleSheet = new NativeWindStyleSheet();

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

  const styles = nativeWindStyleSheet.create({
    padding: 20,
    fontSize: 20,
    marginBottom: 10,
    borderGray: 400,
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    marginTop: 10,
  });

  return (
    <View style={styles.padding}>
      <Text style={styles.fontSize}>{styles.marginBottom}Cálculo de Largura e Comprimento por m²</Text>

      <View>
        <Text>Área (metros):</Text>
        <TextInput
          keyboardType="numeric"
          value={area}
          onChangeText={setArea}
          style={styles.borderGray}
        />
      </View>

      <View>
        <Button title="Calcular" onPress={calculateResult} />
      </View>

      <Text style={styles.marginTop}>{result}</Text>
    </View>
  );
};

export default Calculate_area;
