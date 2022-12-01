import React from "react";
import { View, Dimensions, SafeAreaView } from "react-native";
import DirectionsHeader from "../Components/Headers/DirectionsHeader";

import HomeMap from "../Components/Others/HomeMap";
import HomeSearch from "../Components/Others/HomeSearch";

const LogisticsHome = (props) => {
  return (
    <SafeAreaView>
    <DirectionsHeader/>
      <View>
        <HomeMap />
      </View>
      <HomeSearch />
    </SafeAreaView>
  );
};

export default LogisticsHome;