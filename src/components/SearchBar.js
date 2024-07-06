import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchBar = ({placeholder, onChange, value}) => {
  return (
    <View 
      style={{
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 30,

        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
      }}>
      <Text style={{paddingLeft: 10, opacity: 0.5}}>
        <FontAwesome5 name="search" size={20} />;
      </Text>
      <TextInput
        style={{paddingLeft: 10, fontSize: 18, flex: 1}}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
