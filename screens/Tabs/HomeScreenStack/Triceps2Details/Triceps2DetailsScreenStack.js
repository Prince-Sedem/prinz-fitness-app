import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Triceps2 from '../Triceps2';
import Burpees from '../Biceps2Details/Burpees';
import PushUps from '../Chest2Details/PushUps';
import InclinePushUps from '../Chest2Details/InclinePushUps';
import DeclinePushUps from '../Chest2Details/DeclinePushUps';
import CloseGripPushUps from '../Chest2Details/CloseGripPushUps';
import CobraPushUps from '../Abs2Details/CobraPushUps';
import MountainClimber from '../Abs2Details/MountainClimber';
import WheelRoller from '../Abs2Details/WheelRoller';
import DipsHome from '../Chest2Details/DipsHome';




const Triceps2DetailsStack = createNativeStackNavigator(); 


function Triceps2DetailsScreenStack() {
    return (
          <Triceps2DetailsStack.Navigator>
            <Triceps2DetailsStack.Screen name="Triceps2" component={Triceps2} 
            options={{headerShown: false}}
            />
            <Triceps2DetailsStack.Screen name="Burpees" component={Burpees} 
            options={{headerShown: false}}
            />
            <Triceps2DetailsStack.Screen name="PushUps" component={PushUps} 
            options={{headerShown: false}}
            />
            <Triceps2DetailsStack.Screen name="InclinePushUps" component={InclinePushUps} 
            options={{headerShown: false}}
            />
            <Triceps2DetailsStack.Screen name="DeclinePushUps" component={DeclinePushUps} 
            options={{headerShown: false}}
            />
            <Triceps2DetailsStack.Screen name="CloseGripPushUps" component={CloseGripPushUps} 
            options={{headerShown: false}}
            />
            <Triceps2DetailsStack.Screen name="CobraPushUps" component={CobraPushUps} 
            options={{headerShown: false}}
            />
            <Triceps2DetailsStack.Screen name="MountainClimber" component={MountainClimber} 
            options={{headerShown: false}}
            />
            <Triceps2DetailsStack.Screen name="WheelRoller" component={WheelRoller} 
            options={{headerShown: false}}
            />
            <Triceps2DetailsStack.Screen name="DipsHome" component={DipsHome} 
            options={{headerShown: false}}
            />
          </Triceps2DetailsStack.Navigator>
    )
}

export default Triceps2DetailsScreenStack;  