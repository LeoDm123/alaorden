import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import {ListItem} from "@react-native-material/core";
import { Directions } from "../../Constants";

import { COLORS, SIZES, FONTS, assets } from "../../Constants";

const DirectionDetails = ({Directions}) => {
  return (
    <View style={{ 
      paddingVertical:5
    }}>
      <ListItem
        leadingMode="image"
        leading={<Image 
        source={assets.Mapa}
        style={{width:80, height:80}}
        />}
        title="Country Los Olivos - Lote 113"
        secondaryText="Entregar a Juan Perez"        
      />
      <ListItem
        leadingMode="image"
        leading={<Image 
        source={assets.Mapa1}
        style={{width:80, height:80}}
        />}
        title="Corrientes 2151"
        secondaryText="Entregar de 7 a 16 hs"        
      />
    </View>
  );
};

export default DirectionDetails;