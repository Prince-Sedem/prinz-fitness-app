import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chest from '../Chest';
import BenchPress from './BenchPress';
import InclinePress from './InclinePress';
import DeclinePress from './DeclinePress';
import CloseGripBenchPress from './CloseGripBenchPress';
import Dips from './Dips';
import DumbbellPress from './DumbbellPress';
import DumbbellInclinePress from './DumbbellInclinePress';
import DumbbellDeclinePress from './DumbbellDeclinePress';
import DumbbellFly from './DumbbellFly';
import CableStandingChestPress from './CableStandingChestPress';
import CableMiddleFly from './CableMiddleFly';
import CableLowFly from './CableLowFly';
import CableCrossoverFly from './CableCrossoverFly';
import LeverPecDeckFly from './LeverPecDeckFly';
import PushupsGym from './PushupsGym';


const ChestDetailsStack = createNativeStackNavigator();


function ChestDetailsScreenStack() {
    return (
          <ChestDetailsStack.Navigator>
            <ChestDetailsStack.Screen name="Chest" component={Chest} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="BenchPress" component={BenchPress} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="InclinePress" component={InclinePress} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="DeclinePress" component={DeclinePress} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="CloseGripBenchPress" component={CloseGripBenchPress} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="Dips" component={Dips} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="DumbbellPress" component={DumbbellPress} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="DumbbellInclinePress" component={DumbbellInclinePress} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="DumbbellDeclinePress" component={DumbbellDeclinePress} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="DumbbellFly" component={DumbbellFly} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="CableStandingChestPress" component={CableStandingChestPress} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="CableMiddleFly" component={CableMiddleFly} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="CableLowFly" component={CableLowFly} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="CableCrossoverFly" component={CableCrossoverFly} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="LeverPecDeckFly" component={LeverPecDeckFly} 
            options={{headerShown: false}}
            />
            <ChestDetailsStack.Screen name="PushupsGym" component={PushupsGym} 
            options={{headerShown: false}}
            />

          </ChestDetailsStack.Navigator>
    )
}

export default ChestDetailsScreenStack;  