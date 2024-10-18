import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Forearms2({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity onPress={() => navigation.navigate("Forearms")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity onPress={() => navigation.navigate("WristCircles")}>
            <View>
              <Image source={require('../images2/wrist-circles.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Wrist Circles</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("Burpees")}>
            <View>
              <Image source={require('../images2/burpees-home.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Burpees</Text>
            </View>
          </TouchableOpacity> 
        </ScrollView>
    </View>
  )
}