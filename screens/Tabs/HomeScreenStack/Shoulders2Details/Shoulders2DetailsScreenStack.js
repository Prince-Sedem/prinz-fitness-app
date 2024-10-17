import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shoulders2 from '../Shoulders2';
import ShoulderShrug from './ShoulderShrug';
import ArmCircle from './ArmCircle';
import PlankArmLifts from '../Back2Details/PlankArmLifts';
import Burpees from '../Biceps2Details/Burpees';
import JumpingJack from '../Back2Details/JumpingJack';
import DipsHome from '../Chest2Details/DipsHome';
import PushUpsHome from '../Abs2Details/PushUpsHome';
import InclinePushUps from '../Chest2Details/InclinePushUps';
import DeclinePushUps from '../Chest2Details/DeclinePushUps';
import CloseGripPushUps from '../Chest2Details/CloseGripPushUps';
import CobraPushUps from '../Abs2Details/CobraPushUps';
import MountainClimber from '../Abs2Details/MountainClimber';
import WheelRoller from '../Abs2Details/WheelRoller';








const Shoulders2DetailsStack = createNativeStackNavigator(); 


function Shoulders2DetailsScreenStack() {
    return (
          <Shoulders2DetailsStack.Navigator>
            <Shoulders2DetailsStack.Screen name="Shoulders2" component={Shoulders2} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="ShoulderShrug" component={ShoulderShrug} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="ArmCircle" component={ArmCircle} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="PlankArmLifts" component={PlankArmLifts} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="Burpees" component={Burpees} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="JumpingJack" component={JumpingJack} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="DipsHome" component={DipsHome} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="PushUpsHome" component={PushUpsHome} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="InclinePushUps" component={InclinePushUps} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="DeclinePushUps" component={DeclinePushUps} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="CloseGripPushUps" component={CloseGripPushUps} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="CobraPushUps" component={CobraPushUps} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="MountainClimber" component={MountainClimber} 
            options={{headerShown: false}}
            />
            <Shoulders2DetailsStack.Screen name="WheelRoller" component={WheelRoller} 
            options={{headerShown: false}}
            />
           
             
          </Shoulders2DetailsStack.Navigator>
    )
}

export default Shoulders2DetailsScreenStack;  