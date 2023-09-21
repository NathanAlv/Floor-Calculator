import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeWindStyleSheet } from 'nativewind';

import { HomeScreen } from './src/pages/HomeScreen';
import { Calculate_floor } from './src/pages/CalcularPiso';
import Calculate_area from './src/pages/calcular-area';

const Stack = createNativeStackNavigator();

const nativeWindStyleSheet = new NativeWindStyleSheet();

const HeaderContainer = ({ children, nativeWindStyleSheet }) => {
  const headerContainerStyle = nativeWindStyleSheet.create({
    backgroundColor: 'blue',
  });

  return <View style={headerContainerStyle}>{children}</View>;
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
            headerContainerStyle: <HeaderContainer nativeWindStyleSheet={nativeWindStyleSheet} />,
          }}
        />

        <Stack.Screen
          name="AreaScreen"
          component={Calculate_area}
          options={{
            headerTitle: () => <HeaderTitle>Saiba a Área</HeaderTitle>,
            headerContainerStyle: <HeaderContainer nativeWindStyleSheet={nativeWindStyleSheet} />,
          }}
        />

        <Stack.Screen
          name="FloorScreen"
          component={Calculate_floor}
          options={{
            headerTitle: () => <HeaderTitle>Orçamento</HeaderTitle>,
            headerContainerStyle: <HeaderContainer nativeWindStyleSheet={nativeWindStyleSheet} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
