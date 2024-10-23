import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calfs from '../Calfs';
import WalkingOnTreadmill from './WalkingOnTreadmill';
import BarbellStandingLegCalfRaise from './BarbellStandingLegCalfRaise';
import BarbellSeatedCalfRaise from './BarbellSeatedCalfRaise';
import DumbbellSeatedCalfRaise from './DumbbellSeatedCalfRaise';
import HackCalfRaise from './HackCalfRaise';
import CableCalfRaise from './CableCalfRaise';
import SeatedCalfRaise from './SeatedCalfRaise';
import OneLegToeRaise from './OneLegToeRaise';












const CalfsDetailsStack = createNativeStackNavigator(); 


function CalfsDetailsScreenStack() {
    return (
          <CalfsDetailsStack.Navigator>
            <CalfsDetailsStack.Screen name="Calfs" component={Calfs} 
            options={{headerShown: false}}
            />
            <CalfsDetailsStack.Screen name="WalkingOnTreadmill" component={WalkingOnTreadmill} 
            options={{headerShown: false}}
            />
            <CalfsDetailsStack.Screen name="BarbellStandingLegCalfRaise" component={BarbellStandingLegCalfRaise} 
            options={{headerShown: false}}
            />
            <CalfsDetailsStack.Screen name="BarbellSeatedCalfRaise" component={BarbellSeatedCalfRaise} 
            options={{headerShown: false}}
            />
            <CalfsDetailsStack.Screen name="DumbbellSeatedCalfRaise" component={DumbbellSeatedCalfRaise} 
            options={{headerShown: false}}
            />
            <CalfsDetailsStack.Screen name="HackCalfRaise" component={HackCalfRaise} 
            options={{headerShown: false}}
            />
            <CalfsDetailsStack.Screen name="CableCalfRaise" component={CableCalfRaise} 
            options={{headerShown: false}}
            />
            <CalfsDetailsStack.Screen name="SeatedCalfRaise" component={SeatedCalfRaise} 
            options={{headerShown: false}}
            />
            <CalfsDetailsStack.Screen name="OneLegToeRaise" component={OneLegToeRaise} 
            options={{headerShown: false}}
            />

          </CalfsDetailsStack.Navigator>
    )
}

export default CalfsDetailsScreenStack;  