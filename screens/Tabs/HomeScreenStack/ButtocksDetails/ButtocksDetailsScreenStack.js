import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Buttocks from '../Buttocks'
import BarbellLunge from './BarbellLunge';
import DumbellLunge from './DumbellLunge';
import OneLegCableKickback from './OneLegCableKickback';
import StandingMachineHipAbductions from './StandingMachineHipAbductions';
import SeatedMachineHip from './SeatedMachineHip';
import OneLegSquat from './OneLegSquat';
import HipThrust from './HipThrust';
import BarbellFullSquat from './BarbellFullSquat';
import SmithMachineSquat from './SmithMachineSquat';
import DumbbellStepUps from './DumbbellStepUps';









const ButtocksDetailsStack = createNativeStackNavigator(); 


function ButtocksDetailsScreenStack() {
    return (
          <ButtocksDetailsStack.Navigator>
            <ButtocksDetailsStack.Screen name="Buttocks" component={Buttocks} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="BarbellLunge" component={BarbellLunge} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="DumbellLunge" component={DumbellLunge} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="OneLegCableKickback" component={OneLegCableKickback} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="StandingMachineHipAbductions" component={StandingMachineHipAbductions} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="SeatedMachineHip" component={SeatedMachineHip} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="OneLegSquat" component={OneLegSquat} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="HipThrust" component={HipThrust} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="BarbellFullSquat" component={BarbellFullSquat} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="SmithMachineSquat" component={SmithMachineSquat} 
            options={{headerShown: false}}
            />
            <ButtocksDetailsStack.Screen name="DumbbellStepUps" component={DumbbellStepUps} 
            options={{headerShown: false}}
            />
            
          </ButtocksDetailsStack.Navigator>
    )
}

export default ButtocksDetailsScreenStack;  