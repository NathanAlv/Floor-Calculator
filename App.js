import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CalculateArea from './src/pages/calcular-area';
import CalculateFloor from './src/pages/CalcularPiso';
import HomeScreen from './src/pages/HomeScreen';
import { Text, View } from './src/components/nativeWind';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';


const Stack = createNativeStackNavigator();

const HeaderTitle = styled(Text)

const HeaderContainer = styled(View)



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => 
              <HeaderContainer className= 'flex-1 items-center justify-center'>
              <HeaderTitle className= 'text-white font-size:20 '>Página Inicial</HeaderTitle>
              </HeaderContainer>,
          }}
        />

        <Stack.Screen
          name="AreaScreen"
          component={CalculateArea}
          options={{
            headerTitle: () => 
              <HeaderTitle>Saiba a Área</HeaderTitle>,
          }}
        />

        <Stack.Screen
          name="FloorScreen"
          component={CalculateFloor}
          options={{
            headerTitle: () => 
            <HeaderTitle>Orçamento</HeaderTitle>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withExpoSnack (App)