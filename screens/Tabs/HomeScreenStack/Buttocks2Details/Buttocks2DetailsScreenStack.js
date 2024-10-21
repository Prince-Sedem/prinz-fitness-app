import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Buttocks2 from '../Buttocks2'
import Bridging from './Bridging';
import Lunge from './Lunge';
import SquatJump from './SquatJump';
import Squats from './Squats';
import FlutterKicks from './FlutterKicks';
import FloorHipExtension from './FloorHipExtension';
import LegRaise from './LegRaise';
import StepUps from './StepUps';
import MountainClimber from '../Abs2Details/MountainClimber';
import JumpingJack from '../Back2Details/JumpingJack';
import Superman from '../Back2Details/Superman';
import Burpees from '../Biceps2Details/Burpees';









const Buttocks2DetailsStack = createNativeStackNavigator(); 


function Buttocks2DetailsScreenStack() {
    return (
          <Buttocks2DetailsStack.Navigator>
            <Buttocks2DetailsStack.Screen name="Buttocks2" component={Buttocks2} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="Bridging" component={Bridging} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="Lunge" component={Lunge} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="SquatJump" component={SquatJump} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="Squats" component={Squats} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="FlutterKicks" component={FlutterKicks} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="FloorHipExtension" component={FloorHipExtension} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="LegRaise" component={LegRaise} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="StepUps" component={StepUps} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="MountainClimber" component={MountainClimber} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="JumpingJack" component={JumpingJack} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="Superman" component={Superman} 
            options={{headerShown: false}}
            />
            <Buttocks2DetailsStack.Screen name="Burpees" component={Burpees} 
            options={{headerShown: false}}
            />
           
            
          </Buttocks2DetailsStack.Navigator>
    )
}

export default Buttocks2DetailsScreenStack;  