import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Abs2 from '../Abs2';
import CrunchesHome from './CrunchesHome';
import PelvicTiltHome from './PelvicTiltHome';
import SitUpsHome from './SitUpsHome';
import TwistCrunchHome from './TwistCrunchHome';
import NormalPlanksHome from './NormalPlanksHome';
import SidePlanksHome from './SidePlanksHome';
import PushUpsHome from './PushUpsHome';
import InclinePushUps from './InclinePushUps';
import DeclinePushUps from './DeclinePushUps';
import CloseGripPushUps from './CloseGripPushUps';
import CobraPushUps from './CobraPushUps';
import MountainClimber from './MountainClimber';
import WheelRoller from './WheelRoller';


const Abs2DetailsStack = createNativeStackNavigator(); 


function Abs2DetailsScreenStack() {
    return (
          <Abs2DetailsStack.Navigator>
            <Abs2DetailsStack.Screen name="Abs2" component={Abs2} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="CrunchesHome" component={CrunchesHome} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="PelvicTiltHome" component={PelvicTiltHome} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="SitUpsHome" component={SitUpsHome} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="TwistCrunchHome" component={TwistCrunchHome} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="NormalPlanksHome" component={NormalPlanksHome} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="SidePlanksHome" component={SidePlanksHome} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="PushUpsHome" component={PushUpsHome} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="InclinePushUps" component={InclinePushUps} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="DeclinePushUps" component={DeclinePushUps} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="CloseGripPushUps" component={CloseGripPushUps} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="CobraPushUps" component={CobraPushUps} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="MountainClimber" component={MountainClimber} 
            options={{headerShown: false}}
            />
            <Abs2DetailsStack.Screen name="WheelRoller" component={WheelRoller} 
            options={{headerShown: false}}
            />
           
           


          </Abs2DetailsStack.Navigator>
    )
}

export default Abs2DetailsScreenStack;  