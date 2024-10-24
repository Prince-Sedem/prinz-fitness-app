import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Forearms({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ForearmsEx2")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity onPress={() => navigation.navigate("CableWristCurl")}>
            <View>
              <Image source={require('../images2/cable-wrist-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable Wrist Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BarbellWristCurl")}>
            <View>
              <Image source={require('../images2/barbell-wrist-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Wrist Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("ReverseBarbellWristCurl")}>
            <View>
              <Image source={require('../images2/reverse-barbell-wrist-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Reverse Barbell Wrist Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BarbellBehindTheBackWristCurl")}>
            <View>
              <Image source={require('../images2/barbell-back-wrist-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Behind The Back Wrist Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellHammerCurl")}>
            <View>
              <Image source={require('../images2/dumbbell-hammer-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Hammer Curl</Text>
            </View>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellWristCurl")}>
            <View>
              <Image source={require('../images2/dumbbell-wrist-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Wrist Curl</Text>
            </View>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellReverseWristCurl")}>
            <View>
              <Image source={require('../images2/dumbbell-wrist-reverse.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Reverse Wrist Curl</Text>
            </View>
          </TouchableOpacity>    
        </ScrollView>
    </View>
  )
}