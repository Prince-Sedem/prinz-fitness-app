import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Triceps from '../Triceps';
import CablePushDown from './CablePushDown';
import OneArmCablePushDown from './OneArmCablePushDown';
import ReverseCablePushDown from './ReverseCablePushDown';
import ReverseOneArmCablePushDown from './ReverseOneArmCablePushDown';
import WideGripPullUp from './WideGripPullUp';
import RopePushDown from './RopePushDown';
import Dips from '../ChestDetails/Dips';
import LyingTricepsExtension from './LyingTricepsExtension';
import DumbbellTricepsExtension from './DumbbellTricepsExtension';
import OneArmDumbbellTricepsExtension from './OneArmDumbbellTricepsExtension';
import SeatedDumbbellTricepsExtension from './SeatedDumbbellTricepsExtension';
import OverheadTricepsExtension from './OverheadTricepsExtension';
import DumbbellTricepsKickback from './DumbbellTricepsKickback';





const TricepsDetailsStack = createNativeStackNavigator(); 


function TricepsDetailsScreenStack() {
    return (
          <TricepsDetailsStack.Navigator>
            <TricepsDetailsStack.Screen name="Triceps" component={Triceps} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="CablePushDown" component={CablePushDown} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="OneArmCablePushDown" component={OneArmCablePushDown} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="ReverseCablePushDown" component={ReverseCablePushDown} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="ReverseOneArmCablePushDown" component={ReverseOneArmCablePushDown} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="WideGripPullUp" component={WideGripPullUp} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="RopePushDown" component={RopePushDown} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="Dips" component={Dips} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="LyingTricepsExtension" component={LyingTricepsExtension} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="DumbbellTricepsExtension" component={DumbbellTricepsExtension} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="OneArmDumbbellTricepsExtension" component={OneArmDumbbellTricepsExtension} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="SeatedDumbbellTricepsExtension" component={SeatedDumbbellTricepsExtension} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="OverheadTricepsExtension" component={OverheadTricepsExtension} 
            options={{headerShown: false}}
            />
            <TricepsDetailsStack.Screen name="DumbbellTricepsKickback" component={DumbbellTricepsKickback} 
            options={{headerShown: false}}
            />
          </TricepsDetailsStack.Navigator>
    )
}

export default TricepsDetailsScreenStack;  