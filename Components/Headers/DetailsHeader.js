import React from "react";
import { View, Image, StatusBar } from "react-native";
import { CircleButton } from "../Button";
import { CartButton } from "../Button";

import { COLORS, SIZES, assets } from "../../Constants";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Constants/Styles";
import Avatar from "../Headers/HeadersComponents/Avatar"

export const DetailsHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.Header3}>
             <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
            />

             <CartButton
                right={15}
                handlePress={() => navigation.navigate("MyCart")}
            /> 
            
            <View style={styles.LogoDisplay}>
                <Image
                    source={assets.logo3}
                    style={styles.Logo3View}
                />
                <Avatar/>
            </View>            
        </View>
    );
};