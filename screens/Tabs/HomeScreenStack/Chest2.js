import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Chest2({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity onPress={() => navigation.navigate("Chest")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity onPress={() => navigation.navigate("PushUps")}>
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
          <TouchableOpacity onPress={() => navigation.navigate("WideArmPushUps")}>
            <View>
              <Image source={require('../images2/home-wide-pushups.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Wide Arm Push Ups</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("OneArmPushUps")}>
            <View>
              <Image source={require('../images2/home-onehand-pushups.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">One Arm Push Ups</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("ClappingPushUps")}>
            <View>
              <Image source={require('../images2/home-clap-pushups.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Clapping Push Ups</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DipsHome")}>
            <View>
              <Image source={require('../images2/home-dips.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dips</Text>
            </View>
          </TouchableOpacity>   
        </ScrollView>
    </View>
  )
}