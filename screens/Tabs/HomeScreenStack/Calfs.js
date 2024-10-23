import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Calfs({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Calfs2")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity onPress={() => navigation.navigate("WalkingOnTreadmill")}>
            <View>
              <Image source={require('../images2/walking-treadmill.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Walking on Treadmill</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BarbellStandingLegCalfRaise")}>
            <View>
              <Image source={require('../images2/barbell-standing-calf-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Standing Leg Calf Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("BarbellSeatedCalfRaise")}>
            <View>
              <Image source={require('../images2/barbell-seated-calf-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Barbell Seated Calf Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("DumbbellSeatedCalfRaise")}>
            <View>
              <Image source={require('../images2/dumbbell-seated-calf-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Seated Calf Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("HackCalfRaise")}>
            <View>
              <Image source={require('../images2/hack-calf-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Hack Calf Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("CableCalfRaise")}>
            <View>
              <Image source={require('../images2/cable-calf-raises.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable Calf Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("SeatedCalfRaise")}>
            <View>
              <Image source={require('../images2/seated-calf-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Seated Calf Raise</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => navigation.navigate("OneLegToeRaise")}>
            <View>
              <Image source={require('../images2/standing-one-leg-calf-raise.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">One Leg Toe Raise</Text>
            </View>
          </TouchableOpacity>    
        </ScrollView>
    </View>
  )
}