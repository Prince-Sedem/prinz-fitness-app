import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Back2 from '../Back2';
import PlankArmLifts from './PlankArmLifts';
import JumpingJack from './JumpingJack';
import Burpees from '../Biceps2Details/Burpees';
import Superman from './Superman';
import NormalPlanksHome from '../Abs2Details/NormalPlanksHome';
import SidePlanksHome from '../Abs2Details/SidePlanksHome';
import PushUpsHome from '../Abs2Details/PushUpsHome';
import InclinePushUps from '../Chest2Details/InclinePushUps';
import DeclinePushUps from '../Chest2Details/DeclinePushUps';
import CloseGripPushUps from '../Chest2Details/CloseGripPushUps';
import CobraPushUps from '../Abs2Details/CobraPushUps';
import MountainClimber from '../Abs2Details/MountainClimber';
import WheelRoller from '../Abs2Details/WheelRoller';





const Back2DetailsStack = createNativeStackNavigator(); 


function Back2DetailsScreenStack() {
    return (
          <Back2DetailsStack.Navigator>
            <Back2DetailsStack.Screen name="Back2" component={Back2} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="PlankArmLifts" component={PlankArmLifts} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="JumpingJack" component={JumpingJack} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="Burpees" component={Burpees} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="Superman" component={Superman} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="NormalPlanksHome" component={NormalPlanksHome} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="SidePlanksHome" component={SidePlanksHome} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="PushUpsHome" component={PushUpsHome} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="InclinePushUps" component={InclinePushUps} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="DeclinePushUps" component={DeclinePushUps} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="CloseGripPushUps" component={CloseGripPushUps} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="CobraPushUps" component={CobraPushUps} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="MountainClimber" component={MountainClimber} 
            options={{headerShown: false}}
            />
            <Back2DetailsStack.Screen name="WheelRoller" component={WheelRoller} 
            options={{headerShown: false}}
            />
             
          </Back2DetailsStack.Navigator>
    )
}

export default Back2DetailsScreenStack;  
