import React, {useState, useEffect} from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, FlatList, Image, Dimensions, Animated, ToastAndroid, SafeAreaView} from 'react-native';
import {Items} from '../Constants/Database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DetailsHeader} from '../Components/Headers/DetailsHeader';
import { COLORS, FONTS, SIZES, SHADOWS } from '../Constants';
import { AddCartButton, CircleButton, Counter } from '../Components';
import styles from '../Constants/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 


const ProductInfo = ({route, navigation}) => {
  const {productID} = route.params;

  const [product, setProduct] = useState({});

  const [count, setCount] = useState(1);

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //add to cart

  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Market');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Item Added Successfully to cart',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Market');
      } catch (error) {
        return error;
      }
    }
  };

  //product horizontal scroll product card
  const renderProduct = ({item, index}) => {
    return (
      <SafeAreaView>        
        <View
          style={{
            width: width,
            height: 240,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={item}
            style={styles.PhotoDisplay}
          />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <SafeAreaView>
            <DetailsHeader/>
      </SafeAreaView>
      <ScrollView
      data={productID.bids}
      renderItem={({ item }) => <DetailsBid bid={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
      paddingBottom: SIZES.extraLarge * 3,
      }}>
        <View> 
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <View style={styles.Display}>
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: '16%',
                        height: 2.4,
                        backgroundColor: COLORS.primary,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}></Animated.View>
                  );
                })
              : null}
          </View>
        </View>
        <View style={styles.InfoDisplay}>          
          <View style={styles.InfoSubDisplay}>
            <Text style={styles.ProductName}>{product.productName}</Text>            
          </View>
          
          <Text style={styles.ProductPresentation}>{product.presentation}</Text>           

          <View style={{
            paddingVertical:SIZES.medium,           
          }}>
            <View style={styles.CounterAligment}>
              <View>            
                <Text style={styles.Price}>Precio: $ {product.productPrice*count}</Text>
              </View>
          
        
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
              
            </View>
          </View>
          <View style={styles.Separator}>
            <Text style={styles.SubText}>
              Costo de envío (aprox.): $ {product.productPrice / 2*count}
            </Text>
          </View>
          <View style={{paddingVertical:SIZES.large}}>
            <Text style={styles.PriceBig}>
                Total con envío: $ {(product.productPrice + product.productPrice / 2)*count}
              </Text>
          </View>    
        </View>
      </ScrollView>
      
      <View style={{
        width: "100%",
        flexDirection:"row",
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        zIndex: 1,
      }}>
        <AddCartButton
            keyExtractor={(item) => item.id}
            minWidth={170} 
            fontSize={SIZES.large} 
            {...SHADOWS.dark}
            backgroundColor={COLORS.primary}
            handlePress={() => (product.isAvailable ? addToCart(product.id) : null)}
          />
      </View>    
    </View>
  );
};

export default ProductInfo;