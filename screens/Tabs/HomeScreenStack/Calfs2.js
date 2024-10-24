import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Calfs2({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity onPress={() => navigation.navigate("CalfsEx")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] "> 
          <TouchableOpacity onPress={() => navigation.navigate("LyingCalfStretch")}>
            <View>
              <Image source={require('../images2/lying-calf-stretch.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Lying Calf Stretch</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("Walking")}>
            <View>
              <Image source={require('../images2/walking.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Walking</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("Jogging")}>
            <View>
              <Image source={require('../images2/jogging.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Jogging</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("HighKnees")}>
            <View>
              <Image source={require('../images2/high-knees.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">High Knees</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity onPress={() => navigation.navigate("Lunge")}>
            <View>
              <Image source={require('../images2/lunge-home.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Lunge</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => navigation.navigate("SquatJump")}>
            <View>
              <Image source={require('../images2/jump-squat.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Squat Jump</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => navigation.navigate("Squats")}>
            <View>
              <Image source={require('../images2/squats-home.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Squat</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("StepUps")}>
            <View>
              <Image source={require('../images2/step-ups.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white">Step Ups</Text>
            </View>
          </TouchableOpacity>         
          <TouchableOpacity onPress={() => navigation.navigate("MountainClimber")}>
            <View>
              <Image source={require('../images2/climbing-mountain.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Mountain Climber</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity onPress={() => navigation.navigate("JumpingJack")}>
            <View>
              <Image source={require('../images2/jumping-jack.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Jumping Jack</Text>
            </View>
          </TouchableOpacity>          
          <TouchableOpacity onPress={() => navigation.navigate("Burpees")}>
            <View>
              <Image source={require('../images2/burpees-home.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Burpees</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity onPress={() => navigation.navigate("OneLegSquatHome")}>
            <View>
              <Image source={require('../images2/one-leg-squat.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">One Leg Squat</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity onPress={() => navigation.navigate("StandingCalfRaise")}>
            <View>
              <Image source={require('../images2/standing-calf-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Standing Calf Raise</Text>
            </View>
          </TouchableOpacity>      
        </ScrollView>
    </View>
  )
}