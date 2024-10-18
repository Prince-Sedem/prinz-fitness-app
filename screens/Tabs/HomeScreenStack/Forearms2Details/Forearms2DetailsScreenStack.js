import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forearms2 from '../Forearms2';
import WristCircles from './WristCircles';
import Burpees from '../Biceps2Details/Burpees';








const Forearms2DetailsStack = createNativeStackNavigator(); 


function Forearms2DetailsScreenStack() {
    return (
          <Forearms2DetailsStack.Navigator>
            <Forearms2DetailsStack.Screen name="Forearms2" component={Forearms2} 
            options={{headerShown: false}}
            />
            <Forearms2DetailsStack.Screen name="WristCircles" component={WristCircles} 
            options={{headerShown: false}}
            />
            <Forearms2DetailsStack.Screen name="Burpees" component={Burpees} 
            options={{headerShown: false}}
            />
            
          </Forearms2DetailsStack.Navigator>
    )
}

export default Forearms2DetailsScreenStack;  