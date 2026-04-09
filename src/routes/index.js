import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Minhas Despesas' }} 
      />
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{ title: 'Nova Despesa' }} 
      />
    </Stack.Navigator>
  );
}