import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { useState } from "react";

import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../Constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        borderColor:COLORS.primary,
        borderWidth:0.3,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const BuyButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Comprar
      </Text>
    </TouchableOpacity>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const AddCartButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Agregar al carrito
      </Text>      
    </TouchableOpacity>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const CartButton = ({ handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        borderColor:COLORS.primary,
        borderWidth:0.3,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={assets.Cart}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const MarketButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        borderColor:COLORS.primary,
        borderWidth:0.3,
        width:"100%",
        marginBottom:10,
        ...props,
      }}
      onPress={handlePress}
    >
      <View>
        <Image
          source={assets.Materiales}
          style={{
            width:377, ///REVISARRR!! Si pongo 100% el borde derecho de la foto tapa el margen del cuadrado.
            height:150,
            resizeMode:"cover",
            borderTopLeftRadius: SIZES.extraLarge,
            borderTopRightRadius: SIZES.extraLarge,
            marginBottom:5,
          }}
        />
      </View>
     <View style={{ 
        flexDirection:"row",
        padding: SIZES.small,
        marginStart:70,
        marginBottom:5,
        }}>   
        <Image
          source={assets.Point}
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
        />
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
            marginStart:10,
            marginTop:5,
          }}
        >
          Marketplace
        </Text>
      </View>  
    </TouchableOpacity>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const LogisticButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderColor:COLORS.primary,
        borderWidth:0.3,
        borderRadius: SIZES.extraLarge,
        width:"100%",
        marginBottom:10,
        ...props,
      }}
      onPress={handlePress}
    >
      <View>
        <Image
          source={assets.Logistica}
          style={{
            width:"100%", 
            height:150,
            resizeMode:"cover",
            borderTopLeftRadius: SIZES.extraLarge,
            borderTopRightRadius: SIZES.extraLarge,
            marginBottom:5,
          }}
        />
      </View>

      <View style={{ 
        flexDirection:"row",
        padding: SIZES.small,
        marginStart:70,
        marginBottom:5,
        }}>   
        <Image
          source={assets.Path}
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
        />
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
            marginStart:10,
            marginTop:5,
          }}
        >
          Logística
        </Text>
      </View>
    </TouchableOpacity>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const PayButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  const [total, setTotal] = useState(null);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Confirmar compra (${total + total / 20} )
      </Text>
    </TouchableOpacity>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////


export const HomeButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Volver a inicio
      </Text>
    </TouchableOpacity>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////


export const LogSearchButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Buscar vehículo
      </Text>
    </TouchableOpacity>
  );
};