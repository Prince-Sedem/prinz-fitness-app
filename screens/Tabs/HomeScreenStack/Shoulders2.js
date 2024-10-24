import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Shoulders2({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity onPress={() => navigation.navigate("ShouldersEx")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity onPress={() => navigation.navigate("ShoulderShrug")}>
            <View>
              <Image source={require('../images2/shoulder-shrug.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Shoulder Shrug</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("ArmCircle")}>
            <View>
              <Image source={require('../images2/arm-circle.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Arm Circle</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => navigation.navigate("PlankArmLifts")}>
            <View>
              <Image source={require('../images2/plank-arm-lifts.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Plank Arm lifts</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("Burpees")}>
            <View>
              <Image source={require('../images2/burpees-home.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white">Burpees</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("JumpingJack")}>
            <View>
              <Image source={require('../images2/jumping-jack.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Jumping Jack</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DipsHome")}>
            <View>
              <Image source={require('../images2/dips-home.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dips</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("PushUpsHome")}>
            <View>
              <Image source={require('../images2/home-chest-press.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Push Ups</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("InclinePushUps")}>
            <View>
              <Image source={require('../images2/home-incline.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Incline Push Ups</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DeclinePushUps")}>
            <View>
              <Image source={require('../images2/home-decline.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Decline Push Ups</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("CloseGripPushUps")}>
            <View>
              <Image source={require('../images2/home-grip-pushup.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Close Grip Push Ups</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity onPress={() => navigation.navigate("CobraPushUps")}>
            <View>
              <Image source={require('../images2/cobra-pushups.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cobra Push Ups</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity onPress={() => navigation.navigate("MountainClimber")}>
            <View>
              <Image source={require('../images2/climbing-mountain.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Mountain Climber</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity onPress={() => navigation.navigate("WheelRoller")}>
            <View>
              <Image source={require('../images2/roller.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Wheel Roller</Text>
            </View>
          </TouchableOpacity>      
        </ScrollView>
    </View>
  )
}