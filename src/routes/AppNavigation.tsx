import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/Home.Screen';
import DetailInfoPokemonScreen from '../screen/DetailPokemonScreen';
const Stack = createNativeStackNavigator();
export enum AppStackName {
  Home = 'Home',
  Detail = 'Detail',
}
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={AppStackName.Home} component={HomeScreen} />
        <Stack.Screen
          name={AppStackName.Detail}
          component={DetailInfoPokemonScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
