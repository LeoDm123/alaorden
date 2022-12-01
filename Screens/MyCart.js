import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ToastAndroid, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Items} from '../Constants/Database';
import {Stack} from "@react-native-material/core"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DirectionCard } from '../Components/Cards/DirectionCard';
import { CardsCard, Counter, PayButton, ShopCartHeader } from '../Components';
import { COLORS, FONTS, SIZES } from '../Constants';

const MyCart = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach(data => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  //get total price of all items in the cart
  const getTotal = productData => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  //remove data from Cart

  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }

        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  //checkout
  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);

    navigation.navigate('Confirmation');
  };

  const renderProducts = (data, index) => {
    return(
      <Stack style={{
        flexDirection:"row",
        alignItems:"center",
        padding:SIZES.base,
      }}>
        <TouchableOpacity 
          key={data.key}
          onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
          >
          <View>
              <Image
                source={data.productImage}
                style={{
                 resizeMode: 'contain',
                 height:120,
                 width:120,                 
                }}
                
              />
            </View>
        </TouchableOpacity>
        <View style={{
          padding:SIZES.base,          
        }}>
          <View style={{}}>
            <Text
              style={{                
                  fontFamily: FONTS.semiBold,
                  fontSize: SIZES.large,
                  color: COLORS.primary,
                  maxWidth:280,
              }}>
              {data.productName}
            </Text>
            <View style={{
              flexDirection:"row",              
            }}>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.regular,
                  color: COLORS.primary,
                  maxWidth:280,
                }}>
                ${data.productPrice}
              </Text>
              <Text>
                (~$
                {data.productPrice + data.productPrice / 20})
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Counter/>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize:SIZES.extraLarge,
                  color: COLORS.primary,
                  backgroundColor: COLORS.lightGray,
                  padding: SIZES.medium,
                  marginStart:95
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Stack>  
    );
  };

  return (
    <SafeAreaView>
      <ShopCartHeader/>
      <View style={{height:550}}>
      <ScrollView>            
        <View>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <View style={{
            paddingVertical:SIZES.medium,
            paddingHorizontal:SIZES.small/2,
          }}>
            <Text
              style={{
                fontFamily:FONTS.bold,
                fontSize:SIZES.large,
                padding:SIZES.base,
                color:COLORS.primary,
              }}>
              Direccion de entrega
            </Text>
            <View>
              <DirectionCard/>
            </View>
          </View>
          <View style={{
            paddingVertical:SIZES.medium,
            paddingHorizontal:SIZES.small/2,
          }}>
            <Text
              style={{
                fontFamily:FONTS.bold,
                fontSize:SIZES.large,
                padding:SIZES.base,
                color:COLORS.primary,
              }}>
              Metodo de pago
            </Text>
            <View>
              <View>
                <CardsCard/>
              </View>              
            </View>
          </View>
          <View style={{
            paddingVertical:SIZES.medium,
            paddingHorizontal:SIZES.small/2,
          }}>
            <Text
              style={{
                fontFamily:FONTS.bold,
                fontSize:SIZES.large,
                padding:SIZES.base,
                color:COLORS.primary,
              }}>
              Información de compra
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily:FONTS.regular,
                  fontSize:SIZES.medium,
                  padding:SIZES.base,
                  color:COLORS.primary,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontFamily:FONTS.regular,
                  fontSize:SIZES.medium,
                  padding:SIZES.base,
                  color:COLORS.primary,
                }}>
                $ {total}.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily:FONTS.regular,
                  fontSize:SIZES.small,
                  padding:SIZES.base,
                  color:COLORS.primary,
                }}>
                Costo de envío
              </Text>
              <Text
                style={{
                  fontFamily:FONTS.regular,
                  fontSize:SIZES.small,
                  padding:SIZES.base,
                  color:COLORS.primary,
                }}>
                $ {total / 20}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily:FONTS.regular,
                  fontSize:SIZES.medium,
                  padding:SIZES.base,
                  color:COLORS.primary,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontFamily:FONTS.regular,
                  fontSize:SIZES.medium,
                  padding:SIZES.base,
                  color:COLORS.primary,
                }}>
                $ {total + total / 20}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
         

      <SafeAreaView style={{
        paddingVertical: SIZES.base,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
      }}>
        <PayButton
          handlePress={() => (total != 0 ? checkOut() : null)}          
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default MyCart;