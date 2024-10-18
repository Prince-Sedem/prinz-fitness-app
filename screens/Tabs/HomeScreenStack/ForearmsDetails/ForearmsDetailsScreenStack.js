import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forearms from '../Forearms';
import CableWristCurl from './CableWristCurl';
import BarbellWristCurl from './BarbellWristCurl';
import ReverseBarbellWristCurl from './ReverseBarbellWristCurl';
import BarbellBehindTheBackWristCurl from './BarbellBehindTheBackWristCurl';
import DumbbellHammerCurl from './DumbbellHammerCurl';
import DumbbellWristCurl from './DumbbellWristCurl';
import DumbbellReverseWristCurl from './DumbbellReverseWristCurl';







const ForearmsDetailsStack = createNativeStackNavigator(); 


function ForearmsDetailsScreenStack() {
    return (
          <ForearmsDetailsStack.Navigator>
            <ForearmsDetailsStack.Screen name="Forearms" component={Forearms} 
            options={{headerShown: false}}
            />
            <ForearmsDetailsStack.Screen name="CableWristCurl" component={CableWristCurl} 
            options={{headerShown: false}}
            />
            <ForearmsDetailsStack.Screen name="BarbellWristCurl" component={BarbellWristCurl} 
            options={{headerShown: false}}
            />
            <ForearmsDetailsStack.Screen name="ReverseBarbellWristCurl" component={ReverseBarbellWristCurl} 
            options={{headerShown: false}}
            />
            <ForearmsDetailsStack.Screen name="BarbellBehindTheBackWristCurl" component={BarbellBehindTheBackWristCurl} 
            options={{headerShown: false}}
            />
            <ForearmsDetailsStack.Screen name="DumbbellHammerCurl" component={DumbbellHammerCurl} 
            options={{headerShown: false}}
            />
            <ForearmsDetailsStack.Screen name="DumbbellWristCurl" component={DumbbellWristCurl} 
            options={{headerShown: false}}
            />
            <ForearmsDetailsStack.Screen name="DumbbellReverseWristCurl" component={DumbbellReverseWristCurl} 
            options={{headerShown: false}}
            />
            
          </ForearmsDetailsStack.Navigator>
    )
}

export default ForearmsDetailsScreenStack;  