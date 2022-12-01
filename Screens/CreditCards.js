import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { CardHeader } from '../Components';
import CardDetails from '../Components/Details/CardDetails';


const CreditCards = () => {
  return (
    <SafeAreaView>
        <View>
           <CardHeader/>
        </View>
        <View>
           <CardDetails/>
        </View>
    </SafeAreaView>        
  );
};

export default CreditCards;