import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Legs from '../Legs';
import SumoSquats from './SumoSquats';
import AngledLegPress from './AngledLegPress';
import DeadLifts from './DeadLifts';
import BarbellLunge from '../ButtocksDetails/BarbellLunge';
import DumbellLunge from '../ButtocksDetails/DumbellLunge';
import SeatedMachineHip from '../ButtocksDetails/SeatedMachineHip';
import OneLegSquat from '../ButtocksDetails/OneLegSquat';
import DumbellPressSquat from './DumbellPressSquat';
import BarbellFullSquat from '../ButtocksDetails/BarbellFullSquat';
import SmithMachineSquat from '../ButtocksDetails/SmithMachineSquat';
import FrontSquat from './FrontSquat';
import HackSquats from './HackSquats';
import DumbbellStepUps from '../ButtocksDetails/DumbbellStepUps';











const LegsDetailsStack = createNativeStackNavigator(); 


function LegsDetailsScreenStack() {
    return (
          <LegsDetailsStack.Navigator>
            <LegsDetailsStack.Screen name="Legs" component={Legs} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="SumoSquats" component={SumoSquats} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="AngledLegPress" component={AngledLegPress} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="DeadLifts" component={DeadLifts} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="BarbellLunge" component={BarbellLunge} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="DumbellLunge" component={DumbellLunge} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="SeatedMachineHip" component={SeatedMachineHip} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="OneLegSquat" component={OneLegSquat} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="DumbellPressSquat" component={DumbellPressSquat} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="BarbellFullSquat" component={BarbellFullSquat} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="SmithMachineSquat" component={SmithMachineSquat} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="FrontSquat" component={FrontSquat} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="HackSquats" component={HackSquats} 
            options={{headerShown: false}}
            />
            <LegsDetailsStack.Screen name="DumbbellStepUps" component={DumbbellStepUps} 
            options={{headerShown: false}}
            />
            
          </LegsDetailsStack.Navigator>
    )
}

export default LegsDetailsScreenStack;  