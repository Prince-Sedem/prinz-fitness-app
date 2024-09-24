import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Biceps2 from '../Biceps2';
import MountainClimber from '../Abs2Details/MountainClimber';
import Burpees from './Burpees';
import PushUpsHome from '../Abs2Details/PushUpsHome';




const Biceps2DetailsStack = createNativeStackNavigator(); 


function Biceps2DetailsScreenStack() {
    return (
          <Biceps2DetailsStack.Navigator>
            <Biceps2DetailsStack.Screen name="Biceps2" component={Biceps2} 
            options={{headerShown: false}}
            />
            <Biceps2DetailsStack.Screen name="MountainClimber" component={MountainClimber} 
            options={{headerShown: false}}
            />
            <Biceps2DetailsStack.Screen name="Burpees" component={Burpees} 
            options={{headerShown: false}}
            />
            <Biceps2DetailsStack.Screen name="PushUpsHome" component={PushUpsHome} 
            options={{headerShown: false}}
            />
          </Biceps2DetailsStack.Navigator>
    )
}

export default Biceps2DetailsScreenStack;  