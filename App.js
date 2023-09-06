import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import HomeScreen from './pages/HomeScreen';
import Calculate_area from './pages/Calcular_area';
import Calculate_floor from './pages/Calcular_piso';

const Stack = createNativeStackNavigator();

const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const HeaderContainer = styled.View`
  background-color: #0000FF;
`;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <HeaderTitle>Página Inicial</HeaderTitle>,
            headerStyle: {
              backgroundColor: '#0000FF',
            },
          }}
        />

        <Stack.Screen
          name="AreaScreen"
          component={Calculate_area}
          options={{
            headerTitle: () => <HeaderTitle>Saiba a Área</HeaderTitle>,
            headerStyle: {
              backgroundColor: '#0000FF',
            },
          }}
        />

        <Stack.Screen
          name="FloorScreen"
          component={Calculate_floor}
          options={{
            headerTitle: () => <HeaderTitle>Orçamento</HeaderTitle>,
            headerStyle: {
              backgroundColor: '#0000FF',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}