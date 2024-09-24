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
import Triceps2 from './Triceps2';
import Back2 from "./Back2";
import Shoulders2 from './Shoulders2';
import Forearms2 from './Forearms2';
import Buttocks2 from './Buttocks2';
import Legs2 from './Legs2';
import Calfs2 from './Calfs2';
import ChestDetailsStack from './ChestDetails/ChestDetailsScreenStack';
import Chest2DetailsStack from './Chest2Details/Chest2DetailsScreenStack';
import AbsDetailsStack from './AbsDetails/AbsDetailsScreenStack';
import Abs2DetailsStack from './Abs2Details/Abs2DetailsScreenStack';
import BicepsDetailsStack from './BicepsDetails/BicepsDetailsScreenStack';
import Biceps2DetailsStack from './Biceps2Details/Biceps2DetailsScreenStack';


const HomeStack = createNativeStackNavigator();
const ChestStack = createNativeStackNavigator();
const AbsStack = createNativeStackNavigator();
const BicepsStack = createNativeStackNavigator();
const TricepsStack = createNativeStackNavigator();
const BackStack = createNativeStackNavigator();
const ShouldersStack = createNativeStackNavigator();
const ForearmsStack = createNativeStackNavigator();
const ButtocksStack = createNativeStackNavigator();
const CalfsStack = createNativeStackNavigator();
const LegsStack = createNativeStackNavigator();

function HomeScreenStack() {
  return (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="Chest" component={ChestScreenStack} />
          <HomeStack.Screen name="Abs" component={AbsScreenStack} />
          <HomeStack.Screen name="Biceps" component={BicepsScreenStack} />
          <HomeStack.Screen name="Triceps" component={TricepsScreenStack} />
          <HomeStack.Screen name="Back" component={BackScreenStack} />
          <HomeStack.Screen name="Shoulders" component={ShouldersScreenStack} />
          <HomeStack.Screen name="Forearms" component={ForearmsScreenStack} />
          <HomeStack.Screen name="Buttocks" component={ButtocksScreenStack} />
          <HomeStack.Screen name="Legs" component={LegsScreenStack} />
          <HomeStack.Screen name="Calfs" component={CalfsScreenStack} />  
        </HomeStack.Navigator>
  )
}
function ChestScreenStack() {
  return (
        <ChestStack.Navigator>
          <ChestStack.Screen name="Chest" component={ChestDetailsStack} 
          options={{headerShown: false}}
          />
          <ChestStack.Screen name="Chest2" component={Chest2DetailsStack} 
          options={{headerShown: false}}
          />
        </ChestStack.Navigator>
  )
}
function AbsScreenStack() {
  return (
        <AbsStack.Navigator>
          <AbsStack.Screen name="Abs" component={AbsDetailsStack} 
          options={{headerShown: false}}
          />
          <AbsStack.Screen name="Abs2" component={Abs2DetailsStack} 
          options={{headerShown: false}}
          />
        </AbsStack.Navigator>
  )
}
function BicepsScreenStack() {
  return (
        <BicepsStack.Navigator>
          <BicepsStack.Screen name="Biceps" component={BicepsDetailsStack} 
          options={{headerShown: false}}
          />
          <BicepsStack.Screen name="Biceps2" component={Biceps2DetailsStack} 
          options={{headerShown: false}}
          />
        </BicepsStack.Navigator>
  )
}
function TricepsScreenStack() {
  return (
        <TricepsStack.Navigator>
          <TricepsStack.Screen name="Triceps" component={Triceps} 
          options={{headerShown: false}}
          />
          <TricepsStack.Screen name="Triceps2" component={Triceps2} 
          options={{headerShown: false}}
          />
        </TricepsStack.Navigator>
  )
}
function BackScreenStack() {
  return (
        <BackStack.Navigator>
          <BackStack.Screen name="Back" component={Back} 
          options={{headerShown: false}}
          />
          <BackStack.Screen name="Back2" component={Back2} 
          options={{headerShown: false}}
          />
        </BackStack.Navigator>
  )
}
function ShouldersScreenStack() {
  return (
        <ShouldersStack.Navigator>
          <ShouldersStack.Screen name="Shoulders" component={Shoulders} 
          options={{headerShown: false}}
          />
          <ShouldersStack.Screen name="Shoulders2" component={Shoulders2} 
          options={{headerShown: false}}
          />
        </ShouldersStack.Navigator>
  )
}
function ForearmsScreenStack() {
  return (
        <ForearmsStack.Navigator>
          <ForearmsStack.Screen name="Forearms" component={Forearms} 
          options={{headerShown: false}}
          />
          <ForearmsStack.Screen name="Forearms2" component={Forearms2} 
          options={{headerShown: false}}
          />
        </ForearmsStack.Navigator>
  )
}
function ButtocksScreenStack() {
  return (
        <ButtocksStack.Navigator>
          <ButtocksStack.Screen name="Buttocks" component={Buttocks} 
          options={{headerShown: false}}
          />
          <ButtocksStack.Screen name="Buttocks2" component={Buttocks2} 
          options={{headerShown: false}}
          />
        </ButtocksStack.Navigator>
  )
}
function LegsScreenStack() {
  return (
        <LegsStack.Navigator>
          <LegsStack.Screen name="Legs" component={Legs} 
          options={{headerShown: false}}
          />
          <LegsStack.Screen name="Legs2" component={Legs2} 
          options={{headerShown: false}}
          />
        </LegsStack.Navigator>
  )
}


function CalfsScreenStack() {
  return (
        <CalfsStack.Navigator>
          <CalfsStack.Screen name="Calfs" component={Calfs} 
          options={{headerShown: false}}
          />
          <CalfsStack.Screen name="Calfs2" component={Calfs2} 
          options={{headerShown: false}}
          />
        </CalfsStack.Navigator>
  )
}




export default HomeScreenStack;