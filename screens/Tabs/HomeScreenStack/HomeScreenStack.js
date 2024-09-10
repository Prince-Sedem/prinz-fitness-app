import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import Chest from './Chest';
import Abs from './Abs';
import Biceps from './Biceps';
import Triceps from './Triceps';
import Back from './Back';
import Shoulders from './Shoulders';
import Forearms from './Forearms';
import Buttocks from './Buttocks';
import Legs from './Legs';
import Calfs from './Calfs';

const HomeStack = createNativeStackNavigator();

export default function HomeScreenStack() {
  return (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="Chest" component={Chest} />
          <HomeStack.Screen name="Abs" component={Abs} />
          <HomeStack.Screen name="Biceps" component={Biceps} />
          <HomeStack.Screen name="Triceps" component={Triceps} />
          <HomeStack.Screen name="Back" component={Back} />
          <HomeStack.Screen name="Shoulders" component={Shoulders} />
          <HomeStack.Screen name="Forearms" component={Forearms} />
          <HomeStack.Screen name="Buttocks" component={Buttocks} />
          <HomeStack.Screen name="Legs" component={Legs} />
          <HomeStack.Screen name="Calfs" component={Calfs} />
        </HomeStack.Navigator>
  )
}