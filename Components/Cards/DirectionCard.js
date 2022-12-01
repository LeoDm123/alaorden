import React from "react";
import { Text, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../../Constants";
import { CircleButton } from "../Button";
import { Directions } from "../../Constants";


export const DirectionCard = ({ minWidth, fontSize, handlePress, ...props }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        width:"100%",
        borderEndColor:COLORS.primary,
        borderWidth:0.5,
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <View style={{
        flexDirection:"row",
        maxWidth:200,
        padding:SIZES.base,
      }}>
        <Image
          source={assets.Mapa}
          style={{
            width:100, 
            height:110,
            resizeMode:"contain",
            borderRadius:SIZES.extraLarge,
          }}
        />
        <View>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
              color: COLORS.primary,
              marginStart:10,
              marginTop:5,
            }}
          >
            Country Los Olivos - Lote 113
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.regular,
              color: COLORS.primary,
              marginStart:10,
              marginTop:5,
            }}
          >
            Entregar a Juan Perez
          </Text>          
        </View>
        <CircleButton
          imgUrl={assets.right}
          left={320}
          marginTop={40}
          handlePress={() => navigation.navigate("Directions")}
        />         
      </View>           
    </View>
  );
};