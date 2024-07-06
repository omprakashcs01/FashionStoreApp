import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CategoryButton = ({text, isSelected, onPress}) => {
  return (
    <View style={{}}>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: isSelected ? '#E96E6E' : 'grey'},
        ]}
        onPress={onPress}>
        <Text style={{color: 'white', fontSize: 18}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 10,
  },
});
