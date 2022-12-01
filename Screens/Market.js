import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, ScrollView} from 'react-native';
import { MarketHeader, MATCard } from '../Components';
import { Items } from '../Constants/Database';


const Market = ({navigation}) => {
  const [products, setProducts] = useState([]);

 const handleSearch = (value) => {
    if (value.length === 0) {
      setProducts(Items);
    }

    const filteredData = Items.filter((item) =>
      item.productName.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setProducts(Items);
    } else {
      setProducts(filteredData);
    }
  };

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = async () => {
    let productList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } 
    }

    await setProducts(productList);
  };

  return (
    <View>
      <SafeAreaView>
        <MarketHeader onSearch={handleSearch} />
      </SafeAreaView>

      <View style={{height:500}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View>
              {products.map(data => {
                return <MATCard data={data} key={data.id} />;
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Market;
