import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Abs from '../Abs';
import CableCrunches from './CableCrunches';
import WeightCrunch from './WeightCrunch';
import DumbbellSideBends from './DumbbellSideBends';
import HangingLegsRaises from './HangingLegsRaises';
import BenchSideBends from './BenchSideBends';
import Crunches from './Crunches';
import PelvicTilt from './PelvicTilt';
import SitUps from './SitUps';
import TwistCrunch from './TwistCrunch';
import NormalPlanks from './NormalPlanks';
import SidePlanks from './SidePlanks';
import AbdominalBicycle from './AbdominalBicycle';



const AbsDetailsStack = createNativeStackNavigator(); 


function AbsDetailsScreenStack() {
    return (
          <AbsDetailsStack.Navigator>
            <AbsDetailsStack.Screen name="Abs" component={Abs} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="CableCrunches" component={CableCrunches} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="WeightCrunch" component={WeightCrunch} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="DumbbellSideBends" component={DumbbellSideBends} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="HangingLegsRaises" component={HangingLegsRaises} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="BenchSideBends" component={BenchSideBends} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="Crunches" component={Crunches} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="PelvicTilt" component={PelvicTilt} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="SitUps" component={SitUps} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="TwistCrunch" component={TwistCrunch} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="NormalPlanks" component={NormalPlanks} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="SidePlanks" component={SidePlanks} 
            options={{headerShown: false}}
            />
            <AbsDetailsStack.Screen name="AbdominalBicycle" component={AbdominalBicycle} 
            options={{headerShown: false}}
            />
           
           


          </AbsDetailsStack.Navigator>
    )
}

export default AbsDetailsScreenStack;  