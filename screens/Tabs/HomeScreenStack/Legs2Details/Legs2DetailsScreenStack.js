import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Legs2 from '../Legs2';
import SideLunges from './SideLunges';
import HighKnees from './HighKnees';
import Bridging from '../Buttocks2Details/Bridging';
import Lunge from '../Buttocks2Details/Lunge';
import Walking from './Walking';
import Jogging from './Jogging';
import SquatJump from '../Buttocks2Details/SquatJump';
import Squats from '../Buttocks2Details/Squats';
import FlutterKicks from '../Buttocks2Details/FlutterKicks';
import LegRaise from '../Buttocks2Details/LegRaise';
import StepUps from '../Buttocks2Details/StepUps';
import MountainClimber from '../Abs2Details/MountainClimber';
import JumpingJack from '../Back2Details/JumpingJack';
import Superman from '../Back2Details/Superman';
import Burpees from '../Biceps2Details/Burpees';
import OneLegSquatHome from './OneLegSquatHome';











const Legs2DetailsStack = createNativeStackNavigator(); 
 

function Legs2DetailsScreenStack() {
    return (
          <Legs2DetailsStack.Navigator>
            <Legs2DetailsStack.Screen name="Legs2" component={Legs2} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="SideLunges" component={SideLunges} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="HighKnees" component={HighKnees} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="Bridging" component={Bridging} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="Lunge" component={Lunge} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="Walking" component={Walking} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="Jogging" component={Jogging} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="SquatJump" component={SquatJump} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="Squats" component={Squats} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="FlutterKicks" component={FlutterKicks} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="LegRaise" component={LegRaise} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="StepUps" component={StepUps} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="MountainClimber" component={MountainClimber} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="JumpingJack" component={JumpingJack} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="Superman" component={Superman} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="Burpees" component={Burpees} 
            options={{headerShown: false}}
            />
            <Legs2DetailsStack.Screen name="OneLegSquatHome" component={OneLegSquatHome} 
            options={{headerShown: false}}
            />
            
          </Legs2DetailsStack.Navigator>
    )
}

export default Legs2DetailsScreenStack;  