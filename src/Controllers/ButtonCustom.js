import React from 'react';
import { useFonts } from "expo-font";
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function ButtonCustom(props) {
    const [fontsLoaded] = useFonts({
        'GIlroyLight' : require('../../assets/fonts/GilroyLight.otf'),
        'GilroyExtraBold' : require('../../assets/fonts/GilroyExtraBold.otf'),
        'GilroyMedium' : require('../../assets/fonts/Gilroy-Medium.ttf'),
        'GilroyRegular' : require('../../assets/fonts/Gilroy-Regular.ttf'),
        'GilroySemiBold' : require('../../assets/fonts/Gilroy-SemiBold.ttf'),
    });
  const { onPress, title = 'Login', backgroundColor = '#2A64D9', textColor='#fff'} = props;
  return (
    <Pressable style={[styles.button,{backgroundColor:backgroundColor}]} onPress={onPress}>
      <Text style={[styles.text, {color:textColor}]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontFamily:'GilroySemiBold'
  },
});