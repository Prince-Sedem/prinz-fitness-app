import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Back from '../Back';
import ChinUp from './ChinUp';
import PullUps from './PullUps';
import LatPullDown from './LatPullDown';
import BackLatPullDown from './BackLatPullDown';
import BarbellShrug from './BarbellShrug';
import DumbbellShrug from './DumbbellShrug';
import BarbellPullOver from './BarbellPullOver';
import StraightArmLatPullDowns from './StraightArmLatPullDowns';
import RopeLatPullDowns from './RopeLatPullDowns';
import SeatedCableRows from './SeatedCableRows';
import BentOverRow from './BentOverRow';
import OneArmDumbbellRows from './OneArmDumbbellRows';
import RearPullUps from './RearPullUps';
import InvertedRow from './InvertedRow';
import VbarLatPullDown from './VbarLatPullDown';






const BackDetailsStack = createNativeStackNavigator(); 


function BackDetailsScreenStack() {
    return (
          <BackDetailsStack.Navigator>
            <BackDetailsStack.Screen name="Back" component={Back} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="ChinUp" component={ChinUp} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="PullUps" component={PullUps} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="LatPullDown" component={LatPullDown} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="BackLatPullDown" component={BackLatPullDown} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="BarbellShrug" component={BarbellShrug} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="DumbbellShrug" component={DumbbellShrug} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="BarbellPullOver" component={BarbellPullOver} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="StraightArmLatPullDowns" component={StraightArmLatPullDowns} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="RopeLatPullDowns" component={RopeLatPullDowns} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="SeatedCableRows" component={SeatedCableRows} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="BentOverRow" component={BentOverRow} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="OneArmDumbbellRows" component={OneArmDumbbellRows} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="RearPullUps" component={RearPullUps} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="InvertedRow" component={InvertedRow} 
            options={{headerShown: false}}
            />
            <BackDetailsStack.Screen name="VbarLatPullDown" component={VbarLatPullDown} 
            options={{headerShown: false}}
            />
            
            
          </BackDetailsStack.Navigator>
    )
}

export default BackDetailsScreenStack;  