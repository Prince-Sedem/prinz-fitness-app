import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Shoulders({navigation}) {
  return (
    <View>
       <View className="flex-row justify-around"> 
                <TouchableOpacity >
                    <Text className="bg-green-700 mt-4 text-white rounded-lg p-2 pl-4 pr-4">Gym Workout</Text>          
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Shoulders2")}>
                    <Text className="bg-white mt-4 text-green-700 rounded-lg p-2 pl-4 pr-4 border border-green-700">Home Workout</Text>          
                </TouchableOpacity>
        </View>
        <ScrollView className="mt-2 mb-2 h-[630px] ">
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/cable-pushdown.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Cable Push Down</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/pushdown-1arm-reverse.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">One Arm Cable Push Down</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/pushdown-reverse.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Reverse Cable Push Down</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/pushdown-1arm-reverse.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Reverse One Arm Cable Push Down</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/wide-pull-up.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Wide Grip Pull Up</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/rope-pushdown.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Rope Push Down</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/dips.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dips</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/lying-triceps-extension.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white">Lying Triceps Extension</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/dumbbell-triceps-extension.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Triceps Extension</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/1arm-triceps-extension.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white">One Arm Dumbbell Triceps Extension</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/seated-triceps-extension.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Seated Dumbbell Triceps Extension</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/overhead-triceps-extension.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Overhead Triceps Extension</Text>
            </View>
          </TouchableOpacity>  
          <TouchableOpacity>
            <View>
              <Image source={require('../images2/triceps-kickback.png')} className="m-3 w-[382px] h-[200px] rounded-lg"/>
              <Text className="absolute ml-5 mt-44  font-bold text-white ">Dumbbell Triceps Kickback</Text>
            </View>
          </TouchableOpacity>  
        </ScrollView>
    </View>
  )
}