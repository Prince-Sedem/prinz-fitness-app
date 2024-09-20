import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chest2 from '../Chest2';
import PushUps from './PushUps';
import InclinePushUps from './InclinePushUps';
import DeclinePushUps from './DeclinePushUps';
import CloseGripPushUps from './CloseGripPushUps';
import WideArmPushUps from './WideArmPushUps';
import OneArmPushUps from './OneArmPushUps';
import ClappingPushUps from './ClappingPushUps';
import DipsHome from './DipsHome';


const Chest2DetailsStack = createNativeStackNavigator(); 


function Chest2DetailsScreenStack() {
    return (
          <Chest2DetailsStack.Navigator>
            <Chest2DetailsStack.Screen name="Chest2" component={Chest2} 
            options={{headerShown: false}}
            />
            <Chest2DetailsStack.Screen name="PushUps" component={PushUps} 
            options={{headerShown: false}}
            />
            <Chest2DetailsStack.Screen name="InclinePushUps" component={InclinePushUps} 
            options={{headerShown: false}}
            />
            <Chest2DetailsStack.Screen name="DeclinePushUps" component={DeclinePushUps} 
            options={{headerShown: false}}
            />
            <Chest2DetailsStack.Screen name="CloseGripPushUps" component={CloseGripPushUps} 
            options={{headerShown: false}}
            />
            <Chest2DetailsStack.Screen name="WideArmPushUps" component={WideArmPushUps} 
            options={{headerShown: false}}
            />
            <Chest2DetailsStack.Screen name="OneArmPushUps" component={OneArmPushUps} 
            options={{headerShown: false}}
            />
            <Chest2DetailsStack.Screen name="ClappingPushUps" component={ClappingPushUps} 
            options={{headerShown: false}}
            />
            <Chest2DetailsStack.Screen name="DipsHome" component={DipsHome} 
            options={{headerShown: false}}
            />


          </Chest2DetailsStack.Navigator>
    )
}

export default Chest2DetailsScreenStack;  