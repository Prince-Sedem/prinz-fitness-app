import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Biceps from '../Biceps';
import BarbellCurl from './BarbellCurl';
import BarbellPreacherCurl from './BarbellPreacherCurl';
import OneArmDumbbellPreacherCurl from './OneArmDumbbellPreacherCurl';
import BicepsMachineCurl from './BicepsMachineCurl';
import StandingDumbbellCurl from './StandingDumbbellCurl';
import ConcentrationCurl from './ConcentrationCurl';
import StandingHammerCurl from './StandingHammerCurl';
import CableBicepsCurl from './CableBicepsCurl';
import CableOneArmCurl from './CableOneArmCurl';
import CableOneArmReverseCurl from './CableOneArmReverseCurl';
import ReverseGripBarbellCurl from './ReverseGripBarbellCurl';
import CableReserveCurl from './CableReserveCurl';
import CableStandingHighCurl from './CableStandingHighCurl';



const BicepsDetailsStack = createNativeStackNavigator(); 


function BicepsDetailsScreenStack() {
    return (
          <BicepsDetailsStack.Navigator>
            <BicepsDetailsStack.Screen name="Biceps" component={Biceps} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="BarbellCurl" component={BarbellCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="BarbellPreacherCurl" component={BarbellPreacherCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="OneArmDumbbellPreacherCurl" component={OneArmDumbbellPreacherCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="BicepsMachineCurl" component={BicepsMachineCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="StandingDumbbellCurl" component={StandingDumbbellCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="ConcentrationCurl" component={ConcentrationCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="StandingHammerCurl" component={StandingHammerCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="CableBicepsCurl" component={CableBicepsCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="CableOneArmCurl" component={CableOneArmCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="CableOneArmReverseCurl" component={CableOneArmReverseCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="ReverseGripBarbellCurl" component={ReverseGripBarbellCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="CableReserveCurl" component={CableReserveCurl} 
            options={{headerShown: false}}
            />
            <BicepsDetailsStack.Screen name="CableStandingHighCurl" component={CableStandingHighCurl} 
            options={{headerShown: false}}
            />
          </BicepsDetailsStack.Navigator>
    )
}

export default BicepsDetailsScreenStack;  