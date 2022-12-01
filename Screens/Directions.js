import React from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { DirectionsHeader } from '../Components'
import DirectionDetails from '../Components/Details/DirectionDetails'

const Directions = () => {
  return (
    <SafeAreaView>
        <View>
           <DirectionsHeader/> 
        </View>
        <View>
          <DirectionDetails/>
        </View>
    </SafeAreaView>
        
  )
}

export default Directions