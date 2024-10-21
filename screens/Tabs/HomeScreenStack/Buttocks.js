import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Buttocks({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Buttocks2")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity onPress={() => navigation.navigate("BarbellLunge")}>
            <View>
              <Image source={require('../images2/barbell-lunge.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Lunge</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DumbellLunge")}> 
            <View>
              <Image source={require('../images2/lunge-gym.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Lunge</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("OneLegCableKickback")}>
            <View>
              <Image source={require('../images2/cable-kickback.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">One Leg Cable Kickback</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("StandingMachineHipAbductions")}>
            <View>
              <Image source={require('../images2/standing-hip-abduction.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Standing Machine Hip Abductions</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("SeatedMachineHip")}>
            <View>
              <Image source={require('../images2/seated-hip-machine.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Seated Machine Hip</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("OneLegSquat")}>
            <View>
              <Image source={require('../images2/one-leg-squat.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">One Leg Squat</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("HipThrust")}>
            <View>
              <Image source={require('../images2/hip-thrust.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Hip Thrust</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("BarbellFullSquat")}>
            <View>
              <Image source={require('../images2/barbell-squat.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Full Squat</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("SmithMachineSquat")}>
            <View>
              <Image source={require('../images2/machine-squat.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Smith Machine Squat</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellStepUps")}>
            <View>
              <Image source={require('../images2/dumbbell-stepup.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Step Ups</Text>
            </View>
          </TouchableOpacity>   
        </ScrollView>
    </View>
  )
}