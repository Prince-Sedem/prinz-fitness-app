import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Biceps({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Biceps2")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity onPress={() => navigation.navigate("BarbellCurl")}>
            <View>
              <Image source={require('../images2/barbell-curls.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BarbellPreacherCurl")}>
            <View>
              <Image source={require('../images2/preacher-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Preacher Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("OneArmDumbbellPreacherCurl")}>
            <View>
              <Image source={require('../images2/arm-preacher-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">One Arm Dumbbell Preacher Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BicepsMachineCurl")}>
            <View>
              <Image source={require('../images2/biceps-machine-curls.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Biceps Machine Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("StandingDumbbellCurl")}>
            <View>
              <Image source={require('../images2/standing-dumbbell-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Standing Dumbbell Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("ConcentrationCurl")}>
            <View>
              <Image source={require('../images2/concentration-curls.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Concentration Curls</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("StandingHammerCurl")}>
            <View>
              <Image source={require('../images2/standing-hammer-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Standing Hammer Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("CableBicepsCurl")}>
            <View>
              <Image source={require('../images2/cable-biceps-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable Biceps Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("CableOneArmCurl")}>
            <View>
              <Image source={require('../images2/cable-1arm-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable One Arm Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("CableOneArmReverseCurl")}>
            <View>
              <Image source={require('../images2/cable-1arm-reverse-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable One Arm Reverse Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("ReverseGripBarbellCurl")}>
            <View>
              <Image source={require('../images2/reverse-grip-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Reverse Grip Barbell Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("CableReserveCurl")}>
            <View>
              <Image source={require('../images2/reverse-cable-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable Reverse Curl</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("CableStandingHighCurl")}>
            <View>
              <Image source={require('../images2/high-cable-curl.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable Standing High Curl </Text>
            </View>
          </TouchableOpacity>   
        </ScrollView>
    </View>
  )
}