import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calfs2 from '../Calfs2';
import LyingCalfStretch from './LyingCalfStretch';
import Walking from '../Legs2Details/Walking';
import Jogging from '../Legs2Details/Jogging';
import HighKnees from '../Legs2Details/HighKnees';
import Lunge from '../Buttocks2Details/Lunge';
import SquatJump from '../Buttocks2Details/SquatJump';
import Squats from '../Buttocks2Details/Squats';
import StepUps from '../Buttocks2Details/StepUps';
import MountainClimber from '../Abs2Details/MountainClimber';
import JumpingJack from '../Back2Details/JumpingJack';
import Burpees from '../Biceps2Details/Burpees';
import OneLegSquatHome from '../Legs2Details/OneLegSquatHome';
import StandingCalfRaise from './StandingCalfRaise'












const Calfs2DetailsStack = createNativeStackNavigator(); 


function Calfs2DetailsScreenStack() {
    return (
          <Calfs2DetailsStack.Navigator>
            <Calfs2DetailsStack.Screen name="Calfs2" component={Calfs2} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="LyingCalfStretch" component={LyingCalfStretch} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="Walking" component={Walking} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="Jogging" component={Jogging} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="HighKnees" component={HighKnees} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="Lunge" component={Lunge} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="SquatJump" component={SquatJump} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="Squats" component={Squats} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="StepUps" component={StepUps} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="MountainClimber" component={MountainClimber} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="JumpingJack" component={JumpingJack} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="Burpees" component={Burpees} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="OneLegSquatHome" component={OneLegSquatHome} 
            options={{headerShown: false}}
            />
            <Calfs2DetailsStack.Screen name="StandingCalfRaise" component={StandingCalfRaise} 
            options={{headerShown: false}}
            />

          </Calfs2DetailsStack.Navigator>
    )
}

export default Calfs2DetailsScreenStack;  