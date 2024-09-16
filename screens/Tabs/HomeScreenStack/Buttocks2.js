import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Buttocks2({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity onPress={() => navigation.navigate("Buttocks")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/crunches.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Crunches</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/pelvic-tilt.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Pelvic Tilt</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/sit-ups.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Sit Ups</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/twist-crunch.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white">Twist Crunch</Text>
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
              <Image source={require('../images2/home-chest-press.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Push Ups</Text>
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
              <Image source={require('../images2/roller.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Wheel Roller</Text>
            </View>
          </TouchableOpacity>      
        </ScrollView>
    </View>
  )
}