import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <View
          style={{
            height: 40,
            width: 40,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 25,
            borderRadius: 20,
          }}>
          <Image
            style={{height: 20, width: 20}}
            source={require('../assets/appIcon.png')}
          />
        </View>
      </TouchableOpacity>
      <View style={{margin: 25}}>
        <Image
          style={{height: 40, width: 40, borderRadius: 20}}
          source={require('../assets/user.png')}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
