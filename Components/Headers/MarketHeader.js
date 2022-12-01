import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../Headers/HeadersComponents/Avatar"

import { SIZES, assets } from "../../Constants";
import { CartButton, CircleButton } from "../Button";
import styles from "../../Constants/Styles";

const MarketHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.Header2}>
      <CircleButton
          imgUrl={assets.left}
          handlePress={() => navigation.goBack()}
          left={15}          
        />    

      <CartButton
        right={15}
        handlePress={() => navigation.navigate("MyCart")}
      /> 

      <View style={styles.HeaderPosition}>
        <Image
          style={styles.Logo3View}
          source={assets.logo3}
        /> 
         <Avatar/>
      </View>

      <View style={{ marginVertical: SIZES.font }}>

        <Text style={styles.SubTitle}>
          Bievenido Leandro!👋
        </Text>

        <Text style={styles.HeaderTitle}>
          ¡Encontremos los materiales que necesitas!
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.SearchBarPosition}>
          <Image
            style={styles.SearchBarLogo}
            source={assets.search}            
          />
          <TextInput
            placeholder="Buscar materiales"
            style={styles.SearchBarText}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default MarketHeader;