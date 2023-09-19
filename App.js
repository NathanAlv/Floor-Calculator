import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { tw } from 'nativewind';

import HomeScreen from './pages/HomeScreen';
import Calculate_area from './pages/Calcular_area';
import Calculate_floor from './pages/Calcular_piso';

const Stack = createNativeStackNavigator();

const HeaderTitle = ({ children }) => {
  return <Text style={tw`text-white font-size:20`}>{children}</Text>;
};

const HeaderContainer = ({ children }) => {
  return <View style={tw`bg-blue-500`}>{children}</View>;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <HeaderTitle>Página Inicial</HeaderTitle>,
            headerContainerStyle: HeaderContainer,
          }}
        />

        <Stack.Screen
          name="AreaScreen"
          component={Calculate_area}
          options={{
            headerTitle: () => <HeaderTitle>Saiba a Área</HeaderTitle>,
            headerContainerStyle: HeaderContainer,
          }}
        />

        <Stack.Screen
          name="FloorScreen"
          component={Calculate_floor}
          options={{
            headerTitle: () => <HeaderTitle>Orçamento</HeaderTitle>,
            headerContainerStyle: HeaderContainer,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}