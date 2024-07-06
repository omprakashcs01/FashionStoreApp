import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import for solid heart

const ProductCart = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={{width: '50%', position: 'relative'}}>
      <Image
        style={{
          height: 256,
          borderRadius: 20,
          width: 167,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
        source={require('../assets/data.png')}
      />
      <TouchableOpacity style={styles.likeContainer} onPress={toggleLike}>
        {isLiked ? (
          <FontAwesome name="heart" size={20} color="red" />
        ) : (
          <FontAwesome5 name="heart" size={20} color="red" />
        )}
      </TouchableOpacity>
      <View style={{paddingLeft: 30}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>Jacket Jeans</Text>
        <Text style={{fontSize: 20}}>$50</Text>
      </View>
    </View>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  likeContainer: {
    width: 34,
    height: 34,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 17,
  },
});
