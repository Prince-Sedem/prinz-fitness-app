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
import Chest2 from './Chest2';
import Abs2 from './Abs2';
import Biceps2 from './Biceps2';

const HomeStack = createNativeStackNavigator();
const ChestStack = createNativeStackNavigator();
const AbsStack = createNativeStackNavigator();
const BicepsStack = createNativeStackNavigator();

function HomeScreenStack() {
  return (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="Chest" component={ChestScreenStack} />
          <HomeStack.Screen name="Abs" component={AbsScreenStack} />
          <HomeStack.Screen name="Biceps" component={BicepsScreenStack} />
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
function ChestScreenStack() {
  return (
        <ChestStack.Navigator>
          <ChestStack.Screen name="Chest" component={Chest} 
          options={{headerShown: false}}
          />
          <ChestStack.Screen name="Chest2" component={Chest2} 
          options={{headerShown: false}}
          />
        </ChestStack.Navigator>
  )
}
function AbsScreenStack() {
  return (
        <AbsStack.Navigator>
          <AbsStack.Screen name="Abs" component={Abs} 
          options={{headerShown: false}}
          />
          <AbsStack.Screen name="Abs2" component={Abs2} 
          options={{headerShown: false}}
          />
        </AbsStack.Navigator>
  )
}
function BicepsScreenStack() {
  return (
        <BicepsStack.Navigator>
          <BicepsStack.Screen name="Biceps" component={Biceps} 
          options={{headerShown: false}}
          />
          <BicepsStack.Screen name="Biceps2" component={Biceps2} 
          options={{headerShown: false}}
          />
        </BicepsStack.Navigator>
  )
}




export default HomeScreenStack;