import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryButton from '../components/CategoryButton';
import ProductCart from '../components/ProductCart';

const CategoryData = ['Trending Now', 'New', 'All', 'Mens', 'Womans'];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Trending Now');

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />
      <Text style={{fontSize: 25, paddingLeft: 50}}>Match Your style</Text>
      <SearchBar />
      <View style={{}}></View>
      <View style={{}}>
        <FlatList
          data={CategoryData}
          renderItem={({item}) => {
            return (
              <View style={{paddingVertical: 10}}>
                <CategoryButton
                  text={item}
                  isSelected={item === selectedCategory}
                  onPress={() => setSelectedCategory(item)}
                />
              </View>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <ProductCart />
        <ProductCart />
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});
