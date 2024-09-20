import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Legs2({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity onPress={() => navigation.navigate("Legs")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/side-lunges.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Side Lunges</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/high-knees.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">High Knees</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/bridging-workout.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Bridging</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/lunge-home.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Lunge</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/walking.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Walking</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/jogging.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Jogging</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/jump-squat.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Squat Jump</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/squats-home.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Squat</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/flutter-kicks.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Flutter Kicks</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/leg-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Leg Raise</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/step-ups.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white">Step Ups</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/plank.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Normal Planks</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/side-plank.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Side Plank</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/home-incline.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Incline Push Ups</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/home-decline.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Decline Push Ups</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/home-grip-pushup.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Close Grip Push Ups</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/cobra-pushups.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cobra Push Ups</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/climbing-mountain.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Mountain Climber</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/jumping-jack.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Jumping Jack</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/Superman-core.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Superman</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/burpees-home.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Burpees</Text>
            </View>
          </TouchableOpacity>      
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/one-leg-squat.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">One Leg Squat</Text>
            </View>
          </TouchableOpacity>      
        </ScrollView>
    </View>
  )
}