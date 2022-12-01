import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";
import { useState, useEffect } from "react";

import { COLORS, SIZES, SHADOWS, assets } from "../../Constants";
import { SubInfo, MATPrice, MATTitle } from "../SubInfo";
import { BuyButton, CircleButton } from "../Button";

const MATCard = ({ data }) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = () => {
    let productList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      }
    }

    setProducts(productList);
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.lightGray,
        borderColor:COLORS.primary,
        borderWidth:0.3,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.productImage}
          resizeMode="contain"
          backgroundColor={COLORS.white}
          style={{
            width: 373, //REVISARRR!!!! 
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <MATTitle
          title={data.productName}
          subTitle={data.presentation}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MATPrice price={data.productPrice} />
          
          <BuyButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("ProductInfo", {productID: data.id })}
          />
        </View>
      </View>
    </View>
  );
};

export default MATCard;