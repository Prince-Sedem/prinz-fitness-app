import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Shoulders({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ShouldersEx2")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity onPress={() => navigation.navigate("SeatedMachineShoulderPress")}>
            <View>
              <Image source={require('../images2/machine-shoulder-press.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Seated Machine Shoulder Press</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("NautilusLateralRaise")}>
            <View>
              <Image source={require('../images2/nautilus-raises.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Nautilus Lateral Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("OneArmCableFrontRaise")}>
            <View>
              <Image source={require('../images2/cable-front-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">One Arm Cable Front Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("CableUprightRow")}>
            <View>
              <Image source={require('../images2/cable-upright-row.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable Upright Row</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BentOverCableLateralRaise")}>
            <View>
              <Image source={require('../images2/bent-over-cable-lateral-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Bent Over Cable Lateral Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("CableLeaningLateralRaise")}>
            <View>
              <Image source={require('../images2/leaning-lateral-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable Leaning Lateral Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("RearDeltRopePull")}>
            <View>
              <Image source={require('../images2/rear-delt-ropepull.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Rear Delt Rope Pull</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellRearDeltRow")}>
            <View>
              <Image source={require('../images2/dumbbell-rear-delt.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white">Dumbbell Rear Delt Row</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellStandingPress")}>
            <View>
              <Image source={require('../images2/standing-dumbbell-press.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white">Dumbbell Standing Press</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellOneArmStandingPress")}>
            <View>
              <Image source={require('../images2/1arm-dumbbell-press.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell One Arm Standing Press</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellSeatedPress")}>
            <View>
              <Image source={require('../images2/dumbbell-seated-press.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Seated Press</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellOneArmSeatedPress")}>
            <View>
              <Image source={require('../images2/1arm-dumbbell-seated-press.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell One Arm Seated Press</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BarbellFrontRaises")}>
            <View>
              <Image source={require('../images2/barbell-front-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Front Raises</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BarbellFrontShoulderPress")}>
            <View>
              <Image source={require('../images2/shoulder-press-front.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Front Shoulder Press</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BarbellBackShoulderPress")}>
            <View>
              <Image source={require('../images2/shoulder-press-back.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Back Shoulder Press</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellArnoldPress")}>
            <View>
              <Image source={require('../images2/dumbbell-arnold-press.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Arnold Press</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("WeightedFrontRaise")}>
            <View>
              <Image source={require('../images2/weighted-front-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Weighted Front Raise</Text>
            </View>
          </TouchableOpacity>  
        </ScrollView>
    </View>
  )
}