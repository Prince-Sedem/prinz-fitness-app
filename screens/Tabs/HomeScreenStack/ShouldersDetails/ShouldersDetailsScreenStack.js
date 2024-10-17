import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shoulders from '../Shoulders';
import SeatedMachineShoulderPress from './SeatedMachineShoulderPress';
import NautilusLateralRaise from './NautilusLateralRaise';
import OneArmCableFrontRaise from './OneArmCableFrontRaise';
import CableUprightRow from './CableUprightRow';
import BentOverCableLateralRaise from './BentOverCableLateralRaise';
import CableLeaningLateralRaise from './CableLeaningLateralRaise';
import RearDeltRopePull from './RearDeltRopePull';
import DumbbellRearDeltRow from './DumbbellRearDeltRow';
import DumbbellStandingPress from './DumbbellStandingPress';
import DumbbellOneArmStandingPress from './DumbbellOneArmStandingPress';
import DumbbellSeatedPress from './DumbbellSeatedPress';
import DumbbellOneArmSeatedPress from './DumbbellOneArmSeatedPress';
import BarbellFrontRaises from './BarbellFrontRaises';
import BarbellFrontShoulderPress from './BarbellFrontShoulderPress';
import BarbellBackShoulderPress from './BarbellBackShoulderPress';
import DumbbellArnoldPress from './DumbbellArnoldPress';
import WeightedFrontRaise from './WeightedFrontRaise';






const ShouldersDetailsStack = createNativeStackNavigator(); 


function ShouldersDetailsScreenStack() {
    return (
          <ShouldersDetailsStack.Navigator>
            <ShouldersDetailsStack.Screen name="Shoulders" component={Shoulders} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="SeatedMachineShoulderPress" component={SeatedMachineShoulderPress} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="NautilusLateralRaise" component={NautilusLateralRaise} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="OneArmCableFrontRaise" component={OneArmCableFrontRaise} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="CableUprightRow" component={CableUprightRow} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="BentOverCableLateralRaise" component={BentOverCableLateralRaise} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="CableLeaningLateralRaise" component={CableLeaningLateralRaise} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="RearDeltRopePull" component={RearDeltRopePull} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="DumbbellRearDeltRow" component={DumbbellRearDeltRow} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="DumbbellStandingPress" component={DumbbellStandingPress} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="DumbbellOneArmStandingPress" component={DumbbellOneArmStandingPress} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="DumbbellSeatedPress" component={DumbbellSeatedPress} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="DumbbellOneArmSeatedPress" component={DumbbellOneArmSeatedPress} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="BarbellFrontRaises" component={BarbellFrontRaises} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="BarbellFrontShoulderPress" component={BarbellFrontShoulderPress} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="BarbellBackShoulderPress0" component={BarbellBackShoulderPress} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="DumbbellArnoldPress" component={DumbbellArnoldPress} 
            options={{headerShown: false}}
            />
            <ShouldersDetailsStack.Screen name="WeightedFrontRaise" component={WeightedFrontRaise} 
            options={{headerShown: false}}
            />
           
          </ShouldersDetailsStack.Navigator>
    )
}

export default ShouldersDetailsScreenStack;  