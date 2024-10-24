import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import ChestDetailsStack from './ChestDetails/ChestDetailsScreenStack';
import Chest2DetailsStack from './Chest2Details/Chest2DetailsScreenStack';
import AbsDetailsStack from './AbsDetails/AbsDetailsScreenStack';
import Abs2DetailsStack from './Abs2Details/Abs2DetailsScreenStack';
import BicepsDetailsStack from './BicepsDetails/BicepsDetailsScreenStack';
import Biceps2DetailsStack from './Biceps2Details/Biceps2DetailsScreenStack';
import TricepsDetailsStack from './TricepsDetails/TricepsDetailsScreenStack';
import Triceps2DetailsStack from './Triceps2Details/Triceps2DetailsScreenStack';
import BackDetailsStack from './BackDetails/BackDetailsScreenStack';
import Back2DetailsStack from './Back2Details/Back2DetailsScreenStack';
import ShouldersDetailsStack from './ShouldersDetails/ShouldersDetailsScreenStack';
import Shoulders2DetailsStack from './Shoulders2Details/Shoulders2DetailsScreenStack';
import ForearmsDetailsStack from './ForearmsDetails/ForearmsDetailsScreenStack';
import Forearms2DetailsStack from './Forearms2Details/Forearms2DetailsScreenStack';
import ButtockDetailsStack from './ButtocksDetails/ButtocksDetailsScreenStack';
import Buttock2DetailsStack from './Buttocks2Details/Buttocks2DetailsScreenStack';
import LegsDetailsStack from './LegsDetails/LegsDetailsScreenStack';
import Legs2DetailsStack from './Legs2Details/Legs2DetailsScreenStack';
import CalfsDetailsStack from './CalfsDetails/CalfsDetailsScreenStack'
import Calfs2DetailsStack from './Calfs2Details/Calfs2DetailsScreenStack'



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
          <ChestStack.Screen name="ChestEx" component={ChestDetailsStack} 
          options={{headerShown: false}}
          />
          <ChestStack.Screen name="ChestEx2" component={Chest2DetailsStack} 
          options={{headerShown: false}}
          />
        </ChestStack.Navigator>
  )
}
function AbsScreenStack() {
  return (
        <AbsStack.Navigator>
          <AbsStack.Screen name="AbsEx" component={AbsDetailsStack} 
          options={{headerShown: false}}
          />
          <AbsStack.Screen name="AbsEx2" component={Abs2DetailsStack} 
          options={{headerShown: false}}
          />
        </AbsStack.Navigator>
  )
}
function BicepsScreenStack() {
  return (
        <BicepsStack.Navigator>
          <BicepsStack.Screen name="BicepsEx" component={BicepsDetailsStack} 
          options={{headerShown: false}}
          />
          <BicepsStack.Screen name="BicepsEx2" component={Biceps2DetailsStack} 
          options={{headerShown: false}}
          />
        </BicepsStack.Navigator>
  )
}
function TricepsScreenStack() {
  return (
        <TricepsStack.Navigator>
          <TricepsStack.Screen name="TricepsEx" component={TricepsDetailsStack} 
          options={{headerShown: false}}
          />
          <TricepsStack.Screen name="TricepsEx2" component={Triceps2DetailsStack} 
          options={{headerShown: false}}
          />
        </TricepsStack.Navigator>
  )
}
function BackScreenStack() {  
  return (
        <BackStack.Navigator>
          <BackStack.Screen name="BackEx" component={BackDetailsStack} 
          options={{headerShown: false}}
          />
          <BackStack.Screen name="BackEx2" component={Back2DetailsStack} 
          options={{headerShown: false}}
          />
        </BackStack.Navigator>
  )
}
function ShouldersScreenStack() {
  return (
        <ShouldersStack.Navigator>
          <ShouldersStack.Screen name="ShouldersEx" component={ShouldersDetailsStack} 
          options={{headerShown: false}}
          />
          <ShouldersStack.Screen name="ShouldersEx2" component={Shoulders2DetailsStack} 
          options={{headerShown: false}}
          />
        </ShouldersStack.Navigator>
  )
}
function ForearmsScreenStack() {
  return (
        <ForearmsStack.Navigator>
          <ForearmsStack.Screen name="ForearmsEx" component={ForearmsDetailsStack} 
          options={{headerShown: false}}
          />
          <ForearmsStack.Screen name="ForearmsEx2" component={Forearms2DetailsStack} 
          options={{headerShown: false}}
          />
        </ForearmsStack.Navigator>
  )
}
function ButtocksScreenStack() {
  return (
        <ButtocksStack.Navigator>
          <ButtocksStack.Screen name="ButtocksEx" component={ButtockDetailsStack} 
          options={{headerShown: false}}
          />
          <ButtocksStack.Screen name="ButtocksEx2" component={Buttock2DetailsStack} 
          options={{headerShown: false}}
          />
        </ButtocksStack.Navigator>
  )
}
function LegsScreenStack() {
  return (
        <LegsStack.Navigator>
          <LegsStack.Screen name="LegsEx" component={LegsDetailsStack} 
          options={{headerShown: false}}
          />
          <LegsStack.Screen name="LegsEx2" component={Legs2DetailsStack} 
          options={{headerShown: false}}
          />
        </LegsStack.Navigator>
  )
}


function CalfsScreenStack() {
  return (
        <CalfsStack.Navigator>
          <CalfsStack.Screen name="CalfsEx" component={CalfsDetailsStack} 
          options={{headerShown: false}}
          />
          <CalfsStack.Screen name="CalfsEx2" component={Calfs2DetailsStack} 
          options={{headerShown: false}}
          />
        </CalfsStack.Navigator>
  )
}




export default HomeScreenStack;