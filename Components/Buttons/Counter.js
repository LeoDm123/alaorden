import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../Constants';
import { useState } from 'react';


export const Counter = () => {
const [count, setCount] = useState(1)
    
  return (
    <View style={{
    flexDirection: 'row',
    alignItems: 'center',
    }}>
        <View style={{
        borderRadius: 100,
        marginRight: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: COLORS.primary,
        opacity: 0.5,
        }}>
            <TouchableOpacity 
            onPress={() => setCount(count-1)}
            >
                <MaterialCommunityIcons
                name="minus"
                style={{
                fontSize: 20,
                color: COLORS.primary,
                }}/>
            </TouchableOpacity>            
        </View>
        <Text>{count}</Text>
        <View style={{
        borderRadius: 100,
        marginLeft: 20,
        padding: 4,
        borderWidth: 1,
        borderColor: COLORS.primary,
        opacity: 0.5,
        }}>
            <TouchableOpacity
            onPress={() => setCount(count+1)}
            >
                <MaterialCommunityIcons
                name="plus"
                style={{
                fontSize: 20,
                color: COLORS.primary,
                }}/>
            </TouchableOpacity>            
        </View>
    </View>
  )
}
