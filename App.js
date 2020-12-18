/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import SearchBar from './src/assets/components/SearchBar';
import CategoriesItem from './src/page/home/components/category-item';
import FoodList from './src/page/home/components/food-list-home';
import NavigationBar from './src/assets/components/navigate-bar';

const types = [
  {
    type: 'Makanan',
    image: require('./src/assets/images/dinner.png'),
  },
  {
    type: 'Minuman',
    image: require('./src/assets/images/lunch.png'),
  },
  {
    type: 'Snack',
    image: require('./src/assets/images/breakfast.png'),
  },
  {
    type: 'Jajanan',
    image: require('./src/assets/images/dessert.png'),
  },
];

const listFood = [
  {
    background: require('./src/assets/images/bread.png'),
    miles: 10,
    name: 'Roti Panggang',
    type: 'Cemilan',
    vendor: 'LunaBakery',
    price: '500',
    rating: 97,
  },
  {
    background: require('./src/assets/images/pho.png'),
    miles: 5,
    name: 'Sup Ayam',
    type: 'Makanan',
    vendor: 'Sop ayam pak mien',
    price: '300',
    rating: 95,
  }

];


const App = () => {
  const renderFoodHome= (item) => {
    return <FoodList data={item}/>
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.warp} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.heading}>What do you need?</Text>
              <Text style={styles.description}>theres food is only for you</Text>
            </View>
            <View style={styles.headerCart}>
              <View style={styles.buttonCart}>
                <Image source={require('./src/assets/images/cart.png')} />
                <Text style={styles.numCart}>2</Text>
              </View>
            </View>
          </View>
          <SearchBar />
          <View style={styles.listItemType}>
            {types.map((item, index) => {
              return <CategoriesItem selected={index == 1} {...item} />;
            })}
          </View>
          <View style={styles.listFood}>
            <Text style={styles.listFoodText}>Ada apa di dekatmu?</Text>
            <View style={styles.listRes}>
              {listFood.map(renderFoodHome)}
            </View>
          </View>
        </ScrollView>
        <NavigationBar/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  warp: {
    flex: 1,
    padding: 15,
  },
  headerTitle: {
    width: '70%'
  },
  heading: {
    fontSize: 25,
    fontFamily: 'CeraPro-Bold',
    fontWeight: "600",
    lineHeight: 30,
  },
  description: {
    fontFamily: 'CeraPro-Medium',
    color: 'gray',
    marginTop: 5,
  },
  buttonCart: {
    backgroundColor: "#F7CB6B",
    padding: 12,
    flexDirection: 'row',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowColor: "#F7Cb6b",
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  numCart: {
    fontFamily: 'CeraPro-Medium',
    color: '#FFF',
    paddingHorizontal: 10,
  },
  headerCart: {
    marginLeft: 4,
  },
  listItemType: {
    flexDirection: 'row'
  },
  listRes : {
    marginBottom: 15,
  },
  listFood : {
    marginTop: 15,
  },
  listFoodText : {
    fontFamily: 'CeraPro-Medium',
    fontSize: 20,
  }

});

export default App;